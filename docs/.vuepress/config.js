const path = require("path");

module.exports = {
  title: 'EdEHR a prototype project',
  description: 'EdEHR is an open source, LTI-compatable learning tool for students in post-secondary medical programs. EdEHR gives students the opportunity to learn about Electronic Health Record (EHR) systems in a classroom or sim lab setting before working in a professional environment.',
  base: "/edehr/",
  themeConfig: {
    displayAllHeaders: false,
    nav: [
      {text: 'Home', link: '/'},
      {text: 'LMS admin', link: '/lms-admin/'},
      {text: 'Course designer', link: '/course-designer/'},
      {text: 'Instructor', link: '/instructor/'},
      {text: 'Student', link: '/student/'},
      {text: 'Developer', link: '/developer/'},
    ],
    sidebar: [
      {
        title: "EdEHR",
        children: [
          '/',
          '/about.md',
          '/whats-next.md'
        ]
      },
      {
        title: "LMS admin",
        children: [
          '/lms-admin/'
        ]
      },
      {
        title: "Course designer",
        children: [
          '/course-designer/',
          '/course-designer/cd-lms.md',
          '/course-designer/cd-edehr.md',
          '/course-designer/cd-assignment.md',
          '/course-designer/cd-seed.md'
        ]
      },
      {
        title: "Instructors's guide",
        path: '/instructor/',
        children: [
          '/instructor/',
        ]
      },
      {
        title: "Student's guide",
        children: [
          '/student/',
        ]
      },
      {
        title: "Developer's guide",
        path: '/developer/',
        children: [
          '/developer/',
        ]
      },
      {
        title: "Common",
        path: '/shared/',
        children: [
          '/shared/',
          '/shared/definitions.md',
          '/shared/FAQ.md',
        ]
      },
    ]
  }
}

