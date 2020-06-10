const path = require("path");

module.exports = {
  title: 'EdEHR a prototype project',
  description: 'EdEHR is an open source, LTI-compatable learning tool for students in post-secondary medical programs. EdEHR gives students the opportunity to learn about Electronic Health Record (EHR) systems in a classroom or sim lab setting before working in a professional environment.',
  base: "/edehr/",
  themeConfig: {
    displayAllHeaders: false,
    nav: [
      {text: 'LMS admin', link: '/lms-admin/'},
      {text: 'Course designer', link: '/course-designer/'},
      {text: 'Student', link: '/student/'},
      {text: 'Instructor', link: '/instructor/'},
      {text: 'Developer', link: '/developer/'},
    ],
    sidebar: [
      {
        title: "EdEHR",
        path: '/',
      },
      {
        title: "Configuration",
        path: '/configuration/',
        children: [
          '/configuration/',
        ]
      },
      {
        title: "LMS Admin",
        path: '/lms-admin/',
        children: [
          '/lms-admin/',
        ]
      },
      {
        title: "Student guide",
        path: '/student/',
        children: [
          '/student/',
        ]
      },
      {
        title: "Instructor guide",
        path: '/instructor/',
        children: [
          '/instructor/',
        ]
      },
      {
        title: "Course designer guide",
        path: '/course-designer/',
        children: [
          '/course-designer/',
          '/course-designer/cd-lms',
          '/course-designer/cd-connect',
          '/course-designer/cd-activity',
          '/course-designer/cd-assignment',
          '/course-designer/cd-seed',
        ]
      },
      {
        title: "Developer guide",
        path: '/developer/',
        children: [
          '/developer/contributors.md',
          '/developer/devop/',
          '/developer/devop/technical-architecture.md',
          '/developer/devop/deploy.md',
          '/developer/inside/',
          '/developer/inside-generator/',
          '/developer/inside-generator/ehr-defs-pages.md',
          '/developer/inside-generator/ehr-defs-keys.md',
          '/developer/inside-generator/ehr-defs-input-types.md',
          '/developer/inside-generator/ehr-defs-location.md',
          '/developer/inside-generator/ehr-calculated-values.md',
          '/developer/inside-custom/',
          '/developer/inside-custom/med-admin-records.md',
          '/developer/inside-custom/summary-table.md',
        ]
      },
      {
        title: "Glossary",
        path: '/shared/definitions',
        children: [
          '/shared/definitions.md',
          '/shared/users.md',
        ]
      },
    ]
  }
}

