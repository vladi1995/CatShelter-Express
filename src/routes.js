const express = require('express');
const router = express.Router();
const homeController = require('./controllers/homeController.js');

router.use('/', homeController);
module.exports = router;