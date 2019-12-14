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
      path: '/classlist',
      name: 'classlist',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/ClassList.vue'),
      meta: { layout: 'outside', label: 'ClassList', topLevel: 'undefined' }
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
    }
  ]
}
