import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Footer from './components/Footer/Footer';
import PageNotFound from './pages/PageNotFound';

export class App extends Component {
	render() {
		return (
			<main>
				<Header />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/signin" exact component={SignInPage} />
					<Route path="/signup" exact component={SignUpPage} />
					<Route component={PageNotFound} />
				</Switch>
				<Footer />
			</main>
		);
	}
}

export default App;
