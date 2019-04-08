# EHR Definitions - Pages and Menus

> How to manage pages and navigation menu.

The EHR application has two sides: inside and outside. The inside provides the EHR experience and the outside
provides the educational support.  Currently the outside is only useful to instructors and content developers. The inside 
is far more complex with over 40 different 'pages' and a large nested menu system on the left side of the page.

In the Inputs spreadsheet there is a tab called 'pages'.  Like the other tabs you can make adjustments and then copy
the block of cells off to the far right into the source code.  Place the content into ```makeEhr/raw_data/inside-pages.txt```.

The generator combines the inside page data with the content in ```outsideDefs.json``` to produce the VUE routing files
(see src/router.js and what it includes) and the navigation menu configuration file. See ```src/menuList.json```

Adding a new page to the inside?  You need to add an entry on the pages tab and define the page on the appropriate 
main defintion tab.   Be sure the ```label``` content matches on both because the system (at the time of writing) isn't clear
which place it gets the label for the page/menu.

