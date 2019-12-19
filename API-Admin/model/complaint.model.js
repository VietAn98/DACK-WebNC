var db = require("../utils/connectDB");

module.exports = {
    getLimitComplaint: (limit, offset) => {
        return db.load(`SELECT tb2.*, acc.name as nameTeacher FROM (SELECT tb1.*, ac.name as nameStudent FROM (SELECT * FROM complaint as cp JOIN contract AS ct on cp.contractId = ct.idContract) as tb1 JOIN account as ac ON tb1.studentId = ac.userId) as tb2 JOIN account as acc on tb2.teacherId = acc.userId LIMIT ${limit} OFFSET ${offset}`)
    },

    getCountComplaint: () => {
        return db.load("select COUNT(*) as sumT from skill");
    },

    getComplaintByContract : (contractId) => {
         return db.load(`select * from complaint where contractId = ${contractId}`)
    },

    updateComplaint: (Complaint) => {
        return db.update("complaint", "id", Complaint);
    }

}