const accoutController = require("../controllers").accountController;

module.exports = (app) => {
    app.get('/api-admin/get-list-account-teacher', accoutController.getListAccountTeacher);
    app.get('/api-admin/get-list-account-student', accoutController.getListAccountStudent);
    app.get('/api-admin/get-detail-account/:id', accoutController.getDetailAccount);
}
