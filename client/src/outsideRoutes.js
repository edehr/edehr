export function outside () {

  return [
    {
      path: '/help',
      name: 'help',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Help.vue'),
      meta: { layout: 'outside', label: 'Help', zone: 'public' }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Privacy.vue'),
      meta: { layout: 'outside', label: 'Privacy', zone: 'public' }
    },
    {
      path: '/assignments',
      name: 'assignments',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Assignments.vue'),
      meta: { layout: 'outside', label: 'Assignments', zone: 'lms' }
    },
    {
      path: '/classList',
      name: 'classList',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/ClassList.vue'),
      meta: { layout: 'outside', label: 'Class List', zone: 'lms' }
    },
    {
      path: '/developEhrData',
      name: 'developEhrData',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/DevelopEhrData.vue'),
      meta: { layout: 'outside', label: 'Develop Ehr Data', zone: 'lms' }
    },
    {
      path: '/instructor',
      name: 'instructor',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Instructor.vue'),
      meta: { layout: 'outside', label: 'Instructor', zone: 'lms' }
    },
    {
      path: '/fileList',
      name: 'fileList',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/FileList.vue'),
      meta: { layout: 'outside', label: 'File List', zone: 'lms' }
    },
    {
      path: '/admin',
      name: 'admin',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Admin.vue'),
      meta: { layout: 'outside', label: 'Admin', zone: 'admin' }
    },
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/AdminDashboard.vue'),
      meta: { layout: 'outside', label: 'Admin Dashboard', zone: 'admin' }
    },
    {
      path: '/consumers',
      name: 'consumers',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Consumers.vue'),
      meta: { layout: 'outside', label: 'Consumers', zone: 'admin' }
    },
    {
      path: '/users',
      name: 'users',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Users.vue'),
      meta: { layout: 'outside', label: 'Users', zone: 'admin' }
    },
    {
      path: '/demo',
      name: 'demo',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Demo.vue'),
      meta: { layout: 'outside', label: 'Demo', zone: 'demo' }
    },
    {
      path: '/demo-course',
      name: 'demo-course',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/DemoCourse.vue'),
      meta: { layout: 'outside', label: 'Demo Course', zone: 'demo' }
    }
  ]
}
