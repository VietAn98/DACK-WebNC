import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminSignIn from './containers/SignInContainer';
import HomePage from './containers/HomePageContainer';
import SideBarMenu from './components/sidebar-menu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CreateAccountContainer from './containers/CreateAccountContainer';
import Student from './containers/ManageStudentContainer';
import Teacher from './containers/ManageTeacherContainer';
import DetailsUser from './containers/DetailUserContainer';
import ListSkill from './containers/ManageSkillContainer';
import PageNotFound from './components/PageNotFound';
import listContract from './containers/ContractContainer';
import DetailContract from './containers/detailContractContainer';
import ChangePassword from './containers/changePasswContainer';


import './App.css';

export class App extends React.PureComponent {
  render() {
    const { token } = localStorage;
    return (
      <div>
        {token ? (
          <div className="page-container">
            <div className="left-content">
              <div className="mother-grid-inner">
                <Header />
                <div>
                  <Switch>
                    {/* <Route path="/settings" exact component={Settings} />
                <Route path="/signin" exact component={SignInPage} />
                <Route path="/signup" exact component={SignUpPage} /> */}
                    <Route path="/manage-student-teacher/detail/:id">
                      <DetailsUser />
                    </Route>
                    <Route path="/manage-student" exact component={Student} />
                    <Route path="/manage-teacher" exact component={Teacher} />
                    <Route path="/manage-admin" exact component={CreateAccountContainer} />
                    <Route path="/manage-skills" exact component={ListSkill} />
                    <Route path="/manage-contract" exact component={listContract} />
                    <Route path="/change-password" exact component={ChangePassword} />
                    <Route path="/manage-detail-contract/:id">
                      <DetailContract />
                    </Route>
                    <Route path="/" exact component={HomePage} />
                    <Route component={PageNotFound} />
                  </Switch>
                  {/* <HomePage /> */}
                </div>
                <Footer />
              </div>
            </div>
            <SideBarMenu />
          </div>
        ) : (
            <AdminSignIn />
          )}
      </div>
    );
  }
}

export default App;
