const path = require("path");

module.exports = {
  title: 'EdEHR a prototype project',
  description: 'EdEHR is an open source, LTI-compatable learning tool for students in post-secondary medical programs. EdEHR gives students the opportunity to learn about Electronic Health Record (EHR) systems in a classroom or sim lab setting before working in a professional environment.',
  base: "/edehr/",
  themeConfig: {
    displayAllHeaders: false,
    nav: [
      { text: 'Developer', link: 'developer' },
      { text: 'Technical admin', link: 'admin' },
      { text: 'Instructor', link: 'instructor' },
      { text: 'Student', link: 'student' },
    ],

    // If user = developer, then show this sidebar
    sidebar: [
      {
        title: "EdEHR - Developer's guide",
        children: [
          '/developer/'
        ]
      },
      {
        title: 'Getting started',
        children: [
          '/developer/',
          '/developer/installation.md',
          '/developer/development-environment.md',
          '/shared/user-flow.md',
          '/shared/definitions.md'
        ]
      },
      {
        title: 'LMS',
        children: [
          'developer/lms/',
          'developer/lms/LTI.md'
        ]
      },
      {
        title: 'Assignments',
        children: [
          'developer/outside/',
          'developer/outside/assignments.md'
        ]
      },
      {
        title: 'Dashboard',
        children: [
          'developer/outside/',
          'developer/outside/assignments.md'
        ]
      },
      {
        title: 'Health record generation',
        children: [
          'developer/inside/',
          'developer/inside-generator/',
          'developer/inside-generator/Ehr-Defs-Pages.md',
          'developer/inside-generator/Ehr-Defs-Input-Types.md',
          'developer/inside-generator/Ehr-Defs-Keys.md',
          'developer/inside-generator/Ehr-Defs-Location.md',
          'developer/inside-generator/Ehr-Calculated-Values.md',
          'developer/inside-custom/',
          'developer/inside-custom/Med-Admin-Records.md',
          'developer/inside-custom/Summary-table.md'
        ]
      },
      {
        title: 'DevOps',
        children: [
          'developer/devop/',
          'developer/devop/deploy.md',
          'developer/devop/technical-architecture.md'
        ]
      },
      {
        title: 'Documentation maintenance',
        children: [
          'shared/docs/'
        ]
      }
    ]


    // If user = technical admin, then show this sidebar
    sidebar: [
      {
        title: "EdEHR - Technical admin's guide",
        children: [
          '/'
        ]
      },
      {
        title: 'Getting started',
        children: [
          'developer/user-flow.md',
          'shared/definitions.md'
        ]
      },
      {
        title: 'LMS',
        children: [
          'developer/lms/',
          'developer/lms/LTI.md'
        ]
      },
      {
        title: 'Assignments',
        children: [
          'developer/outside/',
          'developer/outside/assignments.md'
        ]
      },
      {
        title: 'Health record generation',
        children: [
          '/developer/inside/',
          '/developer/inside-generator/',
          '/developer/inside-generator/Ehr-Defs-Pages.md',
          '/developer/inside-generator/Ehr-Defs-Input-Types.md',
          '/developer/inside-generator/Ehr-Defs-Keys.md',
          '/developer/inside-generator/Ehr-Defs-Location.md',
          '/developer/inside-generator/Ehr-Calculated-Values.md',
          '/developer/inside-custom/',
          '/developer/inside-custom/Med-Admin-Records.md',
          '/developer/inside-custom/Summary-table.md'
        ]
      },
    ]


    // If user = instructor, then show this sidebar
    sidebar: [
      {
        title: "EdEHR - Instructor's guide",
        children: [
          '/'
        ]
      },
      {
        title: 'Getting started',
        children: [
          'shared/definitions.md'
        ]
      },
      {
        title: 'LMS',
        children: [
          '/lms/'
        ]
      },
      {
        title: 'Assignments',
        children: [
          'instructor/outside/',
          'instructor/outside/dashboard.md',
          'instructor/outside/evaluation.md'
        ]
      },
    ]


    // If user = student, then show this sidebar
    sidebar: [
      {
        title: "EdEHR - Student's guide",
        children: [
          '/'
        ]
      },
      {
        title: 'Getting started',
        children: [
          'shared/quick-tips.md',
          'shared/definitions.md'
        ]
      },
      {
        title: 'LMS',
        children: [
          'developer/lms/',
        ]
      },
      {
        title: 'Assignments',
        children: [
          'developer/outside/',
          'developer/outside/dashboard.md',
          'developer/outside/evaluation.md'
        ]
      },
    ]
  }
}
