
import Layout from '../view/Layout/index'
import Login from '../view/Login/index'
import Register from '../view/Register/index'

import Dictionary from '../view/System/Dictionary/index'

import Menu from '../view/System/Menu/index'

export interface RouteType {
  path: string;
  name: string;
  component: any;
  auth?: boolean;
  title?: string;
}
const routes: Array<RouteType> = [
  {
    path: '/',
    name: "Layout",
    component: Layout,
  },
  {
    path: '/login',
    name: "Login",
    component: Login,
  },
  {
    path: '/register',
    name: "Register",
    component: Register,
  },
  {
    path: '/dictionary',
    name: "Dictionary",
    component: Dictionary,
    auth: true,
    title: "字典管理"
  },
  {
    path: '/menu',
    name: "Menu",
    component: Menu,
    auth: true,
    title: "菜单管理"
  }

]
export default routes