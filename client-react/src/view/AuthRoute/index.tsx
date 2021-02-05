import { useLocation, Route, Redirect } from "react-router-dom";
import { RouteType } from "../../route/index";
import { getNode } from "../../utils";
function AuthRoute(props: any) {
  const { pathname } = useLocation();

  // TODO 此处模型进行更改

  const user = localStorage.userInfo && JSON.parse(localStorage.userInfo);
  const r = getNode<RouteType>({
    list: props.routes,
    childKey: "children",
    key: "path",
    val: pathname,
    result: [],
  })[0];

  // 页面不存在，重定向，会在渲染一次此函数
  if (!r?.path) {
    return <Redirect to="/401" />;
  }

  // 需要验证登录并且没有登录
  if (r?.auth && !user) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Route path={r?.path} component={r?.component}></Route>
    </div>
  );
}

export default AuthRoute;
