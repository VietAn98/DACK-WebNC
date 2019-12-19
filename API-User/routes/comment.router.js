const commentController = require('../controllers').commentController

module.exports = app => {
    app.post('/api/create-comment', commentController.createComment);

    // complaint
    app.post('/api/create-complaint', commentController.createComplaint);

}