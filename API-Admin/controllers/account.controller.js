const db = require("../model/account.model");

module.exports = {
  getListAccountTeacher: (req, res) => {
    return db
      .getListAcc()
      .then(list => {
        res.status(200).json(list);
      })
      .catch(err => res.status(400).json({ message: "thất bại", err: err }));
  },

  getDetailAccount: (req, res) => {
    const id = req.params.id;
    return db
      .getAccById(id)
      .then(resp => {
        res.status(200).json(resp[0]);
      })
      .catch(err => res.status(400).json({ message: "thất bại", err: err }));
  },
  getListAccountStudent: (req, res) => {
    return db
      .getListAccstudent()
      .then(list => {
        res.status(200).json(list);
      })
      .catch(err => res.status(400).json({ message: "thất bại", err: err }));
  },

  getAddressByUser: (req, res) => {
    const id = req.params.idDistrict;
    return db
      .getAddressByUser(id)
      .then(result => {
        res.status(200).json(result[0]);
      })
      .catch(err => res.status(400).json({ message: "thất bại", err: err }));
  },

  getDistrictByUser: (req, res) => {
    const id = req.params.idDistrict;
    return db
      .getDistrictByUser(id)
      .then(result => {
        res.status(200).json(result[0]);
      })
      .catch(err => res.status(400).json({ message: "thất bại", err: err }));
  },

  updateStateAccount: (req, res) => {
      const newState = {
        userId: req.body.userId,
        adLock: req.body.adLock
      };
      console.log(newState);
      return db
        .updateState(newState)
        .then(result => {
          res.status(200).json({ mesage: "cập nhật thành công" });
        })
        .catch(err => res.status(400).json(err));
    
  }
};
