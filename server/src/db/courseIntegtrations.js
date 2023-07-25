import Activity from '../mcr/activity/activity'
import Course from '../mcr/course/course'

/**
 * Update the database to include the new Course object for all Activities.
 * This is safe to run many times.  Only Activities that do not have a Course are touched.
 * A Course object is only created if not already present.
 * Course properties are removed from Activities when the link to the Course is made.
 * @returns {Promise<void>}
 */
export default async function dbCreateMissingCourses () {
  const allActivities = await Activity.find({})
  // work with just those Activities that do not have the new 'course' property (id to Course object)
  const withoutCourse = allActivities.filter( elem => !elem.course)
  // group activities by context_id (LMS course id)
  const grouped = withoutCourse.reduce( (r, a) => {
    const key = a.context_id
    r[key] = r[key] || []
    r[key].push(a)
    return r
  }, Object.create(null))
  // iterate over the courses
  const keys = Object.keys(grouped)
  for (const key of keys) {
    const list = grouped[key]
    // use destructuring to get first element of list
    const [first] = list
    const lmsCourseId = first.context_id
    let theCourse
    let foundCourses = await Course.find({context_id: lmsCourseId})
    if (foundCourses.length > 0) {
      // console.log('Use existing Course', theCourse)
      theCourse = foundCourses[0]
    } else {
      // create a new Course object
      const theData = {
        toolConsumer: first.toolConsumer,
        context_id: first.context_id,
        context_label: first.context_label,
        context_title: first.context_title,
        context_type: first.context_type,
        custom_title: ''
      }
      theCourse = await Course.create(theData)
      await theCourse.save()
    }
    // link the activity with the new course
    for (const activity of list) {
      activity.course = theCourse._id
      // remove course properties from the Activity, keep the original context_id for the time being to help trace original data, just in case.
      activity.context_label = undefined
      activity.context_title = undefined
      activity.context_type = undefined
      await activity.save()
    }
  }
}
