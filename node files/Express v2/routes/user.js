const express = require("express");
const router = express.Router();
const fs=require('node:fs')
const path=require('node:path')
const {getAllcarts,getSinglecart,createcart,updatecart,deletecart}=
require('../Controller/userController.js')


router.get("/", 
);

router.put("/", (req, res) => {
  res.send("users Are Updated");
});

router.post("/", (req, res) => {
  res.send("users Are Added");
});

router.delete("/", (req, res) => {
  res.send("users Are Deleted");
});

module.exports = router;
