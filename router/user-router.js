const express = require('express');
const router = express.Router();
const AdditionalForm = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');

// Apply the auth middleware to the route
router.post('/update-info', authMiddleware, AdditionalForm);

module.exports = router;
