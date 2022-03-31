const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log("Router Loaded");



router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/posts',require('./post_route'));
//For any further routes, access from here
//router.use('/routerName',require('./routerfile'));
module.exports = router;