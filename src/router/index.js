import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      // component: Dashboard
      component: () => import(/* webpackChunkName: "dashboard" */ '../../pages/Dashboard.vue')
      // children: [
      //   {
      //     path: '/:payment',
      //     component: () => import(/* webpackChunkName: "dashboard" */ '../../pages/Dashboard.vue')
      //   }
      // ]
    },
    {
      path: '/dashboard/add/:payment/:category',
      name: 'AddNewPayment',
      component: () => import(/* webpackChunkName: "dashboard" */ '../../pages/Dashboard.vue')
    },
    {
      // path: '/about',
      path: '/about*',
      name: 'about',
      // component: About
      component: () => import(/* webpackChunkName: "about" */'../../pages/About.vue')
    },
    {
      path: '/notfound',
      name: 'notfound',
      // component: NotFound
      component: () => import(/* webpackChunkName: "notfound" */'../../pages/NotFound.vue')
    }
    // {
    //   path: '*',
    //   component: NotFound
    // }
    // {
    //   path: '*',
    //   // redirect: '/notfound'
    //   redirect: {
    //     name: 'notfound'
    //   }
    // }
  ]
})

// const user = true
//
// router.beforeEach((to, from, next) => {
//   if (!user && to.name !== 'notfound') next({ name: 'notfound' })
//   else next()
// })

const titles = {
  dashboard: 'Dashboard',
  about: 'About',
  notfound: 'Not Found'
}

router.afterEach((to) => {
  document.title = titles[to.name]
})

export default router
