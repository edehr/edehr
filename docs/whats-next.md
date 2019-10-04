# EdEHR - Next

> A sketch of what areas future development could consider.

## Issues
This open source project tracks many issue
https://github.com/BCcampus/edehr/issues

## Plugin architecture
Rework the project so other specialties can contribute pages, fields, and components to the EHR dedicated to their needs.
The contributed components might also provide custom features such as connections with special databases.


## LTI

A future version of this application might support LTI processes for transferring more information,
such as evaluation results, back to the LMS.


## Course Designer
In the prototype there is a switch to toggle on the course designer mode. In the future this should be determined
by the role the user is granted in the LMS.

## LMS management
The prototype has a simplistic approach to managing LMS applications. In the future it would help to have a EdEHR administration dashboard for creating, editing and removing LMS applications.  Note that "removal" could mean removing all courses, assignments, seeds, students etc associated with a particular LMS.  Editing could mean having the ability to see and edit any records associated with a LMS.

At a minimum, there needs to be a simple way to create a LMS in the EdEHR and manage the key and secret that is shared with the LMS administrator.