const db = require("../model/skill.model");

module.exports = {
  addSkill: (req, res) => {
    var skill = {
      name: req.body.name
    };
    return db
      .addSkill(skill)
      .then(index => {
        res.status(200).json({ mesage: "Thêm thành công" });
      })
      .catch(err => res.status(400).json(err));
  },

  deleteSkill: (req, res) => {
    const id = req.params.id;
    return db
      .deleteSkill(id)
      .then(result => {
        res.status(200).json({ mesage: "Xóa thành công" });
      })
      .catch(err => res.status(400).json(err));
  },

  updateSkill: (req, res) => {
    
    const newSkill = {
      skillId: req.body.skillId,
      name: req.body.name
    };
    return db
      .updateSkill(newSkill)
      .then(result => {
        res.status(200).json({ mesage: "cập nhật thành công" });
      })
      .catch(err => res.status(400).json(err));
  },

  getAllSkill: (req, res) => {
    return db
      .getSkill()
      .then(resp => {
        res.status(200).json(resp);
      })
      .catch(err => res.status(400).json(err));
  },

  getSkillById: (req, res) => {
    const id = req.params.id
    return db.getSkillById(id).then(resp => {
        console.log(resp);
      res.status(200).json(resp[0]);
    }).catch(err => res.status(400).json(err));
  }
};
