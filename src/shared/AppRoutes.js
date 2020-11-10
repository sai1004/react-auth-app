import { Route } from "react-router-dom";

import loginPage from "../pages/login/loginPage";

const routes = [{ path: "", component: loginPage }];

const AppRoutes = () => {
  return routes.map((route, i) => {
    return (
      <Route key={i} exact path={route.path} component={route.component} />
    );
  });
};

export default AppRoutes;
