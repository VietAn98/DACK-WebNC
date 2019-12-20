var db = require("../utils/connectDB");

module.exports = {
  getContractByUser: (idUser,limit,offset) => {
    return db.load(`SELECT * FROM 
    (SELECT new2.*, st.name as Status from (select new.*, acc2.name as TeacherName from 
      (select ct.*, acc.name as StudentName from contract as ct JOIN account as acc on ct.studentId = acc.userId) 
      as new JOIN account as acc2 ON new.teacherId = acc2.userId) as new2 JOIN state_contract as st on st.id = new2.state) 
      as bb WHERE bb.studentId="${idUser}" LIMIT ${limit} OFFSET ${offset}`);
  },

  getCountUserLimit: idUser => {
    return db.load(`SELECT COUNT(*) as sumT FROM (SELECT * FROM 
      (SELECT new2.*, st.name as Status from (select new.*, acc2.name as TeacherName from 
        (select ct.*, acc.name as StudentName from contract as ct JOIN account as acc on ct.studentId = acc.userId) 
        as new JOIN account as acc2 ON new.teacherId = acc2.userId) as new2 JOIN state_contract as st on st.id = new2.state) 
        as bb WHERE bb.studentId="${idUser}") as tb`)
  },  


  getContractByTeacher:  (idUser,limit,offset) => {
    return db.load(`SELECT * FROM 
    (SELECT new2.*, st.name as Status from (select new.*, acc2.name as TeacherName from 
      (select ct.*, acc.name as StudentName from contract as ct JOIN account as acc on ct.studentId = acc.userId) 
      as new JOIN account as acc2 ON new.teacherId = acc2.userId) as new2 JOIN state_contract as st on st.id = new2.state) 
      as bb WHERE bb.teacherId="${idUser}" LIMIT ${limit} OFFSET ${offset}`);
  },

  getCountTeacherLimit: idUser => {
    return db.load(`SELECT COUNT(*) as sumT FROM (SELECT * FROM 
      (SELECT new2.*, st.name as Status from (select new.*, acc2.name as TeacherName from 
        (select ct.*, acc.name as StudentName from contract as ct JOIN account as acc on ct.studentId = acc.userId) 
        as new JOIN account as acc2 ON new.teacherId = acc2.userId) as new2 JOIN state_contract as st on st.id = new2.state) 
        as bb WHERE bb.teacherId="${idUser}") as tb`)
  },  

  getAllContract: () => {
    return db.load(`SELECT new2.*, st.name as Status from 
    (select new.*, acc2.name as TeacherName from 
      (select ct.*, acc.name as StudentName from contract as ct JOIN account as acc on ct.studentId = acc.userId) as new 
      JOIN account as acc2 ON new.teacherId = acc2.userId) as new2 JOIN state_contract as st on st.id = new2.state`);
  },

  createContract: (contract) => {
    return db.add("contract", contract);
  },

  filterListContractStudent: (idUser, idState) => {
    return db.load(`SELECT * FROM 
    (SELECT new2.*, st.name as Status from (select new.*, acc2.name as TeacherName from 
      (select ct.*, acc.name as StudentName from contract as ct JOIN account as acc on ct.studentId = acc.userId) 
      as new JOIN account as acc2 ON new.teacherId = acc2.userId) as new2 JOIN state_contract as st on st.id = new2.state) 
      as bb WHERE bb.studentId="${idUser}" AND bb.state="${idState}"`)
  },

  filterListContractTeacher: (idUser, idState) => {
    return db.load(`SELECT * FROM 
    (SELECT new2.*, st.name as Status from (select new.*, acc2.name as TeacherName from 
      (select ct.*, acc.name as StudentName from contract as ct JOIN account as acc on ct.studentId = acc.userId) 
      as new JOIN account as acc2 ON new.teacherId = acc2.userId) as new2 JOIN state_contract as st on st.id = new2.state) 
      as bb WHERE bb.teacherId="${idUser}" AND bb.state="${idState}"`)
  },

  detailContract: (id) => {
    return db.load(`SELECT * FROM contract WHERE idContract = ${id}`)
  },

  getSkillByContract: (id) => {
    return db.load(`SELECT * FROM skill_contract as sc JOIN skill as sk on sc.idSkill = sk.skillId where sc.idContract = ${id}`)
  },

  updateStateContract: (contract) => {
    return db.update("contract", "idContract", contract);
  }

};
