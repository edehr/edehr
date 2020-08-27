/* eslint-disable quote-props,quotes */

export const appText = {
  "heroText": {
    "title": "EdEHR - a Canadian, open source, educational electronic health record system.",
    "subTitle": "Student focused, simulated case studies, laddered case studies, with decision supports and customizable.",
    "introText": "EdEHR is short for Educational Electronic Health Record. It is an educational tool designed for medical education programs that seek a Canadian system that is focused on the student experience. EdEHR is suitable for all health care programs including, but not limited to, nursing, medicine, pharmacy, physiotherapy and more. EdEHR can be connected with many learning management systems including Moodle, Canvas, Blackboard, and other <a href=\"https://www.imsglobal.org/activity/learning-tools-interoperability\">LTI</a> compliant learning systems. Each institution can customize the course content or seek ways to share resources with other institutions. EdEHR is an open source project.\n For more information jump to the <a href=\"#resources\">resources </a> section below. If you need help or have a question about the EdEHR then send an email to <a href=\"mailto:info@edehr.org\">info@edehr.org</a>"
  },
  "resources": {
    "title": "About the EdEHR and Resources",
    "body": "The EdEHR is a <a href=\"https://bccampus.ca/\">BCcampus</a> project funded by the British Columbia Ministry of Advanced Education, Skills and Training. Here is a link to the <a href=\"https://bccampus.ca/2018/01/23/bccampus-launches-the-educational-electronic-health-record-system-project-in-b-c/\">BCcampus announcement</a> and you can read more about the announcement in this BCcampus <a href=\"https://bccampus.ca/2020/01/07/an-education-in-electronic-health-records/\">blog post</a>.\nThe EdEHR project requirements are based on this <a href=\"http://solr.bccampus.ca:8001/bcc/file/cfc0515c-296f-4711-9811-8be605e661e4/1/EdEHR_Env_Scan_June%204_2018-%20Published.pdf\">Environmental Scan Report</a> published June 4, 2018. And the project was directed by a stakeholder group from the British Columbia Institute of Technology (<a href=\"https://www.bcit.ca/\">BCIT</a>), the University of British Columbia (<a href=\"https://www.ubc.ca/\">UBC</a>), and the University of Victoria (<a href=\"https://www.uvic.ca/\">UVic</a>)\nTo learn more see<ul><li> <a href=\"https://bccampus.github.io/edehr/\">the EdEHR Documentation</a> </li><li> <a href=\"https://github.com/BCcampus/edehr\">the open source GitHub code repository</a> </li><li> <a href=\"https://www.youtube.com/channel/UCVlhKFf-VHqp3JAY3TDIemw\">some demonstration videos on YouTube</a> </li></ul>\nIf you need help or have a question about the EdEHR then send an email to <a href=\"mailto:info@edehr.org\">info@edehr.org</a>"
  },
  "related": {
    "title": "Related resources",
    "body": "Canadian Association of Schools of Nursing (CASN) <a href=\"https://www.casn.ca/2014/12/casn-entry-practice-nursing-informatics-competencies/\">Entry-to-Practice Nursing Informatics Competencies</a>\n"
  },
  underDevelopment : {
    title: 'Ready for further development!',
    body: 'In so many ways the EdEHR is still a prototype yet it has many capabilities that other educational EHRs lack. Yet there are many more features to be developed.  Currently we are working on <ul><li>ability to add data files to each assignment. For example, add an x-ray to fit the simulated case</li><li>a demonstration mode</li></ul>\n And someday with funding we could work on <ul><li>course content development, sharing and versioning<li></li><li>a communication component between the health care team so that students can collaborate on a single data set</li><li>add accessibilty</li><li>provide a French version</li><li>and so much more</li><ul>'
  }
}

export const helpText = {
  // Help page also uses appText.resources.body
  student: {
    title: 'Student',
    body: 'Are you a student having trouble with the app or need help with your assignment? Contact your instructor for help.  For information about the EdEHR see the <a href="https://bccampus.github.io/edehr/student/">Student guide</a>'
  },
  instructor: {
    title: 'Instructor',
    body: 'Are you an instructor and need help? Then reach out to <a href="mailto:info@edehr.org">info@edehr.org</a> or see the <a href="https://bccampus.github.io/edehr/instructor/">Instructor guide</a>\n'
  }
}

export const demoText = {
  title: 'EdEHR Demonstration - Log In',
  intro: 'Welcome to the Educational Electronic Health Record system demonstration log in page.  EdEHR helps in the education of our future health care workers, be they nurses, doctors, pharmacists, or other healthcare professions. EdEHR gives these students experience using an electronic health record system.\n This demonstration page let\'s you pretend to be an instructor or a student. You can "log in" as a user of a simulated learning management system (LMS) and through this get into the EdEHR. This simulated LMS will connect just like any other LMSs (e.g. Canvas, Blackboard, Moodle, etc.)',
  explanation:
'In real life an administrator of the educational institution\'s learning management system works with an administrator of an instance of the EdEHR to create connections between the two systems. These connections are the assignments that instructors can use within their courses.\n This demonstration will provide you with a one page LMS that has connections to the EdEHR that are ready to go. Once you "log in" you will see a fictitious course with two sample assignments.\n You can "log in" as either an instructor or a student. Instructors can customize assignment content or evaluate the work of their students. (You will need to try out the student role before you will see students in your class list.)\n Students can complete assignments.\n We recommend you first log in as a student, try to follow the instructions set by your "instructor" and submit something for evaluation. You can then use Demo menu item on the top banner to come back here and "log in" as an instructor. You can then go to "your" class list, see a list of "your" students and try out the evaluation experience.\n Once you are done with the basic flow of students working on the assignments and instructors evaluating the student\'s work then come back here and log in as an instructor and, this time, go to the assignments page and modify the instructions given to the students or go deeper and modify the EHR case study content.\n Use the Demo menu item on the top banner to change your persona or leave the demonstration.  When you leave the demonstration all of your demonstration data is reset.  Remember this instance of the EdEHR is a prototype and so the admin of this instance may need to reset the system at any time.',
  lmsAside: 'This one page learning management system has assignments set to connect with the EdEHR. These sample assignments are based on the open text-book <a href="https://pressbooks.bccampus.ca/healthcasestudies/">Health Case Studies - Toward Closing the Healthcare Communication Gap</a> by:  Glynda Rees, Rob Kruger, Janet Morrison.',
  login: {
    title: 'Try out the EdEHR',
    body: 'The EdEHR is still a prototype web application.\n ' +
    'You may encounter some strangeness that may be because something is not finished. See all the work in progress on the GitHub site. (See the resources section on the Help or Home page)\n As well consider that any data that you enter into the demonstration assignments as temporary. It maybe that the system needs to be restarted and the data may be lost.\n'
  },
  logout: {
    title: 'Confirm leave the EdEHR demonstration mode',
    body: 'Exit the demonstration mode. At this time this means all your data is removed. But do not worry because you can just come back and try out the EdEHR again. '
  }
}

export const edEhrValues = [
  {
    icon: 'graduation-cap',
    title: 'Student Focused',
    body: 'EdEHR is focused on the learning needs of the student.  It has the flexibility to foster higher-order critical thinking in students specific to their learning levels and their field. The EdEHR introduces students to the concept of data collection and the impact of that data on patient outcomes for real-time patient care.'
  },
  {
    icon: 'book-open',
    title: 'Open Source',
    body: 'EdEHR is fully open source code so it can be shared, built on, and adapted without asking for permission.\n <a href="https://github.com/BCcampus/edehr">GitHub repository</a>'
  },
  {
    icon: 'canadian-maple-leaf',
    canadian: true,
    title: 'Canadian',
    body: 'Can be stored, hosted, and implemented in Canada and is relevant to Canadian health care systems (e.g. metric, Canadian medication and dosaging, Canadian context and focus), and can be adapted to include our Indigenous heritage.'
  },
  {
    icon: 'heartbeat',
    title: 'Interprofessional',
    body: 'The EdEHR can be used for any healthcare profession including; nursing, physiotherapy, medicine, pharmacy, midwifery, etc. Assignments can share case study data yet ask students in different faculties to complete work relative to their course of study.'
  },
  {
    icon: 'user-injured',
    title: 'Simulated case studies',
    body: 'Patient case studies are utilized for learning and teaching. Users can build their own case studies to suit their course curriculum or they can start with the eight <a href="https://pressbooks.bccampus.ca/healthcasestudies/">health case studies</a> that have been developed by a team at <a href="https://www.bcit.ca/">BCIT</a>, through <a href="https://bccampus.ca/">BCcampus</a>, for this purpose.'
  },
  {
    icon: 'user-clock',
    title: 'Laddered case studies',
    body: 'Case studies can be adapted to the level of the student accessing the EdEHR. For example, a novice student can work with a simpler case  than a more experienced student. As well, the novice student can be required to access, analyze, and respond to data that is less complex than for a more experienced student.'
  },
  {
    icon: 'medkit',
    title: 'Decision supports',
    body: 'EdEHR provides tools to assist with judgement and delivery of safe, quality care. For example the medication lookup field searches a snapshot of the Canadian drug database. EdEHR contains other helpers and many more are planned. As well, course assignments can contain links to educational resources, guidelines, videos, glossaries, etc.'
  }, {
    icon: 'dice-d20',
    title: 'Customizable',
    body: 'Post-secondary programs can customize their own assignments and case studies to accommodate their educational needs and learning objectives. Or course designers may reach out and share content with others.\n The whole EHR side of the application is designed to be adjusted with maximal advice from subject matter experts and minimal development effort. For more information on this see the <a href="https://bccampus.github.io/edehr/developer/inside-generator/">documentation</a>'
  },
  {
    icon: 'hand-holding-medical',
    title: 'Cost efficient',
    body: 'EdEHR is an open-source educational resource that provides post-secondary health care programs with the potential to access and customize the case studies and the application at minimal cost. If you want to get started then send an email to <a href="mailto:info@edehr.org">info@edehr.org'
  }
]
