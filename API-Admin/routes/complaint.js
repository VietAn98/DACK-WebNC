const complaintController = require("../controllers").complaintController;

module.exports = (app) => {
    app.get('/api-admin/get-list-complaint', complaintController.getComplaintLimit);
    
}