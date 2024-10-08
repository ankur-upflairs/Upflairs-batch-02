const mongoose = require('mongoose');

const productSchema =  new mongoose.Schema({
    name: String,
    price: Number,
    category: {type:String,enum:['Electronics','Clothing','Books']},
    description:{type:String,required:true},
    image:{type:String,required:true},
    quantity:{type:Number,required:true},
    createdAt:{type:Date,default:Date.now},
})


const Product = mongoose.model('Product',productSchema);
module.exports = Product
 