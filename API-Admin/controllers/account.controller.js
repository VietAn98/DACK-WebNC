const db = require("../model/account.model");

module.exports = {
    getListAccountTeacher : (req,res) => {
        return db.getListAcc().then(list => {
            res.status(200).json(list)
        }).catch(err => res.status(400).json({message: 'thất bại', err: err}))
    },

    getDetailAccount: (req,res) => {
        const id = req.params.id;
        return db.getAccById(id).then(resp => {
            res.status(200).json(resp)
        }).catch(err => res.status(400).json({message: 'thất bại', err: err}))

    },
    getListAccountStudent : (req,res) => {
        return db.getListAccstudent().then(list => {
            res.status(200).json(list)
        }).catch(err => res.status(400).json({message: 'thất bại', err: err}))
    },

}