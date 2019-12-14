var db = require("../utils/connectDB");

module.exports = {
    commentsByUserTeacher: (id) => {
        return db.load(`SELECT * FROM comment as cm JOIN account as std on cm.idUser = std.userId where cm.idTeacher = ${id}`)
    }
}