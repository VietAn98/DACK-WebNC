const teachingController = require('../../controllers').teachingController;

module.exports = app => {
    app.get('/api/get-list-teaching', teachingController.getListTeaching);
    app.post('/api/update-infor-teacher', teachingController.updateInforTeacher);
    app.get('/api/get-detail-teacher/:id', teachingController.getTeacherByid);
    app.get('/api/get-List-Skill-ByUser/:id',teachingController.getListSkillByUser)
    app.get('/api/get-list-skills', teachingController.getListSkills);
    //chưa test sắp xếp
    app.get('/api/get-list-top-teacher', teachingController.getTopTeacher);
    app.get('/api/get-teachers-by-gia', teachingController.getTeaherbyPrice);
    app.get('/api/get-teachers-price-increase', teachingController.getTeacherPriceIncrease);
    app.get('/api/get-teachers-price-decrease', teachingController.getTeacherPriceDecrease);
    app.get('/api/get-teachers-rate-success-increase', teachingController.getTeacherRateSuccessIncrease);
    app.get('/api/get-teachers-rate-success-decrease', teachingController.getTeacherRateSuccessDecrease);
}