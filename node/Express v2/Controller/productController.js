const Product=require('../models/productModel')
let fs=require('node:fs')

exports.getAllproducts=async (req,res)=>{
   let products=await Product.find({})
    res.render('product/products.ejs',{products:products})
}

exports.getSingleProduct=(req,res)=>{
    let id=req.params.id
    let product=Product.findById(id)
    res.render('product/product.ejs',{product:product})
}

exports.createProductForm=(req,res)=>{
    res.render('product/create.ejs')
}
exports.createProduct=async (req,res)=>{
    let {name,price,image,description}=req.body
    let product=new Product({name,price,image,description})
    await product.save()
    // res.send('product is added')
    res.redirect('/product')
}

exports.updateProductForm=async (req,res)=>{
    console.log(req.params.id)
    let product =await Product.findById(req.params.id)
    res.render('product/update.ejs',{product:product})
}
exports.updateProduct=async (req,res)=>{
    let {name,price,image,description}=req.body
    let product =await Product.findById(req.params.id)
    product.name=name
    product.price=price
    product.image=image
    product.description=description
    await product.save()
    res.redirect('/product')
}
exports.deleteProduct=async (req,res)=>{
    let id=req.params.id
    await Product.findByIdAndDelete(id)
    res.redirect('/product')
}


// let fs=require('node:fs')
// exports.getAllproducts=(req,res)=>{
//     let products=fs.readFileSync('./data.json','utf-8')
//     products = JSON.parse(products)
//     res.render('product/products.ejs',{products:products})
// }

// exports.getSingleProduct=(req,res)=>{
//     let id=req.params.id
//     let products=fs.readFileSync('./data.json','utf-8')
//     products = JSON.parse(products)
//     let product=products.find(product=>product.id==id)
//     res.render('product/product.ejs',{product:product})
// }

// exports.createProductForm=(req,res)=>{
//     res.render('product/create.ejs')
// }
// exports.createProduct=(req,res)=>{
//     let products=fs.readFileSync('./data.json','utf-8')
//     products = JSON.parse(products)
//     let id=products[products.length-1].id+1
//     let newProduct={
//         id:id,
//         name:req.body.name,
//         price:req.body.price,
//         image:req.body.image,
//         description:req.body.description
//     }
//     products.push(newProduct)
//     fs.writeFileSync('./data.json',JSON.stringify(products))
//     console.log(req.body)
//     res.send('product is added')

//     // res.redirect('/product')
// }
// exports.updateProduct=(req,res)=>{
//     console.log(req.params.id)
//     res.send('product is updated with id:'+req.params.id)
// }
// exports.deleteProduct=(req,res)=>{
//     res.send('product is deleted with id: '+req.params.id)
// }