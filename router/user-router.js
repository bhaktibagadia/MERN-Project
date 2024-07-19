const express = require('express');
const router = express.Router();
const additionalForm = require('../controllers/user-controller');
// const authMiddleware = require('../middlewares/auth-middleware');

// const router = express.Router();

router.route('/update-info').post(additionalForm);

module.exports = router;
