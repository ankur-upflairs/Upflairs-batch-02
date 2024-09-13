const express = require("express");
const app = express();
const port =3000
const host='localhost'

//first argument - route ,second = fn
app.get('/product',(req,res)=>{
    res.send('this is all products page')
})
app.post('/product',(req,res)=>{
    res.send('product is added')
})
// dynamic routing parameter
app.put('/product/:id',(req,res)=>{
    console.log(req.params.id)
    res.send('product is updated with id: '+req.params.id)
})
app.delete('/product/:id',(req,res)=>{
    res.send('product is deleted with id: '+req.params.id)
})

app.listen(port,host,()=>{
    console.log(`server is starting on port 3000 \nclick here to visit: http://${host}:${port}` )
})
