import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import AppRoutes from "./shared/AppRoutes";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <AppRoutes />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
