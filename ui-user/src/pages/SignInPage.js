import React from 'react';
import SignIn from '../containers/SignInContainer';
import HomePage from '../containers/HomePageContainer';

class SignInPage extends React.PureComponent {
  render() {
    return (
      <div>
        {localStorage.token ? <HomePage /> : <SignIn /> }
      </div>
    );
  }
}

export default SignInPage;
