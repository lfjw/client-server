import router from './index'

// 用户是否登录
// function userLogin() {
//   return localStorage.userInfo
// }

router.beforeEach((to, from, next) => {
  //const { path: toPath, name: toName, } = to;

  // if (toPath === '/login') {
  //   next()
  //   return;
  // }

  // if (toPath !== '/login' && !userLogin()) {
  //   next({ path: '/login', query: { redirect: toName as string } })
  //   return
  // }

  next()
}) 