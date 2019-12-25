import React from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="page-error" />
        <div className="text-center">
          <Link to="/" style={{ color: 'orange', fontWeight: 700, fontSize: '20px' }}>Go back to Home Page</Link>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
