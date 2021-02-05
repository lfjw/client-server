import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const req = require.context('./modules', false, /\.ts$/)
let children: Array<RouteRecordRaw> = []
req.keys().forEach(key => { children = children.concat(req(key).default) })

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import(/* webpackChunkName: "Layout" */ '../views/Layout/index'),
    redirect: '/daily-record',
    children,

  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login/index'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register/index.vue'),
  },
  {
    path: "/401",
    name: '401',
    component: () => import(/* webpackChunkName: "401" */  '@/views/Error/401/index'),
    meta: {
      title: "401",
    }
  },
  {
    path: "/404",
    name: '404',
    component: () => import(/* webpackChunkName: "404" */  '@/views/Error/404/index'),
    meta: {
      title: "404",
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
