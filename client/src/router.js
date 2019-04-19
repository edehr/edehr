import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Dashboard.vue'),
    meta: { layout: 'outside' }
  },
  {
    path: '/ehr', redirect: '/ehr/patient/demographics'
  }
]

import { outside } from './outsideRoutes'
routes = routes.concat(outside())
import { inside } from './insideRoutes'
routes = routes.concat(inside())

routes.push({
  path: '*',
  component: () =>
    import(/* webpackChunkName: "notfound" */ './outside/components/PageNotFound.vue')
})


/**
 * scrollBehavior:
 * See https://router.vuejs.org/guide/advanced/scroll-behavior.html
 * @param to
 * @param from
 * @param savedPosition
 * @return {*}
 */
const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      // scroll to anchor by returning the selector
      position.selector = to.hash
    } else {
      // scroll to top
      position.x = 0
      position.y = 0
    }
    return position
  }
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior
})

router.beforeEach((to, from, next) => {
  var topLevel = to && to.meta ? to.meta.topLevel : null
  if (topLevel) {
    // console.log('In router beforeEach route change set top level to ', topLevel)
    store.commit('visit/topLevelMenu', topLevel)
  }
  next()
})

export default router
