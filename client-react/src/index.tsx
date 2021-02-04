import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "normalize.css";
import "antd/dist/antd.css";
import routes from "./route";
import AuthRoute from "./view/AuthRoute";

ReactDOM.render(
  <Router>
    <Switch>
      <AuthRoute routes={routes}></AuthRoute>
    </Switch>
  </Router>,
  document.getElementById("root")
);
