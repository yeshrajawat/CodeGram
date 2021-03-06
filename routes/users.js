const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');
const postController = require('../controllers/posts_controller');
const passport = require('passport');
const Localpassport = require('../config/passport-local-strategy')


router.get('/profile',Localpassport.checkAuthentication,userController.profile);
router.get('/sign-in',userController.signIn);
router.get('/sign-up',userController.signUp);
router.post('/create',userController.create);
router.post('/create-session',passport.authenticate('local',{failureRedirect:'/users/sign-in'}),userController.createSession);
router.get('/sign-out',userController.destroySession);



module.exports = router; 
 