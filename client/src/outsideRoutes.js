import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
const NAMES = Text.ROUTE_NAMES

export function outside () {

  return [
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/About.vue'),
      meta: { layout: 'outside', label: NAMES.ABOUT, zone: 'public' }
    },
    {
      path: '/help',
      name: 'help',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Help.vue'),
      meta: { layout: 'outside', label: 'Help', zone: 'public' }
    },
    {
      path: '/classList',
      name: 'classList',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/ClassList.vue'),
      meta: { layout: 'outside', label: NAMES.CLASS_LIST, icon: APP_ICONS.activity, zone: 'lms' }
    },
    {
      path: '/consumer',
      name: 'consumer',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/admin/Consumer.vue'),
      meta: { layout: 'outside', label: NAMES.CONSUMER, icon: APP_ICONS.consumer, zone: 'lms' }
    },
    {
      path: '/courses',
      name: 'courses',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Courses.vue'),
      meta: { layout: 'outside', label: 'Courses and Activities', icon: APP_ICONS.course, zone: 'lms' }
    },
    {
      path: '/eval-student',
      name: 'eval-student',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/EvalStudent.vue'),
      meta: { layout: 'outside', label: NAMES.COURSES, icon: APP_ICONS.rawEhr, zone: 'lms' }
    },    {
      path: '/fileList',
      name: 'fileList',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/FileList.vue'),
      meta: { layout: 'outside', label: NAMES.FILES, icon: APP_ICONS.file, zone: 'lms' }
    },
    {
      path: '/learning-objects',
      name: 'learning-objects',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/LearningObjects.vue'),
      meta: { layout: 'outside', label: NAMES.LOBJS, icon: APP_ICONS.lobj, zone: 'lms' }
    },
    {
      path: '/learning-object',
      name: 'learning-object',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/LearningObject.vue'),
      meta: { layout: 'outside', label: NAMES.LOBJ, icon: APP_ICONS.lobj, zone: 'lms' }
    },

    {
      path: '/lms-activity',
      name: 'lms-activity',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/LmsActivity.vue'),
      meta: { layout: 'outside', label: NAMES.ACTIVITY, icon: APP_ICONS.activity, zone: 'lms' }
    },
    {
      path: '/seed-list',
      name: 'seed-list',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/SeedList.vue'),
      meta: { layout: 'outside', label: NAMES.SEEDS, icon: APP_ICONS.seed, zone: 'lms' }
    },
    {
      path: '/seed-view',
      name: 'seed-view',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/SeedView.vue'),
      meta: { layout: 'outside', label: NAMES.SEED_VIEW, icon: APP_ICONS.seed, zone: 'lms' }
    },
    {
      path: '/seed-view-condensed',
      name: 'seed-view-condensed',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/SeedViewCondensed.vue'),
      meta: { layout: 'outside', label: NAMES.SEED_CONDENSED, icon: APP_ICONS.seed, zone: 'lms' }
    },
    {
      path: '/admin',
      name: 'admin',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/admin/Admin.vue'),
      meta: { layout: 'outside', label: NAMES.ADMIN, zone: 'admin' }
    },
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/admin/AdminDashboard.vue'),
      meta: { layout: 'outside', label: NAMES.ADMIN_DASH, zone: 'admin' }
    },
    {
      path: '/consumers',
      name: 'consumers',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/admin/Consumers.vue'),
      meta: { layout: 'outside', label: NAMES.CONSUMERS, zone: 'admin' }
    },
    {
      path: '/admin-consumer',
      name: 'admin-consumer',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/admin/AdminConsumerView.vue'),
      meta: { layout: 'outside', label: NAMES.ADMIN_CONSUMER, zone: 'admin' }
    },
    {
      path: '/admin-seeds',
      name: 'admin-seeds',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/admin/AdminSeedsView.vue'),
      meta: { layout: 'outside', label: NAMES.ADMIN_CONSUMER, zone: 'admin' }
    },
    {
      path: '/ehrOnlyDemo',
      name: 'ehrOnlyDemo',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/EhrOnlyDemo.vue'),
      meta: { layout: 'outside', label: 'Ehr Only Demo', zone: 'demo' }
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
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Privacy.vue'),
      meta: { layout: 'outside', label: 'Privacy', zone: 'public' }
    },
    {
      path: '/terms',
      name: 'terms',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Terms.vue'),
      meta: { layout: 'outside', label: 'Terms', zone: 'public' }
    },
    {
      path: '/edehrDetails',
      name: 'edehrDetails',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './app/edehr-org/EdEhrOrgDetails.vue'),
      meta: { layout: 'outside', label: 'edehrDetails', zone: 'public' }
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
