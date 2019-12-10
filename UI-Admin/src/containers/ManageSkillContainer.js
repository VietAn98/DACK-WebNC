import { connect } from "react-redux";
import ListSkill from "../components/manageSkill/listSkillCompont";
import {
  getListSkill,
  deleteSingleSkill,
  updateSkill,
  addSkill
} from "../actions/skillAction";

const mapStateToProps = state => ({
  listSkill: state.skills
});

const mapDispatchToProps = dispatch => ({
  getListSkill: () => dispatch(getListSkill()),
  deleteSingleSkill: skillId => dispatch(deleteSingleSkill(skillId)),
  updateSkill: (skillId, name) => dispatch(updateSkill(skillId, name)),
  addSkill: name => dispatch(addSkill(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListSkill);
