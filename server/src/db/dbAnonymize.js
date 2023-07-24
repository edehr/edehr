import User from '../mcr/user/user'
import ActivityData from '../mcr/activity-data/activity-data'

export async function dbAnonymizeUsers () {
  const allUsers = await User.find({})
  console.log('allUsers', allUsers.length)
  for(let i = 0; i< allUsers.length; i++) {
    let user = allUsers[i]
    user.givenName = makeid(7)
    user.familyName = makeid(7)
    user.fullName = user.givenName + ' ' + user.familyName
    user.consumerKey = 'anonkey'
    user.user_id = makeid(20)
    await user.save()
    // console.log('ddd', user)
  }
}

export async function dbAnonymizeActivityData () {
  const allActivityData = await ActivityData.find({})
  console.log('allActivityData', allActivityData.length)
  for(let i = 0; i< allActivityData.length; i++) {
    let activityDatum = allActivityData[i]
    activityDatum.evaluationData = makeid(27)
    activityDatum.scratchData = ''
    await activityDatum.save()
  }
}

function makeid (length) {
  let result = ''
  const characters = 'abcdefghijklmnopqrstuvwxyz'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}
// console.log(makeid(5))
