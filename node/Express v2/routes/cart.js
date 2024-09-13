const express = require("express");
const router = express.Router();
const fs=require('node:fs')
const path=require('node:path')
const {getAllcarts,getSinglecart,createcart,updatecart,deletecart}=
require('../Controller/cartController.js')


router.get("/",getAllcarts );
router.get("/",getSinglecart);
router.put("/",updatecart);
router.post("/", createcart);
router.delete("/", deletecart);

module.exports = router;
