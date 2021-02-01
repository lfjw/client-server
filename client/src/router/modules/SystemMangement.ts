
import { RouteRecordRaw } from 'vue-router'

const routers: Array<RouteRecordRaw> = [
  {
    path: "/daily-record",
    name: 'DailyRecord',
    component: () => import(/* webpackChunkName: "DailyRecord" */  '@/views/SystemManagement/DailyRecord/index'),
    meta: {
      title: "日志管理",
    }
  },
  {
    path: "/dictionary-management",
    name: 'DictionaryManagement',
    component: () => import(/* webpackChunkName: "DictionaryManagement" */  '@/views/SystemManagement/DictionaryManagement/index'),
    meta: {
      title: "字典管理",
    }
  },
  {
    path: "/menu-management",
    name: 'MenuManagement',
    component: () => import(/* webpackChunkName: "MenuManagement" */  '@/views/SystemManagement/MenuManagement/index'),
    meta: {
      title: "菜单管理",
    }
  },
  {
    path: "/parameter-management",
    name: 'ParameterManagement',
    component: () => import(/* webpackChunkName: "ParameterManagement" */  '@/views/SystemManagement/ParameterManagement/index'),
    meta: {
      title: "参数管理",
    }
  },
  {
    path: "/role-authority-management",
    name: 'RoleAuthorityManagement',
    component: () => import(/* webpackChunkName: "RoleAuthorityManagement" */  '@/views/SystemManagement/RoleAuthorityManagement/index'),
    meta: {
      title: "角色权限管理",
    }
  },
]
export default routers