const contractController = require('../controllers').contractController

module.exports = app => {
    app.get('/api/get-contract-by-user/:id', contractController.getContractByUser);
    app.get('/api/get-contract-by-teacher/:id', contractController.getContractByTeacher);
    app.post('/api/create-contract',contractController.createContract );
    
    //get  list contract
    app.get('/api/filter-list-contract-student/:idUser', contractController.filterListContractStudent);
    app.get('/api/filter-list-contract-teacher/:idUser', contractController.filterListContractTeacher);
    
    //detail contract
    app.get('/api/get-detail-contract/:id', contractController.detailContract);

    //cập nhật trạng thái.
    app.post('/api/update-state-contract/:id', contractController.updateStateContract)
    // get all contract
    app.get('/api/getAllContract', contractController.getAllContract)

}