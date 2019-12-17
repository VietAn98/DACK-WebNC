import { connect } from 'react-redux';
import ListSkill from '../components/manageSkill/listSkillCompont';
import {
  getListSkill,
  deleteSingleSkill,
  updateSkill,
  addSkill,
  getLimitSkills
} from '../actions/skillAction';

const mapStateToProps = (state) => ({
  listSkill: state.skills
});

const mapDispatchToProps = (dispatch) => ({
  getListSkill: () => dispatch(getListSkill()),
  getLimitSkills: (page) =>  dispatch(getLimitSkills(page)),
  deleteSingleSkill: (skillId) => dispatch(deleteSingleSkill(skillId)),
  updateSkill: (skillId, name) => dispatch(updateSkill(skillId, name)),
  addSkill: (name) => dispatch(addSkill(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListSkill);
