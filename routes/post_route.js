const express = require('express');
const router = express.Router();
const passport = require('passport');
const Localpassport = require('../config/passport-local-strategy')
const postController = require('../controllers/posts_controller');

router.post('/create',Localpassport.checkAuthentication,postController.create);
module.exports = router; 