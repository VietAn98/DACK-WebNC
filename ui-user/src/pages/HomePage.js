import React, { Component } from 'react';
import Banner from '../components/Banner/Banner.js';
import FeatureTuitor from '../components/FeatureTuitor/FeatureTuitor.js';
import AboutUs from '../components/AboutUs/AboutUs.js';

export class HomePage extends Component {
	render() {
		return (
			<div>
				<Banner style={{ height: '100%' }} />
				<FeatureTuitor style={{ marginTop: '2rem' }} />
				<AboutUs />
			</div>
		);
	}
}

export default HomePage;
