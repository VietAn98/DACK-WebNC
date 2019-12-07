const teachingController = require('../../controllers').teachingController;

module.exports = app => {
    app.get('/api/get-list-teaching', teachingController.getListTeaching);
    app.post('/api/update-infor-teacher', teachingController.updateInforTeacher);
    app.get('/api/get-detail-teacher/:id', teachingController.getTeacherByid);
    app.get('/api/get-List-Skill-ByUser/:id',teachingController.getListSkillByUser)

}