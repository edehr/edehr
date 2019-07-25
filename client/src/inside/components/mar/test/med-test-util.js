import MedOrder from '../../mar/med-entity'

export function getSampleMedOrderEntity () {
  return new MedOrder(getSampleMedOrderDbDataList()[0])
}

export const SAMPLE1_MED = 'ASA 100mg'
export const SAMPLE2_MED = 'Vitamin C 2000mg'
export const SAMPLE3_MED = 'Metform 23mg'

export function getSampleMedOrderDbDataList () {
  let sample = getMedOrderPageDataSample()
  let sampleList = sample.medicationOrders.table
  return sampleList
}

export function getMedOrderPageDataSample () {
  return {
    medicationOrders: {
      table:
        [
          {
            name: 'Jane',
            profession: 'Doctor',
            day: '0',
            time: '1',
            medication: SAMPLE1_MED,
            route: 'oral',
            scheduleType: 'scheduled',
            breakfast: true,
            midmorning: true,
            lunch: true,
            midafternoon: true,
            dinner: true,
            bedtime: true,
            notes: 'Some notes about the medication'
          },
          {
            name: 'Jane',
            profession: 'Doctor',
            day: '0',
            time: '1',
            medication: SAMPLE2_MED,
            route: 'oral',
            scheduleType: 'scheduled',
            lunch: true,
            dinner: true,
            notes: 'Notes about ASA'
          },
          {
            name: 'Jane',
            profession: 'Doctor',
            day: '0',
            time: '1',
            medication: SAMPLE3_MED,
            route: 'oral',
            scheduleType: 'scheduled',
            breakfast: true,
            lunch: true,
            notes: 'Notes about Metform',
            midafternoon: true,
            bedtime: true
          }
        ]
    }
  }
}

export function getSampleMarDbDataList (cnt) {
  let sample = getMarPageDataSample()
  let sampleList = sample.medAdminRec.table
  if (cnt ) {
    sampleList.length = cnt
  }
  return sampleList
}

export function getMarPageDataSample () {
  return {
    medAdminRec:{
      table:[
        {
          whoAdministered:'N',
          day:0,
          actualTime:'9:00',
          comment:'no comment',
          scheduledTime:'breakfast',
          medications:[
            {
              medication: SAMPLE1_MED,
              scheduleType:'scheduled',
              breakfast:true,
            },
            {
              medication: SAMPLE3_MED,
              scheduleType:'scheduled',
              breakfast:true,
            }
          ]
        },
        {
          whoAdministered:'B',
          day:0,
          actualTime:'10:00',
          comment:'done',
          scheduledTime:'midmorning',
          medications:[
            {
              name:'Jane',
              profession:'D',
              day:'1',
              time:'9:00',
              medication: SAMPLE1_MED,
              scheduleType:'scheduled',
              midmorning:true,
            }
          ]
        },
        {
          whoAdministered:'D1l',
          day:0,
          scheduledTime:'lunch',
          medications:[ { medication: SAMPLE1_MED}]
        },
        {
          whoAdministered:'D1ma',
          day:0,
          scheduledTime:'midafternoon',
          medications:[ { medication: SAMPLE1_MED}]
        },
        {
          whoAdministered:'D1d',
          day:0,
          scheduledTime:'dinner',
          medications:[ { medication: SAMPLE1_MED}]
        },
        {
          whoAdministered:'D2',
          day:1,
          scheduledTime:'breakfast',
          medications:[ { medication: SAMPLE1_MED}]
        },
      ]
    }
  }
}
