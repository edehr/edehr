import EventBus, { MESSAGE_FROM_SERVER } from '@/helpers/event-bus'
import store from '../store'
import StoreHelper from '@/helpers/store-helper'
import System from '@/store/modules/system'

const map = {
  ACTIVITY: [updateActivity],
  ACTIVITY_DATA : [updateActivityData],
  LEARNING_OBJECT: [updateLearningObject]
}
export function setupRealTime () {
  EventBus.$on(MESSAGE_FROM_SERVER, (value) => {
    console.log('RT message', value)
    try {
      let payload = JSON.parse(value)
      let actions = map[payload.channel]
      if(actions) {
        actions.forEach(action => action(payload))
      }
    } catch (err) {
      console.error('Realtime handler got a message that is not JSON', value)
    }
  })
}

async function updateActivity (payload) {
  let id = store.getters['activityStore/activityId']
  if (payload.id === id) {
    await store.dispatch('activityStore/loadActivityRecord')
  }
}
async function updateActivityData (payload) {
  let id = store.getters['activityDataStore/id']
  if (payload.id === id) {
    try {
      StoreHelper.setLoadingEnabled( false)
      await store.dispatch('activityDataStore/loadActivityData')
    } finally {
      StoreHelper.setLoadingEnabled( true)
    }
  }
  if (StoreHelper.isInstructor()) {
    let needsUpdate = false
    let classList = store.getters['instructor/classList']
    for (const sv of classList) {
      let aId = sv.activityData._id
      // console.log(' is this aID match', aId, payload.id)
      if (payload.id === aId) {
        needsUpdate = true
        break
      }
    }
    if (needsUpdate) {
      await store.dispatch('instructor/loadClassList')
    }
  }
}

function updateLearningObject (payload) {
  let arec = store.getters['activityStore/activityRecord']
  let lid = arec ? arec.learningObjectId : undefined
  if (payload.id === lid) {
    // will load using current activity id
    store.dispatch('activityStore/loadActivityRecord')
  }
  let id = store.getters['assignmentStore/learningObjectId']
  if(payload.id === id) {
    store.dispatch('assignmentStore/reload')
  }
}
