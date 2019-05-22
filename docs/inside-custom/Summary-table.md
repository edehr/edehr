# Summary Table Component

> A component that displays a subset of columns from a table with an optional filter.

For the Discharge Summary Page we need to show a series of tables based on data from the patient's chart.
Each table can be identified by it's fully qualified name (FQN) as well as the list of columns.   Yet the columns
must be contained in the table so we only need their FQN's relative to the table's FQN.

For example in the ```medicationOrders.table``` table we need the following
- medication
- route
- schedule.*

Note in this case we're wanting all the fields inside the schedule fieldset.  We don't want to make the list
explicit because the contents of the fieldset may change over time. At the moment this fieldset contains:
- schedule.startDayFood
- schedule.startDay
- schedule.midDayFood
- schedule.midDay
- schedule.endDayFood

Note at this time there is no status type of field on this table.

Another example is the Procedures and Treatments section which pulls from the ```nonmedOrders``` table
Pull
- order
- details

When the order has status ```complete```

For table headers use the ```label``` property of the table.

## Implementation

- Need a method to get the table definition, given a FQN.
- Need a method to get an array of column definitions given an array of relative FQN's plus, handle the wildcard *
- Get the table data and extract the column data

The visual implementation is in the EhrSummaryTable component and the work is done in the helper class in ```ehr-summary-table.js```

The results are presented on the Discharge page which is now a custom view like the MAR and Vitals pages.