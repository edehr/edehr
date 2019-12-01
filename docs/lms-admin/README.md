# LMS admin

> The learning management system (LMS) administrator creates the LTI connection

## Prerequisite
- The LMS admin asks the EdEHR admin for the [API URL](/shared/definitions.md#api-url), the [consumer key and secret](/shared/definitions.md#consumer-key). These are needed to allow the LMS to connect to the EdEHR.
- The [course designer](/shared/definitions.md#course-designer) has provided the LMS admin a meaningful name for the connection, an optional description, and the ([External Id](/shared/definitions.md#external-id)) for the assignment in the EdEHR. The LMS will use these for the tool name, description and custom parameters below.

The LMS admin is responsible for the first steps to create the course that uses the EdEHR. Read [getting started](/#getting-started). The first step has two parts:
1. The LMS administrator creates a LTI link to the EdEHR. See below 
2. The course designer uses this link one or more times to set up activities in courses. See [course designer](/course-designer/)


## Moodle external tool configuration

The following describes the process in Moodle. The process is likely similar in other LMS applications. 

Log onto your Moodle instance as an administrator. Select "Site Administration" (bottom left corner of the home screen). Select Plugins and scan down the list of "Activity Modules" looking for "External Tool". Click the "Manage tools" immediately below "External Tool".
![1]

Next configure the link. For example,
![2]

**Tool name:** provide a name that the course designer will recognize. 

**Custom parameters:** this is a key that links this LTI connection to an assignment in the EdEHR. The example is "ErinJoneCase1". You can put anything here that will make sense for the course designer. The typical flow is to compose this key here while creating the LTI link. Another flow is to create the assignment in the EdEHR and then use the [External Id](/shared/definitions.md#external-id) created with the assignment.

External IDs have the form of "assignment=SomeKeyWords". The text "SomeKeyWords" is sent to the EdEHR when a user accesses the application. The EdEHR locates an assignment that matches the key. 

If the user is an instructor or course designer and no matching assignment is found, then the EdEHR creates the assignment. If the user is a student they will see an error page and no assignment will be created.

The syntax is important. It must start with ```assignment=``` and then be followed by a mixed case word. No spaces. Use numbers, the dot (.) or the hypen if this helps.
```
assignment=<letters-or-numbers-or-dot-or-hyphen>
``` 

Recommend that the tool name and custom parameter have some obvious connection to help with keeping the system easy to understand. 

**Tool description:** Write a description that helps you, as the LMS admin, and the course designer understand what this LTI connection does.

**Tool URL:** This is the url to the back end of EdEHR. See [API URL](/shared/definitions.md#api-url). 

**Consumer key:** and **Shared secret:** are two pieces of information that is shared between the LMS admin and the EdEHR admin. These two administrators share a key and a secret that are used by the EdEHR to identify the institution. This sharing typically happens via a phone conversation or email. See [consumer key and secret](/shared/definitions.md#consumer-key). 

**Default launch container:** Select "Existing window" or "New window". Do not either "Embed" option. It may help the instructors and students if you select "New window". This means the EdEHR will open in a new tab.

Save the settings and then inform your course designers they can now configure course activities with this tool. Tell them what the tool name is and also provide the "custom parameter". In the EdEHR this is called the [External Id](/shared/definitions.md#external-id).


The next steps are completed by the [course designer](/course-designer)

[1]: ../images/moodle-manage-tool.png "Manage external tool in Moodle"
[2]: ../images/moodle-external-tool-config.png "External tool configuration in Moodle"
