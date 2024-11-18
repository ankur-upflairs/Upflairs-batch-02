const express = require("express");
const router = express.Router();
const fs=require('node:fs')
const path=require('node:path')
const {getAllproducts,getSingleProduct,createProductForm,createProduct,
    updateProductForm,updateProduct,deleteProduct}=
require('../Controller/productController.js')


router.get("/", getAllproducts);
router.get("/create",createProductForm);
router.get("/update/:id", updateProductForm);
router.post("/update/:id", updateProduct);
router.get("/:id",getSingleProduct)
router.post("/",createProduct );
router.post("/delete/:id",deleteProduct );

// router.get("/", (req, res) => {
// //   res.send("Here is your products");
// res.render('product/products.ejs')
// });
//  router.get("/:id",(req,res)=>{
//     res.render('product/product.ejs')
//  })
// router.put("/Product", (req, res) => {
//   res.send("Products Are Updated");
// });

// router.post("/:id", (req, res) => {
//   console.log(req.params.id);
//   res.send("Products Are Added");
// });

// router.delete("/Products", (req, res) => {
//   res.send("Products Are Deleted");
// });

module.exports = router;
