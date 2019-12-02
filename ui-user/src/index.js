import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import history from './history';
import App from './App';
import './public/css/style.css';
import './public/css/bootstrap.css';

import './public/css/font-awesome.css';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
