var db = require("../utils/connectDB");

module.exports = {
  getListLimitContract: (limit,offset) => {
    return db.load(`SELECT new2.*, st.name as Status from 
    (select new.*, acc2.name as TeacherName from 
      (select ct.*, acc.name as StudentName from contract as ct JOIN account as acc on ct.studentId = acc.userId) as new 
      JOIN account as acc2 ON new.teacherId = acc2.userId) as new2 JOIN state_contract as st on st.id = new2.state LIMIT ${limit} OFFSET ${offset}`);
  },

  getCountContract: () => {
    return db.load("select COUNT(*) as sumT from contract");
  },

  getListState: () => {
      return db.load('select * from state_contract');
  },

  getCountContractByState: (id) => {
    return db.load(`select COUNT(*) as sumT from contract where state = ${id}`);
  },

  getDetailContract:(id) => {
    return db.load(`select * from contract where idContract = ${id}`);
  },

  getListLimitContractByState: (id,limit,offset) => {
    return db.load(`SELECT new2.*, st.name as Status from (select new.*, acc2.name as TeacherName from (select ct.*, acc.name as StudentName from contract as ct JOIN account as acc on ct.studentId = acc.userId where ct.state = ${id}) as new JOIN account as acc2 ON new.teacherId = acc2.userId) as new2 JOIN state_contract as st on st.id = new2.state LIMIT ${limit} OFFSET ${offset}`);
  },

  getListSkillByTeacher: (id) => {
    return db.load(`SELECT * FROM skill_teacher as sc JOIN skill as sk on sc.skillId = sk.skillId WHERE sc.userId = ${id}`)
  },

  updateStateContract: contract => {
    return db.update("contract", "idContract", contract);
  }

}