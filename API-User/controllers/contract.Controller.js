const db = require("../model/contract.model");
const dbSkill_teacher = require("../model/skill_teacher.model");

module.exports = {
  getContractByUser: (req, res) => {
    let id = req.params.id;
    var page = req.query.page || 1;
    var limit = 5;
    if (page < 1) page = 1;
    var offset = (page - 1) * limit;
    Promise.all([
      db.getCountUserLimit(id),
      db.getContractByUser(id ,limit, offset)
    ]).then(([sumHistory, limitHistory]) => {
      var numberPages = parseInt(sumHistory[0].sumT / limit);
      if (sumHistory[0].sumT % limit > 0) numberPages += 1;
      res.status(200).json({ numberPages, limitHistory, offset, page });
    });
  },

  // getContractByUser: async (req, res) => {
  //   let id = req.params.id;
  //   return await db
  //     .getContractByUser(id)
  //     .then(contract => {
  //       if (contract.length > 0) {
  //         res.status(200).json(contract);
  //       } else {
  //         res.status(400).json({ message: "Hợp đồng không tồn tại" });
  //       }
  //     })
  //     .catch(err =>
  //       res.status(400).json({ message: "Hợp đồng không tồn tại", error: err })
  //     );
  // },

  getContractByTeacher: async (req, res) => {
    let id = req.params.id;
    var page = req.query.page || 1;
    var limit = 5;
    if (page < 1) page = 1;
    var offset = (page - 1) * limit;
    Promise.all([
      db.getCountTeacherLimit(id),
      db.getContractByTeacher(id ,limit, offset)
    ]).then(([sumHistory, limitHistory]) => {
      var numberPages = parseInt(sumHistory[0].sumT / limit);
      if (sumHistory[0].sumT % limit > 0) numberPages += 1;
      res.status(200).json({ numberPages, limitHistory, offset, page });
    });
  },


  getAllContract: (req, res) => {
    return db
    .getAllContract()
    .then(contract => {
      if (contract.length > 0) {
        res.status(200).json(contract);
      } else {
        res.status(400).json({ message: "Hợp đồng không tồn tại" });
      }
    })
    .catch(err =>
      res.status(400).json({ message: "Hợp đồng không tồn tại", error: err })
    );
  },

  createContract: (req, res) => {
    console.log(req.body);
    let skills = req.body.skill;
    var listSkill = skills.toString().split(",");
    let contract = {
      teacherId: req.body.teacherId,
      studentId: req.body.studentId,
      price: req.body.price,
      startDay: req.body.startDay,
      endDay: req.body.endDay,
      dateCreate: req.body.dateCreate,
      numberDay: req.body.numberDay,
      numberHour: req.body.numberHour,
      state: 1
    };

    return db
      .createContract(contract)
      .then(id => {
        listSkill.forEach(element => {
          let skill_Contract = {
            idContract: id,
            idSkill: element
          };
          dbSkill_teacher.updateSkillContract(skill_Contract);
        });
      })
      .then(id => {
        res.status(200).json({ status: "200" });
      })
      .catch(error => res.status(400).send(error));
  },

  filterListContractStudent: async (req, res) => {
    const idUser = req.params.idUser;
    const idState = req.query.idState;
    return await db
      .filterListContractStudent(idUser, idState)
      .then(contract => {
        if (contract.length > 0) {
          res.status(200).json(contract);
        } else {
          res.status(400).json({ message: "Hợp đồng không tồn tại" });
        }
      })
      .catch(err =>
        res.status(400).json({ message: "Hợp đồng không tồn tại", error: err })
      );
  },

  filterListContractTeacher: async (req, res) => {
    const idUser = req.params.idUser;
    const idState = req.query.idState;
    return await db
      .filterListContractTeacher(idUser,idState)
      .then(contract => {
        if (contract.length > 0) {
          res.status(200).json(contract);
        } else {
          res.status(400).json({ message: "Hợp đồng không tồn tại" });
        }
      })
      .catch(err =>
        res.status(400).json({ message: "Hợp đồng không tồn tại", error: err })
      );
  },

  detailContract: (req, res) => {
    let id = req.params.id;
    return Promise.all([db.detailContract(id), db.getSkillByContract(id)])
      .then(([detailContract, skills]) => {
        if (detailContract.length > 0) {
          console.log("----", detailContract);
          console.log("++++",skills);
          res.status(200).json({detailContract,skills});
        } else {
          res.status(400).json({ message: "Hợp đồng không tồn tại" });
        }
      })
      .catch(err =>
        res.status(400).json({ message: "Hợp đồng không tồn tại", error: err })
      );
  },

  updateStateContract: (req, res) => {
    let id = req.params.id;
    const state = {
      idContract: id,
      state: req.body.state,
    }
    db.updateStateContract(state).then(id => {
      // trùng state thì k được
      if(id === 1){
        res.status(200).json({message: 'Cập nhật trạng thái thành công'});
      }
      else {
        res.status(400).json({message: 'Cập nhật trạng thái thất bại'});
      }
    })
  }
};
