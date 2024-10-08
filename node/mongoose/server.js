const express=require('express');
const app=express();
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/products');


app.listen(3000,()=>console.log('server is running on port 3000'));




