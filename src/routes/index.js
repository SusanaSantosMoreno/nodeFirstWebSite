const express = require('express');
const router = express.Router();

//routes
router.get('/', (req, res) => {
    res.render('index.html', {title: 'FIRST WEB SITE'});
})

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'CONTACT PAGE'});
})

module.exports = router;