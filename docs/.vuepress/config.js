const path = require("path");

module.exports = {
  title: 'EdEHR a prototype project',
  description: 'EdEHR is an open source LTI compatable learning tool providing support for educational programs in the medical field. EdEHR allows students to try out a Electronic Health Record (EHR) system within the educational experience',
  base: "/edehr/",
  themeConfig: {
    displayAllHeaders: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'LMS', link: '/lms/' },
      { text: 'Ed', link: '/outside/' },
      { text: 'EHR', link: '/inside/' },
      { text: 'Documentation', link: '/docs/' },
      { text: 'DevOps', link: '/devop/' }
    ],
    sidebar: [
      {
        title: 'EdEHR Project',
        children: [
          '/'
        ]
      },
      {
        title: 'LMS',
        children: [
          '/lms/',
          '/lms/LTI.md'
        ]
      },
      {
        title: 'Assignments',
        children: [
          '/outside/',
          '/outside/assignments.md'
        ]
      },
      {
        title: 'EHR',
        children: [
          '/inside/'
        ]
      },
      {
        title: 'Code generator',
        children: [
          '/inside-generator/',
          '/inside-generator/Ehr-Defs-Pages.md',
          '/inside-generator/Ehr-Defs-Input-Types.md',
          '/inside-generator/Ehr-Defs-Keys.md',
          '/inside-generator/Ehr-Defs-Location.md',
          '/inside-generator/Ehr-Calculated-Values.md',
        ]
      },
      {
        title: 'Custom Pages',
        children: [
          '/inside-custom/',
          '/inside-custom/Med-Admin-Records.md',
          '/inside-custom/Summary-table.md'
        ]
      },
      {
        title: 'DevOps',
        children: [
          '/devop/',
          '/devop/deploy.md',
          '/devop/technical-architecture.md'
        ]
      },
      {
        title: 'Documentation',
        children: [
          '/docs/'
        ]
      }
    ]
  }
}
