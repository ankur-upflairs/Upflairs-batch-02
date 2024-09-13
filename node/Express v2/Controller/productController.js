let fs=require('node:fs')
exports.getAllproducts=(req,res)=>{
    let products=fs.readFileSync('./data.json','utf-8')
    products = JSON.parse(products)
    res.render('product/products.ejs',{products:products})
}

exports.getSingleProduct=(req,res)=>{
    let id=req.params.id
    let products=fs.readFileSync('./data.json','utf-8')
    products = JSON.parse(products)
    let product=products.find(product=>product.id==id)
    res.render('product/product.ejs',{product:product})
}

exports.createProductForm=(req,res)=>{
    res.render('product/create.ejs')
}
exports.createProduct=(req,res)=>{
    let products=fs.readFileSync('./data.json','utf-8')
    products = JSON.parse(products)
    let id=products[products.length-1].id+1
    let newProduct={
        id:id,
        name:req.body.name,
        price:req.body.price,
        image:req.body.image,
        description:req.body.description
    }
    products.push(newProduct)
    fs.writeFileSync('./data.json',JSON.stringify(products))
    console.log(req.body)
    res.send('product is added')

    // res.redirect('/product')
}
exports.updateProduct=(req,res)=>{
    console.log(req.params.id)
    res.send('product is updated with id:'+req.params.id)
}
exports.deleteProduct=(req,res)=>{
    res.send('product is deleted with id: '+req.params.id)
}