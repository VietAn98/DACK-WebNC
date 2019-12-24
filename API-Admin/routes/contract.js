const contractController = require("../controllers").contractController;

module.exports = (app) => {
    app.get('/api-admin/get-list-limit-contract', contractController.getListLimitContract); 
    app.get('/api-admin/get-list-state-contract', contractController.getListStateContract);
    app.get('/api-admin/get-list-contract-by-state/:id',contractController.getLimitContractByState);
    app.get('/api-admin/get-detail-contract/:id',contractController.getDetailContract);
    app.post('/api-admin/update-contract', contractController.updateContract);

    // Thống kê doanh thu
    app.get('/api-admin/revenue-by-date', contractController.revenueByDate);
    app.get('/api-admin/revenue-by-month', contractController.revenueByMonth);
    app.get('/api-admin/revenue-by-year', contractController.revenueByYear);
}