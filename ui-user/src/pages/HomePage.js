import React from 'react';
import Banner from '../components/Banner/Banner';
import FeatureTuitor from '../components/FeatureTuitor/FeatureTuitor';
import AboutUs from '../components/AboutUs/AboutUs';

class HomePage extends React.PureComponent {
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
