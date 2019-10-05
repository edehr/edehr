# LMS Admin

> The learning management system (LMS) administrator creates the LTI connection

1. The first step is to have a LMS application use the EdEHR. This has two parts.
    1. a LMS administrator creates a LTI link to the EdEHR. See below 
    1. then, also in the LMS, a course designer uses this link one or more times to set up activities in courses. See [course designer]
    
The following describes how to do this process in Moodle.  Hopefully the process is similar in other LMS applications. We welcome contributions to this documentation.

Prerequisite: The Course Designer needs to ask the LMS admin to create the LTI link. The Course Designer needs to provide a name for the connection, an optional description, and the Custom parameter ([External Id](/shared/definitions.md#external-id)) for the assignment in the EdEHR. (See below for descriptions.) 

Log onto your Moodle instance as an administrator.  Select "Site Administration" (bottom left corner of the home screen).  Select Plugins and scan down the list of "Activity Modules" looking for "External Tool".  Click the "Manage tools" immediately below "External Tool".
![1]

Next configure the link.  For example,
![2]

**Tool name:**  provide a name that the course designer will recognize. 

**Custom parameters:** this is a key that links this LTI connection to an assignment in the EdEHR. The example is "ErinJoneCase1". You can put anything here that will make sense for the course designer. The typical flow is to compose this key here while creating the LTI link. Another flow is to create the assignment in the EdEHR and then use the [External Id](/shared/definitions.md#external-id) created with the assignment.

The syntax is important. It must start with ```assignment=``` and then be followed by a mixed case word. No spaces. Use numbers, the dot (.) or the hypen if this helps.
```
assignment=<letters-or-numbers-or-dot-or-hyphen>
``` 

Recommend that the tool name and custom parameter have some obvious connection to help with keeping the system easy to understand. 

**Tool description:** Write a description that helps you, as the LMS admin, and the course designer understand what this LTI tool does.

**Tool URL:** This is the url to the instance of EdEHR you wish to connect to. 

**Consumner key:** and **Shared secret:** are two pieces of information that is shared between the LMS admin and the EdEHR admin.  These two administrators share a key and a secret that are used by the EdEHR to identify the institution.  This sharing typically happens via a phone conversation or email. 

**Default launch container:** Select "Existing window" or "New window".  Do not either "Embed" option. It may help the instructors and students if you select "New window". This means the EdEHR will open in a new tab.

Save the settings and then inform your course designers they can now configure course activities with this tool. Tell them what the tool name is and also provide the "custom parameter".  In the EdEHR this is called the [External Id](/shared/definitions.md#external-id).

[1]: ../images/moodle-manage-tool.png "Manage external tool in Moodle" 
[2]: ../images/moodle-external-tool-config.png "External tool configuration in Moodle"