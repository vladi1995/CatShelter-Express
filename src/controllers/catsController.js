const express = require('express');
const router = express.Router();
const breeds = require('../../data/breeds.json');

const services = require('../services/catsServices.js');

router.get('/add-breed', (req, res) => {
    res.render('addBreed');
});

router.get('/add-cat', (req, res) => {
    res.render('addCat', {breeds});
});

router.post('/add-breed', (req, res) => {
    const result = req.body;
    services.saveBreed(result)
    .then(res.redirect('/'))
    .catch(err => console.log(err));
});

router.post('/add-cat', (req, res) => {
    const result = req.body;
    services.saveCat(result)
    .then(res.redirect('/'))
    .catch(err => console.log(err));
});


module.exports = router;