var db = require("../utils/connectDB");

module.exports = {
  getListAcc: () => {
    return db.load("select * from account where categoryUser = 0 or categoryUser = 1");
  },

  getListAccTeacher: () => {
    return db.load("select * from account where categoryUser = 1");
  },

  getCountTeacher: () => {
    return db.load("select COUNT(*) as sumT from account where categoryUser = 1");
  },

  getListAccTeacherLimit: (limit,offset) => {
    return db.load(`select * from account where categoryUser = 1 LIMIT ${limit} OFFSET ${offset}`);
  },

  getCountStudent: () => {
    return db.load("select COUNT(*) as sumT from account where categoryUser = 0");
  },

  getListAccStudentLimit: (limit,offset) => {
    return db.load(`select * from account where categoryUser = 0 LIMIT ${limit} OFFSET ${offset}`);
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
    return db.load(`SELECT tm.*, ct.name as nameCity FROM (select ac.*, dt.name as nameDistrict, dt.cityId from account as ac JOIN district as dt on ac.districtId = dt.districtId where userId = ${id}) as tm JOIN city as ct ON tm.cityId = ct.cityId `);
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
