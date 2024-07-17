const express=require('express')
const router=express.Router();
const authcontrollers=require('../controllers/auth-controllers');
const signupSchema = require('../validators/auth-validator');
const validate = require('../middlewares/validate-middleware');
const authMiddleware = require('../middlewares/auth-middleware');

// const {register} = require('../controllers/auth-controllers')

// router.get('/', (req, res)=>{
//     res.status(200).send('Home page using router');
// });

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(authcontrollers.login);

router.route('/user').get(authMiddleware, authcontrollers.user);

module.exports = router;