var db = require("../utils/connectDB");

module.exports = {
  getListAcc: () => {
    return db.load("select * from account where adLock = 1");
  },

  createAcc: account => {
    return db.add("account", account);
  },

  updateAcc: account => {
    return db.update("account", "userId", account);
  },

  getAccByEmailRegister: email => {
    return db.load(`select * from account where gmail= '${email}' and categoryUser != '2' and state= '1'`);
  },

  getAccByEmail: email => {
    return db.load(`select * from account where gmail= '${email}' and adLock = '1'`);
  },

  getAccById: id => {
    return db.load(`select * from account where userId = '${id}' and  adLock=1 `);
  },

  getListTeaching: () => {
    return db.load(`select * from account where categoryUser = 1 and adLock=1`);
  },

  getDetailTeacher: id => {
    return db.load(`select * from account where userId = '${id}' and adLock=1`);
  },

  getListSkill: ()=> {
    return db.load('select * from skill');
  },

  //
  getTopTeacher: () => {
    return db.load('select * from account ORDER BY userId DESC LIMIT 6 where categoryUser=1');
  },

  getTeacherByPrice: (min,max) => {
    return null;
  },

  getTeacherIncreaseByRateSuccess:()=>{
    return {};
  },

  getTeacherDecreaseByRateSuccess:()=>{
    return {};
  }

};
