# Courses, Activities, Assignments, and Seeds

> What roles do each of these objects play in the EdEHR?

> All objects belong to a single tool consumer.

In the same way the EdEHR creates and manages users based on LTI data, the EdEHR creates and
manages course and activities based on LTI data. For example, LTI data for the course, activity and assignment may look like this

```json
  "context_id": "4",
  "context_label":"EdEhr Poc",
  "context_title":"A Proof of Concept Course",
  "context_type":"CourseSection",
  "resource_link_description":"Some description",
  "resource_link_id":"1",
  "resource_link_title":"Activity title",
```

## Courses / Activities

The EdEHR Activity model represents both the course and activity as defined in the 
learning tool in a single object called 'Activity'. This list of courses is determined by examining all the activities
and pulling out the course information.
The elements of the LTI data that begin with 'context' define a LTI course.
The elements of the LTI data that begin with 'resource' define a LTI activity.

Course information
- "context_id": "4" (unique id for courses within a LTI consumer)
- "context_label":"EdEhr Poc",
- "context_title":"A Proof of Concept Course"
- "context_type":"CourseSection" (optional)

Activity
- "resource_link_id":"1" (unique within a LTI consumer)
- "resource_link_description":"Some description",
- "resource_link_title":"Activity title",
