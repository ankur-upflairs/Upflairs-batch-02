const mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
},{timestamp:true})

module.exports=mongoose.model('product',productSchema)




