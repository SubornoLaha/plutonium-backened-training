const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const bb=require("../logger/logger.js")
const abcd=require("../util/hellper.js")
//const ac=require("../util/hellper.js")
//const ab=require("../util/hellper.js")
const honey=require("../validator/formator.js")
//const si=require("../validator/formator.js")


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    
    bb.name()
    abcd.name1()
    abcd.name2()
    abcd.name3()
    honey.yo()
    honey.no()
    honey.tes()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason