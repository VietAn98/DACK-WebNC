var db = require("../utils/connectDB");

module.exports = {
  getSkill: () => {
    return db.load("select * from skill");
  },

  getSkillById: id => {
    return db.load(`select * from skill where skillId = "${id}" `);
  },

  addSkill: entity => {
    return db.add("skill", entity);
  },

  deleteSkill: id => {
    return db.delete("skill", "skillId", id);
  },

  deleteSkill_Teacher: id => {
    return db.delete("skill_teacher", "skillId", id);
  },

  updateSkill: skill => {
    return db.update("skill", "skillId", skill);
  }
};
