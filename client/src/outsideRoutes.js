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
    }
  ]
}
