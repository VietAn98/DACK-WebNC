import React from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>This is 404</h1>
        <Link to="/">Go back to Home Page</Link>
      </div>
    );
  }
}

export default PageNotFound;
