const express = require('express');
const Controller = require('../controllers/Controller');


/**
 *  Set up express router.
 */
const router = express.Router();

/**
 *  Add get route /name/:id
 *  to router.
 */
router.get('/name/:name',Controller);

module.exports = router;