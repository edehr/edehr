/* eslint-disable quote-props,quotes */

const commonTitle = "Canadian, open source, educational electronic health record system"

export const appText = {
  heroText: {
    title: commonTitle,
    subTitle: "Student focused, customizable simulated case studies, that can be laddered, with decision supports",
    goal: 'A key EdEHR project goal is to let pedagogy drive the technology and not the other way around.',
    what: 'EdEHR is short for Educational Electronic Health Record.',
    introText: "EdEHR is an essential educational tool designed for medical education programs that seek a Canadian system that is focused on the student experience. EdEHR is suitable for all health care programs including, but not limited to, nursing, medicine, pharmacy, physiotherapy and more. " +
      "Students find the EdEHR easy to use and intuitive. "+
      "EdEHR can be connected with many learning management systems including Moodle, Canvas, Blackboard, D2L, and other <a href=\"https://www.imsglobal.org/activity/learning-tools-interoperability\">LTI</a> compliant learning systems. " +
      "Instructors can customize the course content to suit and provide guidance to students while evaluating their work. ",
  },

  about: {
    intro1: {
      text: 'The British Columbia Ministry of Advanced Education, Skills and Training funded the initial EdEHR project through BCcampus.  BCcampus is a BC organization dedicated to the deliver of teaching, learning, educational technology, and open education support to the post-secondary institutions of British Columbia. BCcampus announced the project on January 23, 2018, and two years later they announced the completion of the initial stage of the project.',
      references: ['1', '2', '3']
    },

    intro2: {
      text: 'The EdEHR project requirements came from the "Environmental Scan Report" published June 4, 2018 and the project was directed by a stakeholder group from the British Columbia Institute of Technology, the University of British Columbia, and the University of Victoria. ' +
        ' Extensive usability studies and UI design was completed before software development started September 19, 2018. ' +
        ' Bryan Gilbert was hired in September 2018 for a 6 month contract to architect and build a prototype. This was successful ' +
        ' and Bryan received another small contract to continue the work and bring it into the classroom. ',
      references: ['9', '10', '11', '12']
    },

    license: {
      text: 'The EdEHR software license is GNU Affero General Public License. In May 2020, under the direction of BCCampus a code branch was created with the more permissive MIT license that included all the work funded by BC Campus from project start, September 2018 to the BCcampus project end on January 31, 2020. The MIT license allows any developer to extend the software as they wish while the GNU licensing ask the developer share their work also under the GNU license. The funders of the software since the BCcampus MIT branch wish to keep all extensions freely available to the world.',
      references: ['5', '6', '7']
    },

    firstAppearance: {
      text: 'The EdEHR first appeared in a UBC classroom in early 2020. The instructor asked the class of 173 students, without prior experience or training, to attempt an assignment the class had done on paper the day before. "Students noticed ease of use was what they liked most about the [EdEHR]." "Students found the activity effective for learning case based activities." "The [EdEHR] has great potential for future use." "Most EHR products .. do not use Canadian standards, are expensive, or lack multidisciplinary functions that are present in practicing EHRs"',
      references: ['4']
    },

    introEdEhrOrg: {
      text: 'After the completion of the BCcampus project the original technical architect and developer, Bryan Gilbert, ' +
        'continued extending the applications and offered the EdEHR as a service. Guidance and funding for these works have come from ' +
        'the BC Institute of Technology (BCIT), ' +
        'the University of BC (UBC), ' +
        'the University of Victoria (UVic), ' +
        'Camosun College, ' +
        'Aurora College, ' +
        'Selkirk College, ' +
        'and the College of the Rockies.',
      references: ['8']
    },

    privacy: {
      text: 'Privacy is important and the EdEHR is designed to minimize all privacy risks. Several BC learning institutions have completed privacy impact assessments (PIA) and they found this was relatively easy because the EdEHR application is low risk. The EdEHR only collects two pieces of personally identifiable information. The first is the user\'s name. This is important to help the instructor support their students. The second piece of information is an identifier used within the institution\'s learning management system (LMS). This is typically a cryptic combination of letters and numbers that are unless except within the context of that LMS ',
      references: ['14']
    },

    helpText: {
      text: 'There are guides for students, instructors and faculty that create content (LMS admin).  Generally students don\'t need help with the EdEHR itself yet for help with any activities that use the EdEHR students should contact their instructor.',
      references: ['18', '19', '20']
    },

    more: {
      text: 'To learn more see the EdEHR documentation site. To review and examine the source code see the Github repository. There are also several videos on YouTube that demonstrate how the EdEHR works.',
      references: ['15', '16', '17']
    },
  },

  quotes: {
    kirsten: {
      text: 'At Seneca College, we will use the <a href="edehr.org">edehr.org</a> service to integrate the EdEHR into our nursing programs in class, lab, and simulation. EdEHR will allow our students to understand electronic charting, practice documentation, and incorporate it into real-time learning during simulation. In addition, the program allows faculty to review student charting through their LMS system, creating several different learning and assignment opportunities for students.',
      source: 'Kristen Riberdy,  RN, BScN, MEd, CHSE, DNP (ip), Simulation Coordinator, Seneca'
    },
    shaykewich: {
      text: 'Educators have been looking for a project like this for over a decade, so it was a big success for BCcampus to get involved and help build this learning tool, working with the steering committee to bring it to a state where it has broader potential for considerable growth.',
      source: 'David Shaykewich, Manager, DevOps at BCcampus',
      reference: '3'
    },
    jmin: {
      text: 'Providing students with an accurate and effective sandbox gives them exposure to the technology before they go into the real world, and this is a vitally important project for today’s health care practices. It will be great to see this become a meaningful implementation in a variety of different programs for the institutions throughout the province, and with necessary iterative improvements, this has amazing pedagogical potential across all health programs.',
      source: 'Jason Min, lecturer, Faculty of Pharmaceutical Sciences, University of British Columbia',
      reference: '3'
    },
    mbridge: {
      text: 'It\’s not an overstatement to say that this tool will transform the way we teach and learn in the School of Health Sciences.',
      source: 'Michele Bridge, Instructional Development Consultant, Learning & Teaching Centre, BCIT'
    },
    chillary: {
      text: 'EdEHR has presented the Selkirk School of Health and Human Services (HHS) with an open-source and customizable learning platform to better prepare students for digital literacy and competency in health care informatics in the professional setting. Students  have been exposed to learning activities focused on data collection and documentation. Selkirk has been able to incrementally rollout EdEHR in alignment with nursing curriculum at a pace that is comfortable for faculty and students, without an imperative to  adopt a complete homework suite with contextually irrelevant content from a large publisher.',
      source: ' Chris Hillary RN, BSN, M.Ed.HSE, Selkirk College School of Nursing'
    },
    sonja: {
      text: 'The EdEHR program is an excellent Electronic Health Record simulation program. It incorporates all facets of medicine – Nursing, Pharmacy, Laboratory, and even Medical Imaging…Students find the system very user friendly and intuitive…Bryan (edehr.org) takes our feedback and can customize exactly what we are looking for.',
      source: 'Sonja Turnbull, Instructor, Hematology, Medical Laboratory Science, BCIT'
    },
    rees: {
      text: 'By providing students with the ability to learn how to use EHRs in the classroom setting, they will ultimately be able to spend more time with their patients in the clinical setting. Students need to learn how to work with anything that’s technologically foreign to them. The first few times students work with an automatic blood pressure cuff or IV pump, they spend more time focused on the technology instead of the patient, but as they use it more, it becomes easier for them to interact with their patients at the same time. The EdEHR project helps them understand the implications and impact of EHRs before they’re in contact with patients.',
      source: 'Glynda Rees, faculty in the Bachelor of Science program at the British Columbia Institute of Technology',
      reference: '3'
    },

    antony: {
      text: 'Students need to be encouraged to think in a different way about electronic documentation. If we’re not training students to think about EHRs, we’re doing them a disservice. When they enter a clinical placement or the workforce, they’ll be expected to know how to use these tools.',
      source: 'Dr. Joseph Anthony, interim associate dean of health professions in the Faculty of Medicine at the University of British Columbia',
      reference: '3'
    },
  },

  sourceList: [
    'https://bccampus.ca. ', // 1
    'https://bccampus.ca/2018/01/23/bccampus-launches-the-educational-electronic-health-record-system-project-in-b-c', // 2
    'https://bccampus.ca/2020/01/07/an-education-in-electronic-health-records/', // 3
    'https://ches.med.ubc.ca/poster-9-implementing-an-academic-electronic-health-record-in-a-large-class-setting/ ', // 4
    'https://www.quora.com/What-are-the-key-differences-between-the-GNU-General-Public-license-and-the-MIT-License?share=1', // 5
    'https://github.com/edehr/edehr/blob/master/LICENSE', // 6
    'https://github.com/edehr/edehr/blob/master-bccampus/LICENSE', // 7
    'https://edehr.org', // 8
    'https://edehr.org/assets/EdEHR_Env_Scan_June%204_2018-Published.pdf', // 9
    'https://www.bcit.ca/', //10
    'https://www.ubc.ca/', //11
    'https://www.uvic.ca/',// 12
    'mailto:info@edehr.org', // 13
    'https://bit.ly/bc-pia', //14
    'https://edehr.github.io/edehr/', //15
    'https://github.com/edehr/edehr', // 16
    'https://www.youtube.com/channel/UCVlhKFf-VHqp3JAY3TDIemw', //17
    'https://edehr.github.io/edehr/student/', // 18
    'https://edehr.github.io/edehr/instructor/', // 19
    'https://edehr.github.io/edehr/lms-admin/', // 20

  ],

  related: {
    "title": "Related resources",
    "body": "Canadian Association of Schools of Nursing (CASN) <a href=\"https://www.casn.ca/2014/12/casn-entry-practice-nursing-informatics-competencies/\">Entry-to-Practice Nursing Informatics Competencies</a>\n"
  },
}

export const ehrText = {
  simDayAndTimeHelperText: 'A real EHR provides the record day and time automatically but in a simulation you need to ' +
    ' provide these to reflect when the \'user\' is making the record.',
  cancelDialogReturnToEditLabel: 'Return to edit',
  cancelDialogExitDialogLabel: 'Confirm cancel',
  ehrDialogCancelButtonViewOnly: 'Close',
  ehrDialogCancelButtonVEdit: 'Cancel',
  medicationPlaceholder: 'Medication',
  practitionerPlaceholder: 'Care team member',
  professionPlaceholder: 'Profession',
  saveDialogAsDraftButtonLabel: 'Save as draft',
  saveDialogButtonLabel:'Verify this assessment is correct',
  saveDialogVerifyMessage: (name, profession, day, time) => `${name} (${profession}) verifies this record is correct and complete. Record date ${day} ${time}.  Or save as draft`,
  saveDialogVerifyTitle: 'Verify'
}
export const demoText = {
  courseTitle: 'Sample Course - Intro to EHR',
  personaLabel: 'Demo Persona',
  roleLabel: 'Demo Role',
  selectUserLabel: 'Select a user',
  lmsTitle: 'Demonstration LMS',
  lmsHint: 'A LMS is a learning management system such as Moodle, Brightspace, D2L and etc.',
  switchRoleExplain: 'When you click on an activity this \'instructor\' will become a \'student\' same as how Moodle allows users to switch roles.',
  switchRoleLabel: 'Change to another persona',
  switchRoleSegmentTitle: 'Switch role:',
  title: 'Demonstration - "Log In" Page',
  intro: 'Here you can "log in", as a student or instructor, to a simulated learning management system (LMS) and try out a sample course that ' +
    'uses the EdEHR. ' +
    ' Once you log in you will see a sample course with three activities, each set to use the EdEHR. ' +
    ' In the real world, your school\'s lead instructors will create course content that will use a special connector that will' +
    ' open the EdEHR.'
  ,

  explanation: [
    {
      title: ' ',
      body:     'In the real world, the LMS and EdEHR administrators work together and create a special ' +
      ' LTI connector (See https://www.imsgloba.org/activity/learning-tools-interoperability )' +
      ' With this connector your lead instructors can create EdEHR activities simply by using it.' +
      ' The EdEHR has some sample case studies to get you started. You will see these samples in this demonstration.' +
      ' Lead instructors can create new case studies, in your instance of EdEHR, to suit your educational needs. You can experiment' +
      ' and create content in this demonstration.  You can even save the content you create and later import it into your EdEHR instance.'
    },
    {
      title: 'Step 1',
      body: ' When an EdEHR activity is created in your LMS it is not yet associated with a case study, what the EdEHR calls a Learning Object. ' +
      ' It is essential that at least one instructor use every new EdEHR activity at least once to make the association in the EdEHR. ' +
      ' This is just like setting up a connection to an online 3rd party text book. At first the connection is to the online system. ' +
      ' You will next want to select a page within the book for the activity. '
    }, {
      title: 'If a student access the activity first ...',
      body: ' If a student selects an EdEHR activity before an instructor has made the connection the student will be asked to contact an ' +
      ' instructor to make the association.  It is best to always have an instructor use all EdEHR activities to make the association' +
      ' with an existing learning object or make a new one.  Go ahead. Log into the demonstration as a student and try an activity. See' +
      ' what your students might see. '
    },
    {
      title: 'Step 2',
      body: ' After an instructor has made the connection with an EdEHR learning object the activity is ready for the class. ' +
        ' Try this demonstration using one or more of the student logins.  Do some work in the EHR ' +
        ' and submit it for evaluation.'
    },
    {
      title: 'Evaluating student work',
      body: ' Then log in as an instructor and review the work your "students" have done. Give your students feedback on ' +
        'what they have submitted. Unlock the submission so the student can resume working. Or block / unblock the entire class. ' +
        'You can review the student\'s work in the EHR system or see a condensed view that shows just their work.'
    },
    {
      title: 'Creating content',
      body: ' As an instructor you can also customize the learning objects and case study data. ' +
        ' To do this log in as an instructor using one of the EdEHR activities in your LMS. ' +
        ' Then use the "Instructors tools" menu and select "Course designer mode" to elevate your permissions from just "instructor" to "content creator".' +
        ' Use the same menu to navigate to the Learning Objects or Case Studies tabs.  Explore how you can modify the instructions given to the students. ' +
        ' Or go deeper and modify the EHR case study content.\n' +
        ' If you do edit the EHR case studies and you want to preserve your work then be sure to use the download button.'
    },
    {
      title: 'Exit',
      body: '' +
        ' Use the Demo menu item on the top banner to leave the demonstration. ' +
        ' When you leave the demonstration all of your demonstration data is reset.' +
        ' Reach out to mailto:info@edehr.org if you have questions.',
    }
  ],
  lmsAside: 'To the right is a simple one-page learning management system with sample activities each ready to be connected with ' +
    ' a learning object inside the EdEHR. Some of those learning objects are ' +
    ' based on the open text-book <a href="https://pressbooks.bccampus.ca/healthcasestudies/">Health Case Studies - Toward Closing the Healthcare Communication Gap</a> by:  Glynda Rees, Rob Kruger, Janet Morrison.',
  login: {
    title: 'Welcome to your personal EdEHR playground',
    body: 'This is a sandbox area for you to explore the EdEHR and how it works with learning management systems such as Moodle, Brightspace, etc. This demonstration mode is only meant for short term explorations. If you create any course content you need to keep then be sure to download a copy. Contact mailto:info@edehr.org if you have any questions or need help.\n'
  },
  logout: {
    title: 'Confirm exit demonstration mode',
    body: 'Exit and destroy your demonstration environment. If you created or modified any EHR seeds you may wish to save a copy first. Cancel this dialog and return to the Seeds section (as an instructor) and download copies of your modified seeds. Then exit this demonstration mode.'
  }
}

export const ehrOnlyDemoText = {
  title: 'Try the EHR side of the EdEHR',
  intro_0: 'Electronic Health Records (EHRs) are a key part of patient care today. EdEHR is a Canadian, open-source software system designed to help students learn the essential skills interdisciplinary communication within an EHR. The EdEHR software was developed with input from health educators from institutions across British Columbia and it’s now available for use throughout Canada.  Training students on educational EHRs provides a safe environment where students can learn the importance of interdisciplinary communication without endangering patient safety. Post-secondary health programs can adapt the system to accommodate their educational needs. Faculty can adapt the case studies to specific learning objectives. The button below will allow you to see how the EHR side of the EdEHR is used by students. Of course, this is just half of the application, because the EdEHR also supports faculty as they develop course content and then support their student\'s education.  If you wish to learn more about the whole application then please contact mailto:info@edehr.org. ',
  intro: 'Below you can try the EHR and see various case studies. This part of the EdEHR is used by learners, as they complete their assignments, and by course content creators.  The EdEHR also helps faculty evaluate and support their students, and it helps educators manage and develop their course content. If you wish to learn more about the whole application then please contact mailto:info@edehr.org. ',
  explanation:
    'When you enter the EHR you will see a sample case study that is based on the open text-book ',
  after:
    'In the full EdEHR the student is given support with information about the assigned task and they are expected to submit their completed work for review. The faculty can then review and comment on the work and even send the work back to the student for refinement. The evaluation notes can later be transferred to the institutions learning management system.',
  activityDialogMessage: 'In the full EdEHR this dialog will explain the tasks the student must complete and provide' +
    'background information.  In this demo, you are tasked with reviewing the patient\'s chart ' +
    'and composing a progress note with your assessment. </br>\n' +
    'Other typical activities include adding a new set of vital sign data, or conducting any of the ' +
    'many assessments, or attending to an wound or incision, or administrating a medication, ' +
    'or preparing the patient for discharge, or prescribing a medication, or ...',
  activityDialogTitle: 'Assignment details',
  fileDialogTitle: 'File Selection',
  fileDialogMessage: 'This EHR only demo version does not support files. In the full EdEHR the EHR user ' +
    'will not see this message and will instead see a dialog that allows them to select from a set of ' +
    'files previously uploaded to the system by the course content creator. ' +
    'These files can include PDF and image files.  The workflow starts with the content creator who ' +
    'finds or creates a file to support a scenario. They upload this file into an area on the server ' +
    'reserved for the learning institution. Then students or course content creators can select a file for inclusion here.',
  submitDialogMessage: 'In the full EdEHR students complete their work and submit it for review by their ' +
    'instructor. The instructor can view the student\'s work in the EHR context and leave ' +
    'evaluation comments for the student to consider. These ' +
    'evaluation comments can also be transferred to the institution\'s learning ' +
    'management system for course grading.',
  submitDialogTitle: 'Student Submit',
  enterEHRButtonLabel: 'Enter the EHR',
  noAccess: 'You are already logged in and using the EdEHR either from your learning management system ' +
    'or via the full EdEHR demonstration. You can not also try the EHR only demo. ',
  ehrContextBannerTitle: 'EHR Only Demonstration View',
  navPanelSubmitButton: 'Submit',
  navPanelActivityButton: 'Activity Details'
}

const _common =     '"Health Case Studies - Toward Closing the Healthcare Communication Gap" ' +
    'by:  Glynda Rees, Rob Kruger, Janet Morrison. ' +
    'See: page 31 Case Study #2 in https://pressbooks.bccampus.ca/healthcasestudies/ \n' +
    'In this case the patient has chronic obstructive pulmonary disease (COPD) that is exacerbated due to community acquired pneumonia. The patient in this case study has a complicated health history. The focus for this assignment is help the student complement their assessment and monitoring skills with accurate and careful recording within an electronic health record system. Imagine that you are a nursing student your second or third year of study. Your task is to review the patients current condition and prepare a progress note for the attending physician.'

ehrOnlyDemoText.explanation += _common

export const edEhrValues = [
  {
    icon: 'graduation-cap',
    title: 'Student Focused',
    body: 'EdEHR is focused on the learning needs of the student.  It has the flexibility to foster higher-order critical thinking in students specific to their learning levels and their field. The EdEHR introduces students to the concept of data collection and the impact of that data on patient outcomes for real-time patient care.'
  },
  {
    icon: 'book-open',
    title: 'Open Source',
    body: 'EdEHR is an open source project under a copy-left license. This means anyone can see, modify, use or distribute the software. The copy-left licensing asks that all modifications be contributed back into the project for the benefit of everyone\n ' +
      'Anyone can view the software in the project <a href="https://github.com/edehr/edehr">GitHub repository</a>'

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
    body: 'Patient case studies are utilized for learning and teaching. Users can build their own case studies to suit their course curriculum or they can start with the eight <a href="https://pressbooks.bccampus.ca/healthcasestudies/">health case studies</a> that have been developed by a team at <a href="https://www.bcit.ca/">BC Institute of Technology (BCIT)</a>'
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
    body: 'Post-secondary programs can customize their own assignments and case studies to accommodate their educational needs and learning objectives. Or course designers may reach out and share content with others.\n The EHR part of the application is designed to be developed with minimal software development effort. For more information on this see the <a href="https://edehr.github.io/edehr/developer/inside-generator/">documentation</a>'
  },
  {
    icon: 'hand-holding-medical',
    title: 'Cost efficient',
    body: 'EdEHR is an open-source educational resource that provides post-secondary health care programs with the potential to access and customize the case studies and the application at minimal cost.'
  }
]
