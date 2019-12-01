# Summary Table Component

> A component that displays a subset of columns from a table with an optional filter.

The Discharge Summary Page shows a a summary of tabular data based on the patient's chart.
Each table can be identified by it's fully qualified name (FQN) as well as the list of columns. Each column
must be contained within the table so only FQN's relative to the table's FQN are needed.

For example, in the ```medicationOrders.table``` table the following data is required:
- medication
- route
- schedule.*

All of the fields should be inside the schedule fieldset. The list is not made
explicit because the contents of the fieldset may change over time. At the moment, this fieldset contains:
- schedule.startDayFood
- schedule.startDay
- schedule.midDayFood
- schedule.midDay
- schedule.endDayFood

There is no status type of field on this table.

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