import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminSignIn from "./containers/SignInContainer";
import CreateAccountContainer from "./containers/CreateAccountContainer";
import PageNotFound from "./components/PageNotFound"
import "./App.css";

export class App extends React.PureComponent {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/admin/login" exact component={AdminSignIn} />
          <Route path="/admin/create-admin" exact component={CreateAccountContainer} />
          <Route component={PageNotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;
