import React from 'react';
import Banner from '../components/Banner/Banner';
import FeatureTuitor from '../components/FeatureTuitor/FeatureTuitor';
import AboutUs from '../components/AboutUs/AboutUs';

class HomePage extends React.PureComponent {
	// eslint-disable-next-line react/no-deprecated
	componentWillMount = () => {
		const { getListTeacher } = this.props;
		getListTeacher();
	}

	render() {
		const { listTeachers } = this.props;
		return (
			<div>
				<Banner style={{ height: '100%' }} />
				<FeatureTuitor
					style={{ marginTop: '2rem' }}
					listTeachers={listTeachers}
				/>
				<AboutUs />
			</div>
		);
	}
}

export default HomePage;
