import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "首页"
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: "about"
    }
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import(/* webpackChunkName: "tools" */ '../views/ToolsView.vue'),
    meta: {
      title: "tools"
    }
  },
  {
    path: '/components',
    name: 'components',
    component: () => import(/* webpackChunkName: "tools" */ '../views/Components.vue'),
    meta: {
      title: "components"
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
