# Refactoring notes

> Notes about a large refactoring conducted Oct and Nov 2019

## Purposes: 
- To address the numerous problems with initializing the application on page load and page refresh load.
- To address numerous problems with data and state management when instructors conduct student evaluations
- To improve the user experience for instructors as they work with a number of courses, which may have any
number of activities.


## How does the refactoring improve instructor experience?
- The Dashboard (recently renamed Courses) page is cleaner and a new Activity page is introduced.
- Before the user saw a long list of courses and each could have a long list of activities and any activity
could have been expanded to show the class list.  Not only was this too much information it was also not
possible to guide the user back to the most recently active course whenever they navigated back to the dashboard.
- The activity page now shows the current class list.
- Only one activity is now got the focus (before there could've been any number of activities active).
- Now it is possible to scroll the dashboard/courses to focus on the most recently active activity.
- Now is is possible to manage the active activity state along with the currently active list of student's work.

## How does the refactoring improve state management during evaluations?
- The state management system now has modules to manage 
  - tool consumer
  - visit 
  - user
  - activity
  - assignment
  - list of assignments
  - list of activities
  - activity data
- In other words, the storage modules now more closely reflect the actual domain model.  This simplifies the code 
(even as it adds more files) 

## How does the refactoring address problems with page load and refresh?
- Before the App.vue class had a complex load routine that needed to manage three types of entry: the student, the instructor,
and the content editor.  In each case the app needed to be able to restore the state if the user chose to refresh their
browser while working on any page in the app.
- Now the App.vue code is reduced dramatically and components that need data loaded are more responsible for loading themselves
and even doing this with session stored properties when needed.

## Store Helper 

A new central source for state data is provided called the StoreHelper.  Before the implementation for Vuex storage was
scattered throughout the app. Sometimes we needed to directly access a property, other times we needed to use a getter.
The module names where also scattered around along with the key names for properties.  All this made for hard to read
and understand and maintain code. 

Now with a StoreHelper the implementation is hidden behind a more consistent set of methods that get or set properties or, 
sometimes, provide more complicated help (such as loading)