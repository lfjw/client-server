
import ErrorPage404 from '../view/ErrorPage/404'
import Layout from '../view/Layout/index'
import Login from '../view/Login/index'
import Register from '../view/Register/index'

export interface RouteType {
  path: string;
  name: string;
  component: any;
  auth?: boolean; // 是否验证登录
  title?: string;
  children?: Array<RouteType>
}

const req = (require as any).context('./modules', false, /\.ts$/)
let children: Array<any> = []
req.keys().forEach((key: any) => { children = children.concat(req(key).default) })

const routes: Array<RouteType> = [
  {
    path: '/404',
    name: "404",
    component: ErrorPage404,
  },
  {
    path: '/401',
    name: "401",
    component: ErrorPage404,
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
    path: '/',
    name: "Layout",
    component: Layout,
    children
  },
]

export default routes