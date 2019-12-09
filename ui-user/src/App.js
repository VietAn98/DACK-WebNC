import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './containers/HeaderContainer';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Footer from './components/Footer/Footer';
import PageNotFound from './pages/PageNotFound';
import Settings from './pages/Settings';
import TeacherInfoPage from './pages/TeacherInfoPage';

export class App extends React.PureComponent {
	render() {
		return (
			<main>
				<Header />
				<Switch>
					<Route path="/settings" exact component={Settings} />
					<Route path="/signin" exact component={SignInPage} />
					<Route path="/signup" exact component={SignUpPage} />
					<Route path="/teacherinfo" exact component={TeacherInfoPage} />
					<Route path="/" exact component={HomePage} />
					<Route component={PageNotFound} />
				</Switch>
				<Footer />
			</main>
		);
	}
}

export default App;
