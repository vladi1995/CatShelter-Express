const express = require('express');
const router = express.Router();
const cats = require('../../data/db.json');
const services = require('../services/catsServices.js');

router.get('/', (req, res) => {
    const queryString = req.query;
    const cats = services.getAll(queryString.search);
    res.render('index', {cats, queryString});
});



module.exports = router;