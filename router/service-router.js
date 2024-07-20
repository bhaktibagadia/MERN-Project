const express = require('express');
const router = express.Router();
const getServices = require('../controllers/service-controller');

router.route('/service').get(getServices);

module.exports = router;
