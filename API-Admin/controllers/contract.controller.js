const db = require("../model/contract.model");
const db_account = require("../model/account.model");
module.exports = {
  getListLimitContract: (req, res) => {
    var page = req.query.page || 1;
    var limit = 6;
    if (page < 1) page = 1;
    var offset = (page - 1) * limit;
    Promise.all([
      db.getCountContract(),
      db.getListLimitContract(limit, offset)
    ]).then(([sumContract, limitContract]) => {
      var numberPages = parseInt(sumContract[0].sumT / limit);
      if (sumContract[0].sumT % limit > 0) numberPages += 1;
      res.status(200).json({ numberPages, limitContract, offset, page });
    });
  },

  getListStateContract: (req, res) => {
    return db
      .getListState()
      .then(resp => {
        res.status(200).json(resp);
      })
      .catch(err => res.status(400).json(err));
  },

  getLimitContractByState: (req, res) => {
    var id = req.params.id;
    var page = req.query.page || 1;
    var limit = 6;
    if (page < 1) page = 1;
    var offset = (page - 1) * limit;
    Promise.all([
      db.getCountContractByState(id),
      db.getListLimitContractByState(id,limit, offset)
    ]).then(([sumContract, limitContract]) => {
      var numberPages = parseInt(sumContract[0].sumT / limit);
      if (sumContract[0].sumT % limit > 0) numberPages += 1;
      res.status(200).json({ numberPages, limitContract, offset, page });
    });
  },

  getDetailContract: (req, res) => {
    var id = req.params.id;
    
    Promise.resolve(db.getDetailContract(id)).then(contract => {
      Promise.all([
        db_account.getAccById(contract[0].teacherId),
        db_account.getAccById(contract[0].studentId),
        db.getListSkillByTeacher(contract[0].teacherId),
      ]).then(([teacher, student, skills]) => {
        res.status(200).json({contract,teacher,student, skills})
      })
    }).catch((e) => {
      
    })
    
  },

  updateContract:  (req, res) => {
    const contract = {
      idContract : req.body.id,
      state: req.body.state
    }
    return db
      .updateStateContract(contract)
      .then(result => {
        res.status(200).json({ mesage: "cập nhật thành công" });
      })
      .catch(err => res.status(400).json(err));
    
  }
};
