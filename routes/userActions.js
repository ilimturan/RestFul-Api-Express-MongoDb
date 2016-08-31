var express = require('express');
var router = express.Router();
var userActionController = require('../controllers/userActionController.js');

/*
 * GET
 */
router.get('/', function (req, res) {
    userActionController.list(req, res);
});

/*
 * GET
 */
router.get('/:id', function (req, res) {
    userActionController.show(req, res);
});

/*
 * POST
 */
router.post('/', function (req, res) {
    userActionController.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', function (req, res) {
    userActionController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function (req, res) {
    userActionController.remove(req, res);
});

module.exports = router;
