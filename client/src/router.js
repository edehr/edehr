import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

export const HOME_PAGE = 'home'
export const APP_LMS_ACCESS_ROUTE_NAME = 'AppLmsAccessS1'
export const APP_LMS_DASH_ROUTE_NAME = 'appLmsDashboard'

export const UNLINKED_ACTIVITY_ROUTE_NAME = 'unlinked-activity'
export const COURSE_ROUTE_NAME = 'course'
export const ADMIN_LOGIN_ROUTE_NAME = 'admin-login'
export const ERROR_ROUTE_NAME = 'error'
export const ZONE_ADMIN = 'admin'
export const ZONE_PUBLIC = 'public'
export const ZONE_APP_LMS = 'add-lms'
export const ZONE_DEMO = 'demo'
export const ZONE_LMS = 'lms'
// ehr zone is only use in the inside routes. The inside
// route file is generated
export const ZONE_EHR = 'ehr'

export function routeIsPublic (route) {
  return route.meta.zone === ZONE_PUBLIC
}

let routes = [
  {
    path: '/',
    name: HOME_PAGE,
    component: () =>
      import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Home'),
    meta: { layout: 'home', label: 'Home', zone: ZONE_PUBLIC }
  },
  {
    path: '/patient-labels',
    name: 'patient-labels',
    component: () =>
      import(/* webpackChunkName: "chunk-[request][index]" */ './inside/custom/PatientLabels.vue'),
    meta: { layout: 'print', label: 'Patient labels', zone: ZONE_LMS }
  },
  {
    path: '/patient-summary',
    name: 'patient-summary',
    component: () =>
      import(/* webpackChunkName: "chunk-[request][index]" */ './inside/custom/PatientSummary.vue'),
    meta: { layout: 'print', label: 'Patient summary', zone: ZONE_EHR }
  },
  {
    // Redirect from LTI entry to appropriate part of application based on current appType (from seed)
    path: '/ehr', name: 'ehr', redirect: (to) => {
      // Now that the ehr patient page is visible in both EHR and LIS we don't need the following. And we can remove the appType query parameter in all callers.gener
      // const appType = to.query.appType
      const ehrUrl = '/ehr/patient/demographics'
      // const lisUrl = '/ehr/med-lab/med-lab-demographics'
      // return appType === APP_TYPE_LIS ? lisUrl  : appType === APP_TYPE_EHR ? ehrUrl : ehrUrl /* default to ehr */
      return ehrUrl
    }
  }
]

import { outside } from './outsideRoutes'
routes = routes.concat(outside())
import { inside } from './insideRoutes'
routes = routes.concat(inside())

routes.push({
  path: '*',
  component: () =>
    import(/* webpackChunkName: "notfound" */ './outside/components/PageNotFound.vue'),
  meta: { layout: 'outside', label: 'Page Not Found', zone: ZONE_PUBLIC }
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
