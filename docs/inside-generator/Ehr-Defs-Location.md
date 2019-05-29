# EHR Definitions - Location and Styling within the UI

> Where does a UI element go?  How does it look? Does it have any special traits?

The Inputs spreadsheet configuration system lets us define 
- the layout of elements within a page, table or dialog
   - For elements on page forms *or* on a dialog associated with a table see ```formRow, formColumn, formCss, formOption```
   - For elements on tables see ```tableColum, tableCss```
   - For elements that are nested inside a fieldset see ```fsetRow, fsetCol```
- special styling
- special traits


## Location

### formRow, formColumn
Sets the row and column within the fieldset.

## tableColumn
Sets the order of elements as they will appear in the table. This property would be better named: ```tablePosition``` because
it applies to both horizontal and vertical tables.

### fsetRow, fsetCol
Sets the row and column within the fieldset.

## Styling
### formCss
If present, the content in this property is added as a CSS class to the element as it appears in dialogs or page forms. 

### tableCss
If present, the content in this property is added as a CSS class to the element as it appears in tables

## Special traits

### addButtonText
**This is a required field for table elements**.  Every table has a dialog associated with it (to allow for the creation
of new data. Be it as part of a student's assignment or to create the seed data for an assignment.)  The table has a button
that opens the dialog. This ```addButtonText``` is the text displayed in this button. 

### formOption
This property allows special behaviours to be implement. For example, text and select inputs may have ```hideLabel``` which 
causes the UI to hide the label associated with the input element.