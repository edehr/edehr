# EdEHR calculated values component
> A special component that can calculate a value based on other elements of a page. 
Two notable examples are the Glasgow Coma Acale and the Stroke Assessment. 
See the CurrentVisit-1 tab in the Inputs spreadsheet.

# How to create a calculated value

In the inputs spreadsheet use the ```calculatedValue``` inputType for the calculated field. At this time, we assume the calculation
is based on summing numeric values based on the selected options from a series of dropdowns. We assume the dropdown options
look like this: "N = some text". In the Inputs spreadsheet under the ```passToFunction``` column place the calculated data value key beside every input (on the same page!) that is to be used in the sum.

Two changes June 2022. 
1. The key can now be an array of keys to send the value to more than one calculated value cell. 
2. The calculatedValue element now needs to specify the type of operation. Before the default was to sum all values. The possible options include: sum, average, product, and multiplyBy(N)

The product option will multiply all values. E.g. a * b * c etc 

The multiplyBy(N) will multiply each value by N and add it to the sum: a * N + b * N, etc (implemented as (a+b)*N)) 

The calculations are performed in ```./src/helpers/ehr-defs.js```. The calculations assume a value of 0 for empty selections.

## Glasgow Coma Scale Calculations
Calculate this value based on the sum of the scores in the ```glasgowComaScale``` fieldset.

## Stroke Assessment Calculations
Calculate stroke assessment based on the sum of the scores in the ```stroke``` fieldset.