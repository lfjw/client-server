import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes, { RouteType } from "./route";
const routesList: Array<RouteType> = routes;

export default function App() {
  return (
    <Router>
      <Switch>
        {routesList.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export function RouteWithSubRoutes(route: RouteType) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.children} />}
    />
  );
}
