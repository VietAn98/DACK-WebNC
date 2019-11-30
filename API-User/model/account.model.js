var db = require('../utils/connectDB');

module.exports = {
    getListAcc: () => {
        return db.load('select * from account')
    },

    createAcc: (account) => {
        return db.add('account', account);
    },

    updateAcc: (account) => {
        return db.update('account', 'userId', account);
    },

    getAccByEmail: email => {
        return db.load(`select * from account where gmail= '${email}'`);
    }

}
