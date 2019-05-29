# EHR Definitions - Keys and Identifiers

> How elements are identified is critical to the code generation and the resulting EHR application

Make the effort to keep related elements together on the spreadsheet.  Page elements are followed by the page_form
element or table_row element which are then followed by input elements that follow the *grouping* element.  The order of these inputs 
doesn't need to follow the desired UI layout, but it does help to visualize how it will render in the page. If you have a sub-group called a ```fieldset``` organize the inputs that are in
this sub-group below the fieldset element.

## elementKey
Every element that forms part of the data that is stored in the DB must have an element key. This key must be unique within 
its *group*.  For example, a page may have two tables and each table may start with the typical "Name, profession, day, time" 
set of fields.  These fields can have element keys name, profession, day and time even though another table on the same
page has the same fields. This is because they are grouped in the table element. See level2Key.   


## pageDataKey
Every element must have the pageDataKey so that it can be located on the correct page.  This key is also critical for
storing values in the DB because pages are the root elements in the data structure that is stored.
Be sure a page's elementKey matches the key specified on the ```pages``` tab.  It may be helpful to use a formula to 
get the same value. The spreadsheet uses a formula to set up all elements' pageDataKey.
``` 
=if($G3="page",$F3,$C2)
```
This says: if this element is a page then use the elementKey else use the value computed on the row
above which will be the page's key.

## level2Key
These two properties establish grouping within a page. The main use for level2Key is to group elements into a table, on
a page. Use a formula to set the ```level2Key``` property of the first child of the page_form or table to be equal to the group's 
```elementKey``` property.  Use a formula to set all remaining child elements to use the same ```level2Key``` 

## level3Key
Level3 keys are just a refinement on level2 keys. They are typically used to group input elements into a fieldset. Set up these
properties similar to ```level2Key```


## dataParent and fqn
Off to the far side are two critical properties: ```dataParent``` and ```fqn``` (which stands for Fully Qualified Name).
Both of these are computed values.  Be sure the formulas in these cells match the others whenever rows are added or deleted.
```dataParent``` is the FQN of the element's parent in the data structure stored in the DB.
```FQN``` is the element's unique within the whole system identifier.  