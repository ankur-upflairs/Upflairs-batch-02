const Product = require('../models/productSchema.js')
exports.getAllProducts = async (req, res) => {
    let products = await Product.find()
    // console.log(products)
    res.render('products/getAllProducts.ejs', { title: 'All Products', products: products.reverse() })
}


exports.createProductForm = (req, res) => {
    res.render('products/createProduct.ejs', { title: 'Create Product' })
}

exports.createProduct =async (req, res) => {
    // console.log(req.body)
    const { name, price, description, image } = req.body

    // let product = new Product({ name, price, description, image })
    let product = new Product()
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    await product.save()
    res.redirect('/product')
}
exports.getSingleProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.findById(id)

    res.render('products/getSingleProduct.ejs', { title: 'Update Product', product: product })
}
exports.updateProductForm =async (req, res) => {
    let { id } = req.params
    let product = await Product.findById(id)
    res.render('products/createProduct.ejs', { title: 'Update Product', product: product })
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