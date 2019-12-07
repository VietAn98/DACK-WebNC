var db = require("../utils/connectDB");

module.exports = {
  getListAcc: () => {
    return db.load("select * from account where categoryUser = 0 or categoryUser = 1");
  },

  getListAccTeacher: () => {
    return db.load("select * from account where categoryUser = 1");
  },

  getListAccstudent: () => {
    return db.load("select * from account where categoryUser = 0");
  },

  createAcc: account => {
    return db.add("account", account);
  },

  updateAcc: account => {
    return db.update("account", "userId", account);
  },

  getAccByEmailAdmin: email => {
    return db.load(`select * from account where gmail= '${email}' and categoryUser= '2'`);
  },

  getAccByEmail: email => {
    return db.load(`select * from account where gmail= '${email}'`);
  },

  getAccById: id => {
    return db.load(`select * from account where userId = '${id}' `);
  },


};
