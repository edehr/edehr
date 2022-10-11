import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
const NAMES = Text.ROUTE_NAMES

export const UNLINKED_ACTIVITY_ROUTE_NAME = 'unlinked-activity'
export const ERROR_ROUTE_NAME = 'error'
export const ZONE_ADMIN = 'admin'
export const ZONE_PUBLIC = 'public'
export const ZONE_DEMO = 'demo'
export const ZONE_LMS = 'lms'
// ehr zone is only use in the inside routes. The inside
// route file is generated
export const ZONE_EHR = 'ehr'

export function outside () {

  return [
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/About.vue'),
      meta: { layout: 'outside', label: NAMES.ABOUT, zone: ZONE_PUBLIC }
    },
    {
      path: '/aboutEdEHR',
      name: 'aboutEdEHR',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/AboutEdEHR.vue'),
      meta: { layout: 'outside', label: NAMES.ABOUT_EDEHR, zone: ZONE_PUBLIC }
    },
    {
      path: '/aboutSaaS',
      name: 'aboutSaaS',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/AboutSaaS.vue'),
      meta: { layout: 'outside', label: NAMES.ABOUT_SASS, zone: ZONE_PUBLIC }
    },
    {
      path: '/error',
      name: 'error',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/ErrorPage.vue'),
      meta: { layout: 'outside', label: 'Error', zone: ZONE_PUBLIC }
    },
    {
      path: '/help',
      name: 'help',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Help.vue'),
      meta: { layout: 'outside', label: 'Help', zone: ZONE_PUBLIC }
    },
    {
      path: '/classList',
      name: 'classList',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/ClassList.vue'),
      meta: { layout: 'outside', label: NAMES.CLASS_LIST, icon: APP_ICONS.activity, zone: ZONE_LMS }
    },
    {
      path: '/consumer',
      name: 'consumer',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/admin/Consumer.vue'),
      meta: { layout: 'outside', label: NAMES.CONSUMER, icon: APP_ICONS.consumer, zone: ZONE_LMS }
    },
    {
      path: '/courses',
      name: 'courses',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Courses.vue'),
      meta: { layout: 'outside', label: 'Courses and Activities', icon: APP_ICONS.course, zone: ZONE_LMS }
    },
    {
      path: '/eval-student',
      name: 'eval-student',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/EvalStudent.vue'),
      meta: { layout: 'outside', label: NAMES.COURSES, icon: APP_ICONS.rawEhr, zone: ZONE_LMS }
    },    {
      path: '/fileList',
      name: 'fileList',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/FileList.vue'),
      meta: { layout: 'outside', label: NAMES.FILES, icon: APP_ICONS.file, zone: ZONE_LMS }
    },
    {
      path: '/learning-objects',
      name: 'learning-objects',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/LearningObjects.vue'),
      meta: { layout: 'outside', label: NAMES.LOBJS, icon: APP_ICONS.lobj, zone: ZONE_LMS }
    },
    {
      path: '/learning-object',
      name: 'learning-object',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/LearningObject.vue'),
      meta: { layout: 'outside', label: NAMES.LOBJ, icon: APP_ICONS.lobj, zone: ZONE_LMS }
    },

    {
      path: '/lms-activity',
      name: 'lms-activity',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/LmsActivity.vue'),
      meta: { layout: 'outside', label: NAMES.ACTIVITY, icon: APP_ICONS.activity, zone: ZONE_LMS }
    },
    {
      path: '/seed-list',
      name: 'seed-list',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/SeedList.vue'),
      meta: { layout: 'outside', label: NAMES.SEEDS, icon: APP_ICONS.seed, zone: ZONE_LMS }
    },
    {
      path: '/seed-view',
      name: 'seed-view',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/SeedView.vue'),
      meta: { layout: 'outside', label: NAMES.SEED_VIEW, icon: APP_ICONS.seed, zone: ZONE_LMS }
    },
    {
      path: '/seed-view-condensed',
      name: 'seed-view-condensed',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/SeedViewCondensed.vue'),
      meta: { layout: 'outside', label: NAMES.SEED_CONDENSED, icon: APP_ICONS.seed, zone: ZONE_LMS }
    },
    {
      path: '/admin',
      name: 'admin',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/admin/Admin.vue'),
      meta: { layout: 'outside', label: NAMES.ADMIN, zone: ZONE_ADMIN }
    },
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/admin/AdminDashboard.vue'),
      meta: { layout: 'outside', label: NAMES.ADMIN_DASH, zone: ZONE_ADMIN }
    },
    {
      path: '/consumers',
      name: 'consumers',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/admin/Consumers.vue'),
      meta: { layout: 'outside', label: NAMES.CONSUMERS, zone: ZONE_ADMIN }
    },
    {
      path: '/admin-consumer',
      name: 'admin-consumer',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/admin/AdminConsumerView.vue'),
      meta: { layout: 'outside', label: NAMES.ADMIN_CONSUMER, zone: ZONE_ADMIN }
    },
    {
      path: '/admin-seeds',
      name: 'admin-seeds',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/admin/AdminSeedsView.vue'),
      meta: { layout: 'outside', label: NAMES.ADMIN_CONSUMER, zone: ZONE_ADMIN }
    },
    {
      path: '/ehrOnlyDemo',
      name: 'ehrOnlyDemo',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/EhrOnlyDemo.vue'),
      meta: { layout: 'outside', label: 'Ehr Only Demo', zone: ZONE_DEMO }
    },
    {
      path: '/demo',
      name: 'demo',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Demo.vue'),
      meta: { layout: 'outside', label: 'Demo', zone: ZONE_DEMO }
    },
    {
      path: '/demo-course',
      name: 'demo-course',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/DemoCourse.vue'),
      meta: { layout: 'outside', label: 'Demo Course', zone: ZONE_DEMO }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Privacy.vue'),
      meta: { layout: 'outside', label: 'Privacy', zone: ZONE_PUBLIC }
    },
    {
      path: '/terms',
      name: 'terms',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Terms.vue'),
      meta: { layout: 'outside', label: 'Terms', zone: ZONE_PUBLIC }
    },
    {
      path: '/unlinked-activity',
      name: UNLINKED_ACTIVITY_ROUTE_NAME,
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/UnlinkedActivity.vue'),
      meta: { layout: 'outside', label: 'Unlinked Activity', zone: ZONE_LMS }
    },
    {
      path: '/edehrDetails',
      name: 'edehrDetails',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './app/edehr-org/EdEhrOrgDetails.vue'),
      meta: { layout: 'outside', label: 'edehrDetails', zone: ZONE_LMS }
    },
    {
      path: '/dev-area',
      name: 'dev-area',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/DevArea.vue'),
      meta: { layout: 'outside', label: 'Dev Area', zone: 'dev' }
    }
  ]
}
