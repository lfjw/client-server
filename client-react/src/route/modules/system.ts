import Dictionary from "../../view/System/Dictionary"
import Menu from "../../view/System/Menu"


const routes = [
  {
    path: '/system/dictionary',
    name: "SystemDictionary",
    component: Dictionary,
    auth: true,
    title: "字典管理"
  },
  {
    path: '/system/menu',
    name: "SystemMenu",
    component: Menu,
    auth: true,
    title: "菜单管理"
  },
]

export default routes