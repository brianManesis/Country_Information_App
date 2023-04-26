const express = require('express');
const Controller = require('../controllers/Controller');

const router = express.Router();

router.get('/name/:name',Controller);

module.exports = router;