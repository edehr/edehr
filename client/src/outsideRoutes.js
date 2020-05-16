export function outside () {

  return [
    {
      path: '/instructor',
      name: 'instructor',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Instructor.vue'),
      meta: { layout: 'outside', label: 'Instructor', topLevel: 'undefined' }
    },
    {
      path: '/classList',
      name: 'classList',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/ClassList.vue'),
      meta: { layout: 'outside', label: 'Class List', topLevel: 'undefined' }
    },
    {
      path: '/consumers',
      name: 'consumers',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Consumers.vue'),
      meta: { layout: 'outside', label: 'Consumers', topLevel: 'undefined' }
    },
    {
      path: '/demo',
      name: 'demo',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Demo'),
      meta: { layout: 'outside', public: true }
    },
    {
      path: '/demo-course',
      name: 'demoCourse',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/DemoCourse'),
      meta: { layout: 'outside', public: true }
    },
    {
      path: '/help',
      name: 'help',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Help.vue'),
      meta: { layout: 'outside', label: 'Help', topLevel: 'undefined' }
    },
    {
      path: '/assignments',
      name: 'assignments',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Assignments.vue'),
      meta: { layout: 'outside', label: 'Assignments', topLevel: 'undefined' }
    },
    {
      path: '/developEhrData',
      name: 'developEhrData',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/DevelopEhrData.vue'),
      meta: { layout: 'outside', label: 'Develop Ehr Data', topLevel: 'undefined' }
    },
    {
      path: '/lookahead',
      name: 'lookahead',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Lookahead.vue'),
      meta: { layout: 'outside', label: 'Lookahead', topLevel: 'undefined' }
    },
    { 
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Admin.vue'),
      meta: { layout: 'outside', label: 'Admin'}
    },
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard',
      component: () => import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/AdminDashboard.vue'),
    }
  ]
}
