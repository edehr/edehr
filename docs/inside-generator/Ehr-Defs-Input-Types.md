# EHR Definitions - Input Types

> Each element has a type. 

## page
A page element defines an EHR page; the top level element. The child elements for page include: page_form and table_row.
A page can have one or none one page_form.
A page can have one or more table_row elements.
A page needs at least one element to be useful.

## page_form
Page forms contain a set of input elements. 

## table_row
Tables display arrays of data and each table has a related dialog to create a row in the table. Some of these dialogs are only accessible by admins setting up seed data.

### Child elements

## assetLink
An assetLink provides a link to a file served from the web root. The files are stored in the code repository in the ```client/public/assets``` directory.
The ```label``` property is displayed as the link text.
The ```assetBase``` property is the folder containing the file and ```assetName``` is the file name. The link is created with both 
these properties.  To add a new file:
- place the file in the appropriate folder of ```client/public/assets``` (make a new subdirectory if needed)
- in the Inputs sheet 
  - set assetBase to the folder name
  - set assetName to the file name
  - set the desired link text into the label column.

## calculated
See the EhrCalculatedValues readme

## checkbox
This type renders an HTML input element with type 'checkbox' followed by a label.

## day
Also see time
This input is to represent a 'day' in the context of a class assignment

## fieldset fieldRowSet
Fieldsets group input elements. 

The input type fieldRowSet is not used at the time of writing but it could be used to create a row based
grouping. 

## form_label
The content in the form label property accepts raw html. For example

```angular2html
<b>Resources</b>
<p>Morse Fall Score <a target='_blank' href='https://google.ca'>external link</a></p>
<p>Mini-mental state examination (MMSE) <a target='_blank' href='https://google.ca'>external link</a></p>
```

## select box
A select box is shown as a drop down list. The select options are provided in the ```options``` multi-line property.  Each line
is parsed to become one of the options.  When a user selects an option, the entire content is stored in the database but, this
may change in the future.

Some option lists contain a set of lines of the form ```N = text```.  Currently this special format is only used by the 
calculated values (see above) yet in the future we may wish to make the left had side be the value to store in the database.

### formOption hideLabel
If a select box or text box has ```hideLabel``` in its formOption then the label is not displayed

## spacer
A spacer is equal to an empty label. Useful to have an element in place that spaces other elements.  

## text
A text input is the standard HTML text input with a label displayed before the input area.

## textarea
A textarea input is the standard HTML textarea input with a label displayed before the input area.

## time
Also see day
This input is to represent a 'time' in the context of a class assignment

