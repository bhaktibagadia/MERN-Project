const express = require('express');
const adminController = require('../controllers/admin-controller');

const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');

const router = express.Router();

router.route('/users').get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router.route("/users/:id").get(authMiddleware, adminMiddleware, adminController.getUserById);
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteUserById);
router.route('/contacts').get(authMiddleware, adminMiddleware, adminController.getAllContacts);
router.route('/additionalData').get(authMiddleware, adminMiddleware, adminController.getAllAdditionalData);
router.route('/additionalData/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteDatabyId);
router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteContactbyId);

module.exports = router;