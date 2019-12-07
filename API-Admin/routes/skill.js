const skillController = require("../controllers").skillController;

module.exports = (app) => {
    app.get('/api-admin/get-list-skill', skillController.getAllSkill);
    app.get('/api-admin/get-skill-byId/:id', skillController.getSkillById);
    app.post('/api-admin/update-skill', skillController.updateSkill);
    app.post('/api-admin/delete-skill/:id', skillController.deleteSkill);
    app.post('/api-admin/add-skill', skillController.addSkill);
}