import Activity from '../activity/activity'
import Course from './course'
import Consumer from '../consumer/consumer'
import Assignment from '../assignment/assignment'
import SeedData from '../seed/seed-data'
import Visit from '../visit/visit'
import User from '../user/user'
import ActivityData from '../activity-data/activity-data'

async function extractCourse (theCourseId ) {
  const course = await Course.findById(theCourseId)
  // console.log('Extract course', course)
  let consumer = await Consumer.find({_id: course.toolConsumer})

  // -------------- Activities
  let courseActivityDocs = await Activity.find({course: course._id},
    {
      assignment: 1,
      resource_link_id: 1,
      feedbackViewable: 1,
      resource_link_title: 1,
      resource_link_description: 1,
      custom_title: 1,
      custom_description: 1,
      createDate: 1,
      lastDate: 1
    })
  courseActivityDocs = courseActivityDocs.filter(elem => !!elem.assignment)
  let activityIds = new Set()
  for (const elem of courseActivityDocs) {
    activityIds.add(elem._id.toString())
  }
  activityIds = [...activityIds]

  // -------------- Assignments / Learning Objects
  let assignmentIds = new Set()
  for (const elem of courseActivityDocs) {
    assignmentIds.add(elem.assignment.toString())
  }
  assignmentIds = [...assignmentIds]
  let assignments = await Assignment.find({_id: {$in: assignmentIds}},
    {
      name: 1,
      description: 1,
      seedDataId: 1,
      idForLTI: 1,
      mPatientAppType: 1,
      mPatientFilterTag: 1,
      simStages: 1,
      createDate: 1,
      lastUpdateDate: 1,
    })

  // -------------- SEEDS
  let seedIds = new Set()
  for (const elem of assignments) {
    elem.seedDataId ? seedIds.add(elem.seedDataId.toString()) : null
  }
  seedIds = [...seedIds]
  let seeds = await SeedData.find(
    {_id: {$in: seedIds}},
    {
      name: 1,
      description: 1,
      version: 1,
      isDefault: 1,
      contributors: 1,
      createDate: 1,
      lastUpdateDate: 1,
      ehrData: 1
    }
  )

  // -------------- Visits
  const visits = await Visit.find(
    {activity: {$in: activityIds}},
    {
      role: 1,
      user: 1,
      activityData: 1,
      createDate: 1,
      lastVisitDate: 1
    }
  )

  let activityDataIds = new Set()
  let usersIds = new Set()
  for (const elem of visits) {
    activityDataIds.add(elem.activityData)
    usersIds.add(elem.user)
  }
  usersIds = [...usersIds]
  activityDataIds = [...activityDataIds]

  // -------------- Users
  const users = await User.find(
    {_id: {$in: usersIds}},
    {
      user_id: 1,
      givenName: 1,
      familyName: 1,
      fullName: 1,
      createDate: 1,
      lastUpdateDate: 1
    }
  )
  // console.log('usersIds', usersIds)
  // console.log('users', users)

  // -------------- ActivityData
  const activityData = await ActivityData.find(
    {_id: {$in: activityDataIds}},
    {
      visit: 1,
      assignmentData: 1,
      evaluationData: 1,
      submitted: 1,
      createDate: 1,
      lastDate: 1
    }
  )

  // -------------- the Result
  return {
    consumer: consumer[0],
    course: course,
    activities: courseActivityDocs,
    assignments: assignments,
    seeds: seeds,
    visits: visits,
    users: users,
    activityData: activityData
  }
}
export default extractCourse
