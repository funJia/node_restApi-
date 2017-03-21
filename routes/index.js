var db = require('../db.js')();
module.exports = app => {
    /**
     * @api {get} / API Status
     * @apiGroup Status
     * @apiSuccess {String} status API Status' message
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {"status": "NTask API"}
     */
    app.get('/getProjectList', (req, res) => {
        // db.models.project.sync({ force: false });
        db.models.project.findAll().then(function (result) {
            res.json(result);
        });
    });
};
