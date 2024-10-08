const express = require("express");
const app = express();
const productRouter=require('./routes/product.js')
const cartRouter=require('./routes/cart.js')
const userRouter=require('./routes/user.js')
const mongoose=require('mongoose')
const main=require('./utils/db.js')

const port = 3000
const host = 'localhost'

main()


app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use('/product',productRouter)
app.use('/cart',cartRouter)
app.use('/user',userRouter)

app.listen(port,host,()=>{
console.log(`server is starting on port 3000 \nclick here to visit: http://${host}:${port}`)
})



