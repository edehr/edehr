# LMS admin

> The learning management system (LMS) administrator creates the LTI connection tool that instructors will 
> use to bring the EdEHR into their courses.  This step is really quick not counting the time for communications between the LMS and EdEHR administrators.

## Prerequisites
- You have access to an instance of the EdEHR.
- The LMS admin asks the EdEHR admin for the API url, a key and a secret. These are needed to allow the LMS to connect to the EdEHR.

## External tool configuration

The following describes the process in Moodle. The process is likely similar in other LMS applications. 
Here is a 
[YouTube video that illustrates the process for D2L](https://www.youtube.com/watch?v=0ddhcsVuBzg)

Log onto your Moodle LMS as an administrator. Select "Site Administration" (bottom left corner of the home screen). Select Plugins and scan down the list of "Activity Modules" looking for "External Tool". Click the "Manage tools" immediately below "External Tool".
![1]

Next configure the link. For example,
![2]

**Tool name:** provide a name that the course designer will recognize.

**Tool description:** Write a description that helps you, as the LMS admin, and the course designer understand what this LTI connection does.

**Tool URL:** This is the url to the EdEHR API. For example ```https://edehr.org/api/launch_lti```.  Ask your EdEHR administrator for this URL.

**Consumer key:** and **Shared secret:**  are used by the LMS to digitally sign a message that the EdEHR will recognize. Discuss what key and secret you wish to use with your EdEHR administrator.

**Default launch container:** Select "Existing window" or "New window". This is important.  Note that Moodle defaults to open with the embedded option. 

Save the settings and then inform your course designers they can now configure course activities with this tool. Tell them what the tool name is.

The next steps are completed by the [course designer](/course-designer)

[1]: ../images/moodle-manage-tool.png "Manage external tool in Moodle"
[2]: ../images/moodle-external-tool-config.png "External tool configuration in Moodle"
