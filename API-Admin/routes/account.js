const accoutController = require("../controllers").accountController;
const admin =require('../controllers').adminLogin;

module.exports = (app) => {
    app.get('/api-admin/get-list-account-teacher', accoutController.getListAccountTeacher);
    app.get('/api-admin/get-list-limit-account-teacher', accoutController.getListLimitAccountTeacher)
    app.get('/api-admin/get-list-account-student', accoutController.getListAccountStudent);
    app.get('/api-admin/get-detail-account/:id', accoutController.getDetailAccount);
    app.get('/api-admin/get-district-city-byUser/:idDistrict', accoutController.getAddressByUser);
    app.get('/api-admin/get-district-byUser/:idDistrict', accoutController.getDistrictByUser);
    app.post('/api-admin/update-state-account', accoutController.updateStateAccount);
    app.post('/api-admin/update-password', admin.updatePassword)
}
