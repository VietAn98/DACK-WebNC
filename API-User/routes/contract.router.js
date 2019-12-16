const contractController = require('../controllers').contractController

module.exports = app => {
    app.get('/api/get-contract-by-user/:id', contractController.getContractByUser);
    app.post('/api/create-contract',contractController.createContract );
    
    //get  list contract
    app.get('/api/get-list-contract-await', contractController.getListContractAwait);
    app.get('/api/get-list-contract-verified', contractController.getListContractVerified);
    app.get('/api/get-list-contract-complete',contractController.getListContractComplete)
    app.get('/api/get-list-contract-deny',contractController.getListContractDeny);
    app.get('/api/get-list-contract-wait-pay',contractController.getListContractAwaitPay);
    app.get('/api/get-list-contract-reported', contractController.getListContractReported);
    app.get('/api/get-list-contract-cancel', contractController.getListContractCancel);
    
    //detail contract
    app.get('/api/get-detail-contract/:id', contractController.detailContract);

    //cập nhật trạng thái.
    app.post('/api/update-state-contract/:id', contractController.updateStateContract)
    // get all contract
    app.get('/api/getAllContract', contractController.getAllContract)

}