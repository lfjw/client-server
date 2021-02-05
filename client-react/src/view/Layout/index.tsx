import { Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "../../App";
import { RouteType } from "../../route/index";

function Layout(props: any) {
  const routes: Array<RouteType> = props.routes;
  return (
    <>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </>
  );
}

export default Layout;
