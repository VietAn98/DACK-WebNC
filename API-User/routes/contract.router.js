const contractController = require('../controllers').contractController

module.exports = app => {
    app.get('/api/get-contract-by-user/:id', contractController.getContractByUser);
    app.post('/api/create-contract',contractController.createContract );
}