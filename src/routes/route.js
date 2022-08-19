const express = require('express');
const router = express.Router();
const bookSchema=require("../controllers/bookSchemaController");

router.post("/createBOOK",bookSchema.fun1)
router.post("/authorCreate1",bookSchema.fun2)
router.get("/listBook",bookSchema.fun3)
router.get("/authorName",bookSchema.fun4)
router.get("/getBookBtwn",bookSchema.fun5)

module.exports = router;