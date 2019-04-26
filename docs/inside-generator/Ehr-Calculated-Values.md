#Ed EHR Calculated Values Component
> A special component that can calculate a value based on other elements of a page. 
Two notable examples are the Glasgow .. scale and the Stroke Assessment. 
See the CurrentVisit-1 tab in the Inputs spreadsheet.

#How to create a calculated value

In the inputs spreasheet use the ```calculatedValue``` inputType for the calculated field.  At this time, we assume the calculation
is based on summing numeric values based on the selected options from a a series of dropdowns.  Further, we assume the dropdown options
look like this: "N = some text".  Also in the Inputs spreadsheet under the ```passToFunction``` column place the calculated data value key
beside every input (on the same page!) that is to be used in the sum.  

The calculations are performed in ```./src/helpers/ehr-defs.js```. The calculations assume a value of 0 for empty selections.

### Glasgow Coma Scale calculations
Calculate this value based on the sum of the scores in the ```glasgowComaScale``` fieldset.  

### Stroke assessment calculations
Calculate stroke assessment based on the sum of the scores in the ```stroke``` fieldset.

