const db = require("../model/contract.model");

module.exports = {
  getContractByUser: async (req, res) => {
    let id = req.params.id;
    return await db
      .getContractByUser(id)
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
    let contract = {
      teacherId : req.body.teacherId,
      studentId : req.body.studentId,
      price : req.body.price,
      startDay : req.body.startDay,
      endDay : req.body.endDay,
      isFinish : 0,
    }

    return db.createContract(contract)
    .then(id => {
      console.log('--------------',id);
      res.status(200).json({ status: "200" })})
    .catch(error => res.status(400).send(error));
  }
}