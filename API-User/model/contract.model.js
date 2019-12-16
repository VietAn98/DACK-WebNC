var db = require("../utils/connectDB");

module.exports = {
  getContractByUser: idUser => {
    return db.load(`select * from contract where studentId = "${idUser}"`);
  },

  getAllContract: () => {
    return db.load(`select * from contract`);
  },

  createContract: (contract) => {
    return db.add("contract", contract);
  },

  getListContractAwait: () => {
    return db.load("SELECT * FROM contract WHERE state = 1")
  },

  getListContractVerified: () => {
    return db.load("SELECT * FROM contract WHERE state = 2")
  },

  getListContractComplete: () => {
    return db.load("SELECT * FROM contract WHERE state = 3")
  },

  getListContractDeny: () => {
    return db.load("SELECT * FROM contract WHERE state = 4")
  },

  getListContractAwaitPay: () => {
    return db.load("SELECT * FROM contract WHERE state = 5")
  },

  getListContractReported: () => {
    return db.load("SELECT * FROM contract WHERE state = 6")
  },

  getListContractCancel: () => {
    return db.load("SELECT * FROM contract WHERE state = 7")
  },

  detailContract: (id) => {
    return db.load(`SELECT * FROM contract WHERE idContract = ${id}`)
  },

  getSkillByContract : (id) => {
    return db.load(`SELECT * FROM skill_contract as sc JOIN skill as sk on sc.idSkill = sk.skillId where sc.idContract = ${id}`)
  },

  updateStateContract : (contract) => {
    return db.update("contract", "idContract", contract);
  }
 
};
