const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const AdditionalForm = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');

// Apply the auth middleware to the route
router.post('/update-info', authMiddleware, AdditionalForm);
=======
const additionalForm = require('../controllers/user-controller');
// const authMiddleware = require('../middlewares/auth-middleware');

// const router = express.Router();

router.route('/update-info').post(additionalForm);
>>>>>>> 6ac237344a1f598e38244a546534a1bcc0191989

module.exports = router;
