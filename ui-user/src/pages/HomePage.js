import React from 'react';
import Banner from '../components/Banner/Banner';
import FeatureTuitor from '../components/FeatureTuitor/FeatureTuitor';
import AboutUs from '../components/AboutUs/AboutUs';

class HomePage extends React.PureComponent {
  // eslint-disable-next-line react/no-deprecated
  componentWillMount = async () => {
    const { listSixTeacherTop } = this.props;
    await listSixTeacherTop();
  };

  render() {
  const { listTeachers } = this.props;
  console.log('--------------1',listTeachers);
    return (
      <div>
        <Banner style={{ height: '100%' }} />
        {listTeachers ? (
          <FeatureTuitor
            style={{ marginTop: '2rem' }}
            listTeachers={listTeachers}
          />
        ) : null}

        <AboutUs />
      </div>
    );
  }
}

export default HomePage;
