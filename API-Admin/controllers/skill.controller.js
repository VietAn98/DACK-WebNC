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
    const id = req.body.skillId;
    return db
      .deleteSkill_Teacher(id)
      .then(() => {
        db.deleteSkill(id).then(() => {
          res.status(200).json({ mesage: "Xóa thành công" });
        });
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

  getListLimitSkill: (req, res) => {
    var page = req.query.page || 1;
    var limit = 6;
    if (page < 1) page = 1;
    var offset = (page - 1) * limit;
    Promise.all([
      db.getCountSkill(),
      db.getListSkillLimit(limit,offset)
    ]).then(([sumsSkill, limitSkill]) => {
      var numberPages = parseInt(sumsSkill[0].sumT / limit);
      if (sumsSkill[0].sumT % limit > 0) numberPages+=1;
      res.status(200).json({numberPages ,limitSkill, offset,page});
      
    })
  },

  getSkillById: (req, res) => {
    const id = req.params.id;
    return db
      .getSkillById(id)
      .then(resp => {
        res.status(200).json(resp[0]);
      })
      .catch(err => res.status(400).json(err));
  }
};
