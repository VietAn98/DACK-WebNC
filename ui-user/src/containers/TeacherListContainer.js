import { connect } from "react-redux";
import TeacherList from "../components/TeacherList/TeacherList";
import {
  getListTeacher,
  getListCity,
  getDistrictByIdCity,
  sortIncreaseByPrice,
  sortDecreaseByPrice,
  sortDecreaseByRateSuccess,
  filterPriceMax,
  filterPriceMin,
  filterPriceMiddle,
  filterByOneStar,
  filterByTwoStar,
  filterByThreeStar,
  filterByFourStar,
  filterByFiveStar,
  getTeacherByDistrict
} from "../actions/userAction";

const mapStateToProps = state => ({
  listTeachers: state.listTeachers,
  listCity: state.listCity,
  districtNames: state.districtNames
});

const mapDispatchToProps = dispatch => ({
  getListTeacher: () => dispatch(getListTeacher()),
  getListCity: () => dispatch(getListCity()),
  getDistrictByIdCity: idCity => dispatch(getDistrictByIdCity(idCity)),
  sortIncreaseByPrice: () => dispatch(sortIncreaseByPrice()),
  sortDecreaseByPrice: () => dispatch(sortDecreaseByPrice()),
  sortDecreaseByRateSuccess: () => dispatch(sortDecreaseByRateSuccess()),
  filterPriceMax: () => dispatch(filterPriceMax()),
  filterPriceMin: () => dispatch(filterPriceMin()),
  filterPriceMiddle: () => dispatch(filterPriceMiddle()),
  filterByOneStar: () => dispatch(filterByOneStar()),
  filterByTwoStar: () => dispatch(filterByTwoStar()),
  filterByThreeStar: () => dispatch(filterByThreeStar()),
  filterByFourStar: () => dispatch(filterByFourStar()),
  filterByFiveStar: () => dispatch(filterByFiveStar()),
  getTeacherByDistrict: (id) => dispatch(getTeacherByDistrict(id)),

});
export default connect(mapStateToProps, mapDispatchToProps)(TeacherList);
