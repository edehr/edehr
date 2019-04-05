# Medication Administration Records - MAR

> Special section of the EdEHR dealing with medication orders and the administration of medications.

Unlike most of the EdEHR, the MAR page is highly customized and complex. The medication and scheduling 
data on the MAR is pulled from the Medication Orders page.

## Schedule Periods -- PeriodDefs
In this prototype EdEHR we had the challenge to define when a medication is scheduled. For the 
sake of a simple first attempt we chose to create arbitrary schedule times:
- breakfast
- breakfast
- midmorning
- lunch
- midafternoon
- dinner

These values are dynamically based on the Medication Order page definitions as defined by the 
Inputs spreadsheet. See the ```PeriodDefs``` class for the algorithm used to construct these 
periods based on the definitions.

Much of the logic is based on this set of time periods.  Each singular time period is called a ```PeriodDef``` 
The set is called ```PeriodDefs```

## Medication Orders

```
let sampleMedicationOrder = {
  name: 'Joe',
  profession: 'N',
  day: '0',
  time: '0:00',
  notes: 'ipsum',
  medication: 'ASA',
  route: 'oral',
  reason: 'sick',
  scheduleType: 'scheduled',
  breakfast: true,
  midafternoon: undefined,
  midmorning: undefined,
  dinner: true,
  lunch: true,
  createdDate: '2019-03-14T15:03:36-07:00',
}
```

(NB. The structure may change and the periods may be nested under a group.)

### Medication Order - Active Status

In a professional EHR the medication order has the concept of being active or not. Sometimes this is managed by setting a start
date and end date. This prototype makes no attempt to manage this status yet the algorithm below shows how
this might play.

## MAR

A MAR is a record of the administration of a set of medications. Each record contains 
- who administered the medication(s)
- the scheduled time for the medication to be administered (one key from from the set of ```PeriodDefs```)
- the actual time administered (24hr clock)
- a list of the medication orders that have been administered in the past
- an optional comment

```
let sample = {
  medAdminRec: {
    lastUpdate: '2019-03-24T15:33:20-07:00',
    table: [
      {
        whoAdministered: 'N',
        day: 0,
        actualTime: '9:00',
        comment: 'no comment',
        scheduledTime: 'breakfast',
        medications: [
          {
            name: 'Joe',
            profession: 'N',
            day: '0',
            time: '0:00',
            medication: 'ASA',
            route: 'oral',
            reason: 'sick',
            scheduleType: 'scheduled',
            breakfast: true,
            midmorning: false,
            lunch: true,
            midafternoon: false,
            dinner: true,
            createdDate: '2019-03-14T15:03:36-07:00'
          }
        ]
      }
    ]
  }
}
```

## MAR page

The MAR page has two tabs: Current Day and Summary (see the code for the actual names).


## MAR Summary

The summary tab contains a table listing of all medication records, as found in the current data as 
stored for the Medications Orders page, combined with all the MARs (stored as data for this MAR page).

For each medication the table displays a yes or no under the MAR. 

We can see a challenge as the number of active days in the assignment grows beyond a few days. For this prototype we
ignore this problem yet it needs to be addressed for a larger system.  One option is to place an afordance like a filter on the page
to select MARs for a particular day.

## MAR Current Day

The Current Day tab shows the list of scheduled periods from 00:00 to 24:00. But only if there is at least one medication scheduled to be 
administered for the period. If a period has medications then it is displayed.

Each period shows its name, medication list and its MAR status. If there is a MAR in the current data for the period (and
current day) then display the MAR. Else display a "Add MAR" button. But only display one Add MAR button on the first period
of the day that lacks a MAR.

## Algorithm to collate Medication Orders and MARs into Periods

1. Initialize
    1. Let ```cDay``` (current day) = 0
    1. Initial list of ```PeriodDefs```
1. If there are no medication orders then 
   1. Done (There are no periods needing a MAR. The Today page is empty)

1. Let ```mOrders``` = the list of medication orders (filtered to only include active orders)
   1. For each period let period.mOrders = mOrders filtered to the those scheduled for the period. (e.g. For the 
   'breakfast' period select all medications that have 'breakfast === true'
   1. Filter the PeriodDefs list to only contain periods that have medications scheduled.

1. If there are no MAR records then
    1. Done (No MAR records so all the periods with scheduled medications need a MAR)
   
1. Set up today 
    1. Let ```cDay``` = the max day in all MAR records.
    1. Let ```marRecs``` = MAR Records filtered to the cDay
    
1. If there are no ```marRecs``` for the current day then
    1. Done (No MAR records for current day so all the periods with scheduled medications need a MAR)
    
1. For each ```mRec``` in ```marRecs``` find the ```period``` in ```PeriodDefs```.  Let ```period.marRec = mRec```

    > At this point, each period has ```mOrders```. If this list is not empty then the period may also have a ```marRec```

1. If all periods have a marRec then 
   1. Let cDay = cDay + 1
   1. Clear marRecs from all periods
   1. Done
   > This situation happens when the last day is full
   
> If we reach this point then the current day has at least one scheduled period that has some medications prescribed and no
MAR record. Display as per described above (Mar Current Day)
   
