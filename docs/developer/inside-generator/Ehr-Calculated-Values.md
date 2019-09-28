#Ed EHR Calculated Values Component
> A special component that can calculate a value based on other elements of a page. 
Two notable examples are the Glasgow Coma Acale and the Stroke Assessment. 
See the CurrentVisit-1 tab in the Inputs spreadsheet.

#How to Create a Calculated Value

In the inputs spreadsheet use the ```calculatedValue``` inputType for the calculated field.  At this time, we assume the calculation
is based on summing numeric values based on the selected options from a series of dropdowns.  We assume the dropdown options
look like this: "N = some text".  In the Inputs spreadsheet under the ```passToFunction``` column place the calculated data value key
beside every input (on the same page!) that is to be used in the sum.  

The calculations are performed in ```./src/helpers/ehr-defs.js```. The calculations assume a value of 0 for empty selections.

### Glasgow Coma Scale Calculations
Calculate this value based on the sum of the scores in the ```glasgowComaScale``` fieldset.  

### Stroke Assessment Calculations
Calculate stroke assessment based on the sum of the scores in the ```stroke``` fieldset.