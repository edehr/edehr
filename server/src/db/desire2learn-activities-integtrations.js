import Activity from '../mcr/activity/activity'
const debug = require('debug')('server')

/**
 * For all activities, belonging to a D2L LMS, update the activity title and description to match the learning object.
 *
 * Do this because D2L doesn't provide the LMS activity information. It just provides the tool name, over and over again.
 * @returns {Promise<void>}
 */
export default async function desire2learnActivitiesIntegtrations () {
  const allActivities = await Activity.find({}).populate('toolConsumer').populate('assignment')
  const allD2L = allActivities.filter( elem => {
    const t1 = elem.toolConsumer.tool_consumer_info_product_family_code === 'desire2learn'
    const t2 = !!elem.assignment
    return t1 && t2
  })
  // link the activity with the new course
  for (const activity of allD2L) {
    activity.custom_title = activity.assignment.name
    activity.custom_description = activity.assignment.description
    await activity.save()
    debug('updated name on activity', activity.custom_title)
  }
}
