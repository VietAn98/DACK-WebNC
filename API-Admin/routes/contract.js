const contractController = require("../controllers").contractController;

module.exports = (app) => {
    app.get('/api-admin/get-list-limit-contract', contractController.getListLimitContract); 
    app.get('/api-admin/get-list-state-contract', contractController.getListStateContract);
    app.get('/api-admin/get-list-contract-by-state/:id',contractController.getLimitContractByState);
    app.get('/api-admin/get-detail-contract/:id',contractController.getDetailContract);
    app.post('/api-admin/update-contract', contractController.updateContract);

    // Thống kê doanh thu d-m-y
    app.get('/api-admin/revenue-by-date', contractController.revenueByDate);
    app.get('/api-admin/revenue-by-month', contractController.revenueByMonth);
    app.get('/api-admin/revenue-by-year', contractController.revenueByYear);

    // Thống kê top 10 giáo viên   
    app.get('/api-admin/top-ten-in-one-day', contractController.topTenInOneDay)
    app.get('/api-admin/top-ten-in-7-day', contractController.topTenIn7Days)
    app.get('/api-admin/top-ten-in-30-day', contractController.topTenIn30Days)
    app.get('/api-admin/top-ten-in-90-day', contractController.topTenIn90Days)
    app.get('/api-admin/top-ten-in-all-day', contractController.topTenInAllDay)

    // Thống kê top revenue by skill
    app.get('/api-admin/top-revenue-by-skill-in-one-day', contractController.topSkillInonelDay)
    app.get('/api-admin/top-revenue-by-skill-in-7-day', contractController.topSkillIn7Days)
    app.get('/api-admin/top-revenue-by-skill-in-30-day', contractController.topSkillIn30Days)
    app.get('/api-admin/top-revenue-by-skill-in-90-day', contractController.topSkillIn90Days)
    app.get('/api-admin/top-revenue-by-skill-in-all-day', contractController.topSkillInAllDays)


}