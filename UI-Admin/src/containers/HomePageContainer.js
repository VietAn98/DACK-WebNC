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
  skillsInAllDay,
  getListUser,
  topTeacherInADay,
  topTeacherIn7Day,
  topTeacherIn30Day,
  topTeacherIn90Day,
  topTeacherAll
} from '../actions/statisticsAction';

const mapStateToProps = (state) => ({
  dayRevenue: state.dayRevenue,
  monthRevenue: state.monthRevenue,
  yearRevenue: state.yearRevenue,
  skillsADay: state.skillsADay,
  skills7Days: state.skills7Days,
  skills30Days: state.skills30Days,
  skills90Days: state.skills90Days,
  skillsAllDays: state.skillsAllDays,

  topTeacherADay: state.topTeacherADay,
  topTeacher7Days: state.topTeacher7Days,
  topTeacher30Days: state.topTeacher30Days,
  topTeacher90Days: state.topTeacher90Days,
  topTeachersAll: state.topTeachersAll,

  sumUser: state.sumUser
});

const mapDispatchToProps = (dispatch) => ({
  revenueByDay: () => dispatch(revenueByDay()),
  revenueByMonth: () => dispatch(revenueByMonth()),
  revenueByYear: () => dispatch(revenueByYear()),

  skillsInADay: () => dispatch(skillsInADay()),
  skillsIn7Day: () => dispatch(skillsIn7Day()),
  skillsIn30Day: () => dispatch(skillsIn30Day()),
  skillsIn90Day: () => dispatch(skillsIn90Day()),
  skillsInAllDay: () => dispatch(skillsInAllDay()),

  topTeacherInADay: () => dispatch(topTeacherInADay()),
  topTeacherIn7Day: () => dispatch(topTeacherIn7Day()),
  topTeacherIn30Day: () => dispatch(topTeacherIn30Day()),
  topTeacherIn90Day: () => dispatch(topTeacherIn90Day()),
  topTeacherAll: () => dispatch(topTeacherAll()),

  getListUser: () => dispatch(getListUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
