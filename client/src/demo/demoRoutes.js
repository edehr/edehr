export function demoRoutes () {

  return [
    {
      path: '/demoRegister',
      name: 'demoRegister',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './views/DemoRegister.vue'),
      meta: { layout: 'outside', label: 'Demo Register', zone: 'demo' }
    },
    {
      path: '/demoLms',
      name: 'demoLms',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './views/DemoLmsLogin.vue'),
      meta: { layout: 'outside', label: 'Demo LMS', zone: 'demo' }
    },
    {
      path: '/demo-course',
      name: 'demo-course',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './views/DemoCourse.vue'),
      meta: { layout: 'outside', label: 'Demo Course', zone: 'demo' }
    }
  ]
}
