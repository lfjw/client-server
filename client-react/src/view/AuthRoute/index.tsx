import React from "react";
import { useLocation, Route } from "react-router-dom";
import { RouteType } from "../../route/index";
function AuthRoute(props: any) {
  const { pathname } = useLocation();

  // TODO 此处模型进行更改
  const res: Array<RouteType> = props.routes;
  const r = res.find((_) => _.path === pathname);
  const user = JSON.parse(localStorage.userInfo);

  // 页面不存在
  if (!r?.path) {
    return <div>404</div>;
  }

  // 不需要验证
  if (!r?.auth) {
    return (
      <div>
        <Route path={r?.path} component={r?.component}></Route>
      </div>
    );
  }

  // 没有登录
  if (!user) {
    return <div>无权限</div>;
  }

  return (
    <div>
      <Route path={r?.path} component={r?.component}></Route>
    </div>
  );
}

export default AuthRoute;
