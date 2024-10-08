const express=require('express')
const router = express.Router()
const{getAllProducts, createProduct,createProductForm, getSingleProduct,updateProductForm, updateProduct, deleteProduct}=require('../controllers/productController.js')


router.get('/',getAllProducts)
router.get('/create',createProductForm)
router.post('/',createProduct)
//dynamic routing =>
router.get('/:id',getSingleProduct)
router.get('/update/:id',updateProductForm)
router.post('/update/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports=router







