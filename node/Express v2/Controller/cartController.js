let fs=require('node:fs')
exports.getAllcarts=(req,res)=>{
    let cart=fs.readFileSync('/.cart.json','utf-8')
    cart=JSON.parse(cart)
    res.render('product/cart.ejs',{cart:cart})
}
exports.getSinglecart=(req,res)=>{
    let id=req.params.id