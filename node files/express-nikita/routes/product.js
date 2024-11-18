const express=require('express')
const router = express.Router()
const{getAllProducts, createProduct,createProductForm, getSingleProduct,updateProductForm, updateProduct, deleteProduct}=require('../controllers/productController.js')
const upload=require('../utilities/multerSetup.js')  
const { body } = require('express-validator')
  
function auth(req,res,next){
    if(req.session && req.session.login){
        console.log('auth')
        next()        
    } 
        
    else{
       return res.render('admin/loginform',{
            error:'please login '
        })
}
}

router.get('/',getAllProducts)
router.get('/create',createProductForm)
router.post('/',upload.single('image'),createProduct)
//dynamic routing =>
router.get('/:id',getSingleProduct)
router.get('/update/:id',auth,(req,res,next)=>{
    console.log(req.params.id)
    next()
},updateProductForm)
router.post('/update/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports=router




