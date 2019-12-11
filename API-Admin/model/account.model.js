var db = require("../utils/connectDB");

module.exports = {
  getListAcc: () => {
    return db.load("select * from account where categoryUser = 0 or categoryUser = 1");
  },

  getListAccTeacher: () => {
    return db.load("select * from account where categoryUser = 1");
  },

  getAccById: (id) => {
    return db.load(`select * from account where userId = ${id}`);
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

  getAddressByUser: idDistrict => {
    return db.load(`SELECT ct.* FROM district as dt  JOIN city as ct  on dt.cityId = ct.cityId WHERE dt.districtId = "${idDistrict}"`);
  } ,

  getDistrictByUser: idDistrict => {
    return db.load(`SELECT dt.* FROM district as dt WHERE dt.districtId = "${idDistrict}"`);
  }, 

  updateState: state => {
    return db.update("account", "userId", state);
  }


};
