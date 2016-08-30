var express = require('express');
var router = express.Router();
var loggerController = require('../controllers/loggerController.js');

/*
 * GET
 */
router.get('/', function (req, res) {
    loggerController.list(req, res);
});

/*
 * GET
 */
router.get('/:id', function (req, res) {
    loggerController.show(req, res);
});

/*
 * POST
 */
router.post('/', function (req, res) {
    loggerController.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', function (req, res) {
    loggerController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function (req, res) {
    loggerController.remove(req, res);
});

module.exports = router;
