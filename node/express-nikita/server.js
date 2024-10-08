const express=require('express')
const app = express()
const productRouter = require('./routes/product')
const mongoose=require('mongoose')



mongoose.connect('mongodb://127.0.0.1:27017/shop')
.then(()=>console.log('database connected'))
.catch((err)=>console.log(err))


app.set('view engine','ejs')
app.set('views','./views')

app.use(express.urlencoded({ extended: true }))
app.use('/product',productRouter)

app.get('/',(req,res)=>{
    res.send('Hello Nikita')
})








// app.get('/product',(req,res)=>{
//     res.send('this is all product page')
// })
// app.post('/product',(req,res)=>{    
//     res.send('this is to create product')
// })
// //dynamic routing =>
// app.get('/product/:id',(req,res)=>{
//     console.log(req.params.id)
//     res.send(req.params.id)
// })
// app.put('/product/:id',(req,res)=>{
//     console.log(req.params.id)
//     res.send('product with id '+ req.params.id + 'updated')
// })
// app.delete('/product/:id',(req,res)=>{
//     console.log(req.params)
//     res.send('product with id '+ req.params.id + 'deleted')    
// })

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})



