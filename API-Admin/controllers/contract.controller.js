const moment = require('moment');
const db = require("../model/contract.model");
const db_account = require("../model/account.model");
const db_complaint = require("../model/complaint.model");
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
      db.getListLimitContractByState(id, limit, offset)
    ]).then(([sumContract, limitContract]) => {
      var numberPages = parseInt(sumContract[0].sumT / limit);
      if (sumContract[0].sumT % limit > 0) numberPages += 1;
      res.status(200).json({ numberPages, limitContract, offset, page });
    });
  },

  getDetailContract: (req, res) => {
    var id = req.params.id;

    Promise.resolve(db.getDetailContract(id))
      .then(contract => {
        Promise.all([
          db_account.getAccById(contract[0].teacherId),
          db_account.getAccById(contract[0].studentId),
          db.getListSkillByTeacher(contract[0].teacherId)
        ]).then(([teacher, student, skills]) => {
          res.status(200).json({ contract, teacher, student, skills });
        });
      })
      .catch(e => { });
  },

  updateContract: (req, res) => {
    console.log(req.body.id)
    db_complaint.getComplaintByContract(req.body.id).then(compl => {
      const contract = {
        idContract: req.body.id,
        state: req.body.state
      };

      const complaint = {
        id: compl[0].id,
        isDone: 1
      };
      Promise.all(
        db.updateStateContract(contract),
        db_complaint.updateComplaint(complaint)
      );
      res.status(200).json({ mesage: "cập nhật thành công" });
    });
  },

  revenueByDate: async (req, res) => {
    const arr = [];
    for (let i = 6; i >= 0; i -= 1) {
      const nowDate = new Date();
      const tempDate = nowDate.setDate(nowDate.getDate() - i);
      const resultDate = moment(tempDate).format('DD-MM-YYYY');
      await db.revenueByDate(resultDate).then((resp) => {
        if (resp[0].sumPrice === null) {
          const temp = {
            "sumPrice": 0,
            "endDay": resultDate
          }
          console.log(temp);
          arr.push(temp);
        }
        else {
          arr.push(resp[0]);
        }
      })
    }
    res.status(200).json(arr);

  },

  revenueByMonth: async (req, res) => {
    const arr = [];
    const nowDate = moment().format();
    const resultYear = moment(nowDate).year();
    await db.revenueByMonth(resultYear).then(resp => {
      for (let i = 1; i <= 12; i += 1) {
        if (!db.isCheck(i, resp)) {
          const temp = {
            "sum": 0,
            "month": i,
          }
          arr.push(temp);
        }
        else {
          const temp = db.isCheck(i, resp);
          temp.month = parseInt(temp.month)
          arr.push(temp);
        }
      }
    })
    res.status(200).json(arr);

  },

  revenueByYear: async (req, res) => {
    const nowDate = moment().format();
    const currentYear = moment(nowDate).year();
    const arrYear = [];
    for (let i = 6; i >= 0; i -= 1) {
      await db.revenueByYear(currentYear - i).then(resp => {
        console.log(resp);
        if (resp.length === 0) {
          const yearTemp = {
            "sumPrice": 0,
            "year": currentYear - i,
            "numberContract": 0
          }
          arrYear.push(yearTemp)
        }
        else {
          arrYear.push(resp[0])
        }
      })
    }
    res.status(200).json(arrYear);

  },

  topTenInOneDay: async (req, res) => {
    const nowDate = new Date();
    const date = req.query.date || moment(nowDate).format('DD-MM-YYYY');
    console.log(date);
    db.topTenInOneDay(date).then(resp => {
      res.status(200).json(resp);
    }).catch((err) => { res.status(400).json(err) })

  },

  topTenIn7Days: async (req, res) => {
    const nowDate = new Date();
    const tempDate = nowDate.setDate(nowDate.getDate() - 7);
    const SubDate = moment(tempDate).format('YYYY-MM-DD');
    console.log(SubDate);
    db.topTenInXXXDay(SubDate).then((resp) => {
      res.status(200).json(resp);
    }).catch((err) => { res.status(400).json(err) })
  },


  topTenIn30Days: async (req, res) => {
    // const date = req.params.date;
    // const date = req.query.date || moment(nowDate).format('DD-MM-YYYY');

    const nowDate = new Date();
    const tempDate = nowDate.setDate(nowDate.getDate() - 30);
    const SubDate = moment(tempDate).format('YYYY-MM-DD');
    console.log(SubDate);
    db.topTenInXXXDay(SubDate).then((resp) => {
      res.status(200).json(resp);
    }).catch((err) => { res.status(400).json(err) })

  },

  topTenIn90Days: async (req, res) => {
    const nowDate = new Date();
    const tempDate = nowDate.setDate(nowDate.getDate() - 90);
    const SubDate = moment(tempDate).format('YYYY-MM-DD');
    console.log(SubDate);
    db.topTenInXXXDay(SubDate).then((resp) => {
      res.status(200).json(resp);
    }).catch((err) => { res.status(400).json(err) })
  },

  topTenInAllDay: async (req, res) => {
    db.topTenInAllDay().then((resp) => {
      res.status(200).json(resp);
    }).catch((err) => { res.status(400).json(err) })
  },

  topSkillInonelDay: async (req, res) => {
    const nowDate = new Date();
    //const tempDate = nowDate.setDate(nowDate.getDate() - 0);
    const SubDate = moment(nowDate).format('YYYY-MM-DD');
    console.log(SubDate);
    db.topSkillInOneDay(SubDate).then((resp) => {
      res.status(200).json(resp);
    }).catch((err) => { res.status(400).json(err) })

  },
  topSkillIn7Days: async (req, res) => {
    const nowDate = new Date();
    const tempDate = nowDate.setDate(nowDate.getDate() - 7);
    const SubDate = moment(tempDate).format('YYYY-MM-DD');
    console.log(SubDate);
    db.topSkillInXXXDay(SubDate).then((resp) => {
      res.status(200).json(resp);
    }).catch((err) => { res.status(400).json(err) })

  },
  topSkillIn30Days: async (req, res) => {
    const nowDate = new Date();
    const tempDate = nowDate.setDate(nowDate.getDate() - 30);
    const SubDate = moment(tempDate).format('YYYY-MM-DD');
    console.log(SubDate);
    db.topSkillInXXXDay(SubDate).then((resp) => {
      res.status(200).json(resp);
    }).catch((err) => { res.status(400).json(err) })

  },
  topSkillIn90Days: async (req, res) => {
    const nowDate = new Date();
    const tempDate = nowDate.setDate(nowDate.getDate() - 90);
    const SubDate = moment(tempDate).format('YYYY-MM-DD');
    console.log(SubDate);
    db.topSkillInXXXDay(SubDate).then((resp) => {
      res.status(200).json(resp);
    }).catch((err) => { res.status(400).json(err) })

  },
  topSkillInAllDays: async (req, res) => {
    db.topSkillInAllDay().then((resp) => {
      res.status(200).json(resp);
    }).catch((err) => { res.status(400).json(err) })
  }

};
