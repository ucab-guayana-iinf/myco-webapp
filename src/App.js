import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/shards-dashboards.1.1.0.min.css";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {
        routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={() => (
              <route.layout>
                <route.component />
              </route.layout>
            )}
          />
        ))
      }
    </div>
  </Router>
);
