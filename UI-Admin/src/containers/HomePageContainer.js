import { connect } from 'react-redux';
import HomePage from '../components/HomePage/HomePage';
import {
  revenueByDay,
  revenueByMonth,
  revenueByYear,
  skillsInADay,
  skillsIn7Day,
  skillsIn30Day,
  skillsIn90Day,
  skillsInAllDay
} from '../actions/statisticsAction';

const mapStateToProps = (state) => ({
  dayRevenue: state.dayRevenue,
  monthRevenue: state.monthRevenue,
  yearRevenue: state.yearRevenue,
  skillsADay: state.skillsADay,
  skills7Days: state.skills7Days,
  skills30Days: state.skills30Days,
  skills90Days: state.skills90Days,
  skillsAllDays: state.skillsAllDays
});

const mapDispatchToProps = (dispatch) => ({
  revenueByDay: () => dispatch(revenueByDay()),
  revenueByMonth: () => dispatch(revenueByMonth()),
  revenueByYear: () => dispatch(revenueByYear()),
  skillsInADay: () => dispatch(skillsInADay()),
  skillsIn7Day: () => dispatch(skillsIn7Day()),
  skillsIn30Day: () => dispatch(skillsIn30Day()),
  skillsIn90Day: () => dispatch(skillsIn90Day()),
  skillsInAllDay: () => dispatch(skillsInAllDay())

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
