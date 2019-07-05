import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/shards-dashboards.1.1.0.min.css'
import './assets/App.css';


class App extends Component {

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
