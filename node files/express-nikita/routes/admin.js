const express = require('express')
const router = express.Router()
const {loginForm, postLogin}=require('../controllers/admin.js')
router.get('/login', loginForm)
router.post('/postlogin',postLogin)

module.exports=router