import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import firebase from 'firebase';
import Header from './containers/HeaderContainer';
import HomePage from './containers/HomePageContainer';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Footer from './components/Footer/Footer';
import PageNotFound from './pages/PageNotFound';
import Settings from './pages/Settings';
import TeacherInfoPage from './containers/TeacherInforContainer';
import TeacherList from './containers/TeacherListContainer';
import NewPassword from './containers/NewPasswordContainer';
import Contract from './containers/ContractContainer';
import Chat from './components/message';
import Statistics from './containers/StatisticsContainer';


export class App extends React.PureComponent {
	render() {
		// localStorage.clear();
		return (
			<main>
				<Header />
				<Switch>
					<Route path="/statistics" exact component={Statistics} />
					<Route path="/chat" exact component={Chat} />
					<Route path="/contract-:id" exact component={Contract('ReadOnlyContract')} />
					<Route path="/contract/teacher-:id" exact component={Contract('Contract')} />
					<Route path="/teacherslist" exact component={TeacherList} />
					<Route path="/settings" exact component={Settings} />
					<Route path="/signin" exact component={SignInPage} />
					<Route path="/signup" exact component={SignUpPage} />
					<Route path="/teacher-info/:id" exact component={TeacherInfoPage} />
					<Route path="/update-new-password/" exact component={NewPassword} />
					<Route path="/" exact component={HomePage} />
					{/* <Route path="/test" exact component={Test} /> */}
					<Route component={PageNotFound} />
				</Switch>
				<Footer />
			</main>
		);
	}
}

export default App;
