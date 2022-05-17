/* eslint-disable quote-props,quotes */

const commonTitle = "EdEHR - a Canadian, open source, educational electronic health record system."

export const appText = {
  "heroText": {
    "title": commonTitle,
    "subTitle": "Student focused, simulated case studies, laddered case studies, with decision supports and customizable.",
    "introText": "EdEHR is short for Educational Electronic Health Record. It is an educational tool designed for medical education programs that seek a Canadian system that is focused on the student experience. EdEHR is suitable for all health care programs including, but not limited to, nursing, medicine, pharmacy, physiotherapy and more. EdEHR can be connected with many learning management systems including Moodle, Canvas, Blackboard, and other <a href=\"https://www.imsglobal.org/activity/learning-tools-interoperability\">LTI</a> compliant learning systems. Each institution can customize the course content or seek ways to share resources with other institutions. EdEHR is an open source project.\n For more information jump to the <a href=\"#resources\">resources </a> section below. If you need help or have a question about the EdEHR then send an email to <a href=\"mailto:info@edehr.org\">info@edehr.org</a>"
  },
  "resources": {
    "title": "About the EdEHR and Resources",
    "body": (host) => `The EdEHR is a <a href=\"https://bccampus.ca/\">BCcampus</a> project funded by the British Columbia Ministry of Advanced Education, Skills and Training. Here is a link to the <a href=\"https://bccampus.ca/2018/01/23/bccampus-launches-the-educational-electronic-health-record-system-project-in-b-c/\">BCcampus announcement</a> and you can read more about the announcement in this BCcampus <a href=\"https://bccampus.ca/2020/01/07/an-education-in-electronic-health-records/\">blog post</a>.  The EdEHR project requirements are based on this <a href=\"https://edehr.org/assets/EdEHR_Env_Scan_June%204_2018-Published.pdf\">Environmental Scan Report</a> published June 4, 2018. And the project was directed by a stakeholder group from the British Columbia Institute of Technology (<a href=\"https://www.bcit.ca/\">BCIT</a>), the University of British Columbia (<a href=\"https://www.ubc.ca/\">UBC</a>), and the University of Victoria (<a href=\"https://www.uvic.ca/\">UVic</a>)\nTo learn more see<ul><li> * <a href=\"https://edehr.github.io/edehr/\">the EdEHR documentation site</a> </li><li> * <a href=\"https://github.com/edehr/edehr\">the EdEHR open source code repository on GitHub</a> </li><li> * <a href=\"https://www.youtube.com/channel/UCVlhKFf-VHqp3JAY3TDIemw\">some videos on YouTube that demonstrate how the EdEHR works</a> </li></ul>\nIf you need further help or have a question about the EdEHR then send an email to <a href=\"mailto:info@edehr.org\">info@edehr.org</a>`
  },
  "related": {
    "title": "Related resources",
    "body": "Canadian Association of Schools of Nursing (CASN) <a href=\"https://www.casn.ca/2014/12/casn-entry-practice-nursing-informatics-competencies/\">Entry-to-Practice Nursing Informatics Competencies</a>\n"
  },
  "privacy": {
    "title": "Privacy",
    "body": (host) => `Privacy is important and the EdEHR is designed to minimize a risks. Here is <a href='${host}/privacy'>the privacy policy for ${host}</a>\n`
  },
}

export const helpText = {
  // Help page also uses appText.resources.body
  student: {
    title: 'Student',
    body: 'If you are a student and need help with your assignment then please contact your instructor.  For information about the EdEHR then please see the <a target="_blank" href="https://edehr.github.io/edehr/student/">student guide</a>'
  },
  instructor: {
    title: 'Instructor',
    body: 'If you are an instructor and need help then please see the <a target="_blank" href="https://edehr.github.io/edehr/instructor/">instructor guide</a>.  If you can\'t find what you need then send your question to <a href="mailto:info@edehr.org">info@edehr.org</a>\n'
  },
  lmsadmin: {
    title: 'LMS Administrator',
    body: 'If you are an administrator of a learning management system (LMS) and want to know how easy it is to connect your LMS to a running instance of EdEHR then then please see the <a target="_blank" href="https://edehr.github.io/edehr/lms-admin/">LMS Admin guide</a>.  If you can\'t find what you need then send your question to <a href="mailto:info@edehr.org">info@edehr.org</a>\n'
  }
}

export const demoText = {
  title: 'Mock Demonstration - Log In',
  intro: 'This is a mock log in page.  Think of this page as the place instructors and students log into their school\'s ' +
    'Learning Management System (LMS). Here you can "log in" as a student or instructor and try out a sample course that ' +
    'uses the EdEHR.',
  explanation:
'\nIn real life your LMS course content creators will work with the EdEHR administrator to create connections between' +
    ' the learning objects in the EdEHR and your LMS. ' +
    ' For now, you can log into this demonstration to see a fictitious course with sample assignments that use the EdEHR. ' +
    ' We suggest you first log in as one or more of the mock students.  ' +
    ' Try the assignments. Send your work in for evaluation.\n ' +
    ' Then log in as an instructor and review the work your "students" have done.\n' +
    ' As an instructor you can also customize the learning objects and case study data. ' +
    ' To do this log in as an instructor and go to one of the assignments. ' +
    ' Then go to the Learning Objects tab and explore how you can modify the instructions given to the students. ' +
    ' Or go deeper and modify the EHR case study content.\n' +
    ' If you do edit the EHR seeds and you want to keep your work be sure to download your seed.' +
    ' Reach out to <a href="mailto:info@edehr.org">info@edehr.org</a> if you have questions.' +
    ' Use the Demo menu item on the top banner to leave the demonstration. ' +
    ' When you leave the demonstration all of your demonstration data is reset.' +
    ' Remember this instance of the EdEHR is a prototype and so the admin of this instance may need to reset the system at any time.',
  lmsAside:
    ' To the right is a one-page learning management system with preconfigured assignments ready to connect with the EdEHR. Some of these' +
    ' sample assignments are based on the open text-book <a href="https://pressbooks.bccampus.ca/healthcasestudies/">Health Case Studies - Toward Closing the Healthcare Communication Gap</a> by:  Glynda Rees, Rob Kruger, Janet Morrison.',
  login: {
    title: 'Welcome to your personal EdEHR playground',
    body: 'This is a sandbox area for you to explore the EdEHR and how it works with learning management systems such as Moodle, Brightspace, etc. ' +
      'This demonstration mode is only meant for short term explorations. ' +
      'If you create any course content you need to keep then be sure to download a copy. ' +
      'Contact <a href="mailto:info@edehr.org">info@edehr.org</a> if you have any questions or need help.\n'
  },
  logout: {
    title: 'Confirm exit demonstration mode',
    body: 'Exit and destroy your demonstration environment. If you created or modified any EHR seeds you may wish to save a copy first. Cancel this dialog and return to the Seeds section (as an instructor) and download copies of your modified seeds. Then exit this demonstration mode.'
  }
}

export const ehrOnlyDemoText = {
  title: 'Try the EHR side of the EdEHR',
  intro: 'The EdEHR is a Canadian, open source, educational electronic health record system designed to ' +
    'support both students and faculty. ' +
    'Training students on educational EHRs provides a realistic environment where students can learn without endangering patient safety and they can learn the importance of interdisciplinary communication. ' +
  'Post-secondary programs can adapt the system to accommodate their educational needs. Faculty can adapt the case studies to accommodate their learning objectives.\n' +
    'The button below will allow you to see the EHR side of the EdEHR. Of course, this is just half of the application because the EdEHR also supports faculty as they educate their students and develop course content.  If you wish to learn more about the whole application then please contact <a href=\"mailto:info@edehr.org\">info@edehr.org</a>. ',
  explanation:
    'When you enter the EHR you will see a sample case study that is based on the open text-book ' +
    '"Health Case Studies - Toward Closing the Healthcare Communication Gap" ' +
    'by:  Glynda Rees, Rob Kruger, Janet Morrison. ' +
    'See: page 31 Case Study #2 in https://pressbooks.bccampus.ca/healthcasestudies/ \n' +
    'In this case the patient has COPD that is exacerbated due to community acquired pneumonia. ' +
    'The patient in this case study has a complicated health history. ' +
    'The focus for this assignment is help the student complement their assessment and monitoring skills ' +
    'with accurate and careful recording within an electronic health record system. ' +
    'Imagine that you are a nursing student your second or third years of study. Your task is to review ' +
    'the patients current condition and prepare a progress note for the attending physician. \n',
  after:'In the full EdEHR the student is given support with information about the assigned task and they ' +
    'are expected to submit their completed work for review. ' +
    'The faculty can then review and comment on the work and even send ' +
    'the work back to the student for refinement. The evaluation notes can later be transfered to the' +
    'institutions learning management system.'
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
    body: 'EdEHR is fully open source code so it can be shared, built on, and adapted without asking for permission.\n <a href="https://github.com/edehr/edehr">GitHub repository</a>'
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
    body: 'Post-secondary programs can customize their own assignments and case studies to accommodate their educational needs and learning objectives. Or course designers may reach out and share content with others.\n The whole EHR side of the application is designed to be adjusted with maximal advice from subject matter experts and minimal development effort. For more information on this see the <a href="https://edehr.github.io/edehr/developer/inside-generator/">documentation</a>'
  },
  {
    icon: 'hand-holding-medical',
    title: 'Cost efficient',
    body: 'EdEHR is an open-source educational resource that provides post-secondary health care programs with the potential to access and customize the case studies and the application at minimal cost. If you want to get started then send an email to <a href="mailto:info@edehr.org">info@edehr.org'
  }
]
