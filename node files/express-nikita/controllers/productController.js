const Product = require('../models/productSchema.js')
const handleError=require('../utilities/APIError.js')
const {validationResult}=require('express-validator')
// exports.getAllProducts = async (req, res) => {
//     try {
//         let products = await Product.find()
//         res.render('products/getAllProducts.ejs', { title: 'All Products', products: products.reverse() })
//     } catch (error) {
//         res.render('error.ejs', { error: 'Something went wrong' })
//     }
//     // console.log(products)
// }

exports.getAllProducts = handleError(async (req, res) => {
        let products = await Product.find()
        res.render('products/getAllProducts.ejs', { title: 'All Products', products: products.reverse() })  
})
    // console.log(products)

exports.createProductForm = (req, res) => {
    res.render('products/createProduct.ejs', { title: 'Create Product',product:null,errors:null })
}

exports.createProduct =async (req, res) => {
    let errors=validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array())
        return res.render('products/createProduct.ejs', { title: 'Create Product',product:null ,errors:errors.array() })
    }

    console.log(req.body)
    console.log(req.file.filename)
    let { name, price, description,quantity } = req.body
    
    let image=req.file.filename
    let product = new Product({ name, price, description,quantity, image })
    await product.save()
    res.redirect('/product')
    
    // const { name, price, description, image } = req.body

    // // let product = new Product({ name, price, description, image })
    // let product = new Product()
    // product.name = name
    // product.price = price
    // product.description = description
    // product.image = image
    // await product.save()
    // res.redirect('/product')
}
exports.getSingleProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.findById(id)

    res.render('products/getSingleProduct.ejs', { title: 'Update Product', product: product })
}

exports.updateProductForm =async (req, res) => {
    let { id } = req.params
    console.log('hello everyone')
    res.send('hello everyone')
    // let product = await Product.findById(id)
    // res.render('products/createProduct.ejs',
    //      { title: 'Update Product', product: null })
}

exports.updateProduct =async (req, res) => {
    let id=req.params.id
    let { name, price, description, image } = req.body
    await Product.findByIdAndUpdate(id, { name, price, description, image })
    res.redirect('/product/' + id)    
}

exports.deleteProduct = async (req, res) => {
    let { id } = req.params
    await Product.findByIdAndDelete(id)
    res.send('product with id ' + req.params.id + 'deleted')
}

// exports.getAllProducts = (req, res) => {
//     res.send('this is to get all product')
// }

// exports.createProduct = (req, res) => {
//     res.send('this is to create product')
// }
// exports.getSingleProduct=(req,res)=>{
//     res.send(req.params.id)
// }

// exports.updateProduct = (req,res)=>{
//     console.log(req.params.id)
//     res.send('product with id '+ req.params.id + 'updated')
// }

// exports.deleteProduct = (req,res)=>{
//     console.log(req.params)
//     res.send('product with id '+ req.params.id + 'deleted')
// }