const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookController = require('../controllers/bookController')
const exda=require('../controllers/expost')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser)

router.get("/getUsersData", UserController.getUsersData)

router.post('/bookpo', bookController.books)

router.get('/bookre', bookController.bookli)

router.post('/su',exda.ex)


module.exports = router;
