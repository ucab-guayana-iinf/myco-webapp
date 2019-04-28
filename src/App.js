import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import routes from './routes'

import 'bootstrap/dist/css/bootstrap.css';
import './assets/shards-dashboards.1.1.0.min.css'
import './assets/App.css';

class App extends Component {

<<<<<<< HEAD
export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {
        routes.map((route, index) => (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
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
=======
	state = {
		session : ['user', 'admin', 'guest']
	}

	render(){
		return(
			<BrowserRouter>
				<div>
					{
						routes.map( (route,i) => (
							<Route key={i} path={route.path} component={route.component} exact={route.exact}/>
						))
					}
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
>>>>>>> 974741c92f9036d85537cc7f135396319d726ae2
