var db = require("../utils/connectDB");

module.exports = {
  isCheck : (i, arrays) => {
    for(let j = 0; j < arrays.length; j +=1){
      const a = parseInt(arrays[j].month);
      if (i ===  a) {
        // check = true
        return arrays[j];
      }
    }
    return false;
  },

  getListLimitContract: (limit, offset) => {
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

  getDetailContract: (id) => {
    return db.load(`select * from contract where idContract = ${id}`);
  },

  getListLimitContractByState: (id, limit, offset) => {
    return db.load(`SELECT new2.*, st.name as Status from (select new.*, acc2.name as TeacherName from (select ct.*, acc.name as StudentName from contract as ct JOIN account as acc on ct.studentId = acc.userId where ct.state = ${id}) as new JOIN account as acc2 ON new.teacherId = acc2.userId) as new2 JOIN state_contract as st on st.id = new2.state LIMIT ${limit} OFFSET ${offset}`);
  },

  getListSkillByTeacher: (id) => {
    return db.load(`SELECT * FROM skill_teacher as sc JOIN skill as sk on sc.skillId = sk.skillId WHERE sc.userId = ${id}`)
  },

  updateStateContract: contract => {
    return db.update("contract", "idContract", contract);
  },

  revenueByDate: (date) => {
    return db.load(`SELECT SUM(price) as sumPrice, endDay FROM contract as ct WHERE endDay = '${date}' and state = 3`)
  },

  revenueByMonth: (year) => {
    return db.load(`SELECT SUM(price) as sum,
    SUBSTRING(endDay, 4, 2) as month FROM contract WHERE state = 3 AND SUBSTRING(endDay, 7, 4) = ${year} 
    GROUP BY SUBSTRING(endDay, 4, 2) ORDER BY month ASC`)
  },

  revenueByYear: (year) => {
    return db.load(`SELECT COUNT(*) as numberContract, SUM(price) as sumPrice, SUBSTRING(endDay, 7, 4) as year FROM contract WHERE state = 3 AND SUBSTRING(endDay, 7, 4) = ${year} GROUP by SUBSTRING(endDay, 7, 4)`)
  },

  topTenInAllDay: () => {
    return db.load(`SELECT tb1.*, ac.name FROM (SELECT DISTINCT teacherId, SUM(price) as price FROM contract WHERE state = 3 GROUP by teacherId LIMIT 5) as tb1 JOIN account as ac on tb1.teacherId = ac.userId order by price DESC`)
  },

  topTenInOneDay: (date) => {
    return db.load(`SELECT temp.*, ac.name FROM (SELECT DISTINCT teacherId, SUM(price) as price FROM contract WHERE state = 3 and endDay = '${date}' GROUP by teacherId LIMIT 5)
    as temp JOIN account as ac on temp.teacherId = ac.userId order by price DESC`)
  },

  topTenInXXXDay: (date) => {
    return db.load(`SELECT tb3.*, ct.name FROM(SELECT DISTINCT tb2.teacherId, SUM(price) as price FROM (SELECT * FROM (SELECT *, STR_TO_DATE(endDay,'%d-%m-%Y') as matDate FROM contract) as tb1 where tb1.matDate > '${date}' and state = 3 ) as tb2 GROUP by teacherId LIMIT 5) as tb3 JOIN account as ct on ct.userId = tb3.teacherId order by price DESC`)
  },

  topSkillInXXXDay: (date) => {
    return db.load(`SELECT DISTINCT tb3.idSkill,tb3.name, SUM(price) as price FROM (SELECT * from (SELECT tb1.*, STR_TO_DATE(endDay,'%d-%m-%Y') as matDate FROM (select tb.idSkill, tb.name, ct.* from (SELECT sc.*, sk.name FROM skill_contract as sc JOIN skill as sk WHERE sc.idSkill =  sk.skillId) as tb JOIN contract as ct on tb.idContract = ct.idContract) as tb1 )  as tb2 WHERE tb2.matDate > '${date}' and tb2.state = 3 ) as tb3 GROUP by tb3.idSkill  ORDER BY price DESC LIMIT 5`)
  },
  
  topSkillInAllDay: (date) => {
    return db.load(`SELECT DISTINCT tb3.idSkill,tb3.name, SUM(price) as price FROM (SELECT * from (SELECT tb1.*, STR_TO_DATE(endDay,'%d-%m-%Y') as matDate FROM (select tb.idSkill, tb.name, ct.* from (SELECT sc.*, sk.name FROM skill_contract as sc JOIN skill as sk WHERE sc.idSkill =  sk.skillId) as tb JOIN contract as ct on tb.idContract = ct.idContract) as tb1 )  as tb2 WHERE tb2.state = 3 ) as tb3 GROUP by tb3.idSkill  ORDER BY price DESC LIMIT 5`)
  }

  //SELECT tb3.*, ct.name FROM(SELECT DISTINCT tb2.teacherId, SUM(price) as price, tb2.endDate FROM (SELECT * FROM (SELECT *, DATE_SUB(STR_TO_DATE(endDay,'%d-%m-%Y'), INTERVAL 30 DAY) as matDate FROM contract) as tb1 where tb1.matDate > '2019-11-19' and state = 3 ) as tb2 GROUP by teacherId LIMIT 5) as tb3 JOIN account as ct on ct.userId = tb3.teacherId
  //SELECT DISTINCT tb3.idSkill,tb3.name, SUM(price) as price FROM (SELECT * from (SELECT tb1.*, STR_TO_DATE(endDay,'%d-%m-%Y') as matDate FROM (select tb.idSkill, tb.name, ct.* from (SELECT sc.*, sk.name FROM skill_contract as sc JOIN skill as sk WHERE sc.idSkill =  sk.skillId) as tb JOIN contract as ct on tb.idContract = ct.idContract) as tb1 )  as tb2 WHERE tb2.matDate > '2019-12-20' and tb2.state = 3 ) as tb3 GROUP by tb3.idSkill  ORDER BY price LIMIT 5

}