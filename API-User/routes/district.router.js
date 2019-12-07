const districtController = require('../controllers').districtController

module.exports = app => {
    app.post('/api/get-districts-by-city', districtController.get_list_districts);
    app.get('/api/get-list-city', districtController.getListCIty);
    app.get('/api/get-list-district', districtController.getListDistrict);
    app.get('/api/get-city-by-district/:id', districtController.getCityByDistrict)
}