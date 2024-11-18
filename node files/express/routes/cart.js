const express = require("express");
const router=express.Router()
router.get('/',(req,res)=>{
    res.send('this is all products page')
})
router.post('/',(req,res)=>{
    res.send('cart is added')
})
// dynamic routing parameter
router.put('/:id',(req,res)=>{
    console.log(req.params.id)
    res.send('cart is updated with id: '+req.params.id)
})
router.delete('/:id',(req,res)=>{
    res.send('cart is deleted with id: '+req.params.id)
})


module.exports=router