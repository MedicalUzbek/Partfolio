var express = require('express');
const Music = require('../model/Music')
var router = express.Router();

/* GET home page. */
router.get('/delete/:id', function(req, res, next) {
    Music.findByIdAndDelete(req.params.id, (err) => {
        if(err) console.log(err);
        else{
            res.redirect('/')
        }
    })
});

module.exports = router;
