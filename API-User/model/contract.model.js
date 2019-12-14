var db = require("../utils/connectDB");

module.exports = {
  getContractByUser: idUser => {
    return db.load(`select * from contract where studentId = "${idUser}"`);
  },

  createContract: (contract) => {
    return db.add("contract", contract);
  }
};
