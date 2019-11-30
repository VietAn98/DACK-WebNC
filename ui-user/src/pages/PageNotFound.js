import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PageNotFound extends Component {
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
