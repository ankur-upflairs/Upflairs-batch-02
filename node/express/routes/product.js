const express = require("express");
const router=express.Router()
const fs=require('node:fs')
const path=require('node:path')
const {getAllproducts, getSingleProduct, createProductForm, createProduct, updateProduct, deleteProduct}=require('../controllers/productController.js')

//to get all products
router.get('/',getAllproducts)
//to get single product
router.get('/:id',getSingleProduct)
//to get new product form
router.get('/create',createProductForm)
//to create new product
router.post('/',createProduct)
// dynamic routing parameter
// to update product
router.put('/:id',updateProduct)
// to delete product
router.delete('/:id',deleteProduct)

module.exports=router
