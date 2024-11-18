const Admin=require('../models/admin.js')

exports.loginForm=(req,res)=>{
    res.render('admin/loginform',{error:false})
}

exports.postLogin=async (req,res)=>{
    const {email,password}=req.body
    let admin=await Admin.findOne({email:email})
    if(admin){
        req.session.login=true
        res.redirect('/product')
    }
    else{
        res.render('admin/loginform',{
            error:'wrong credentials'
        })
    }

}