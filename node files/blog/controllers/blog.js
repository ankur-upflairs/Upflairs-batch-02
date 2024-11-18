const Blog = require('../models/blog');
exports.getAllBlogs=async (req,res)=>{
    let blogs=await Blog.find();
    res.status(200).json({
        status:'success',
        blogs:blogs
    })
}

exports.getSingleBlog=async (req,res)=>{
       const blog=await Blog.findById(req.params.id);
       res.status(200).json({
        status:'success',
        blog:blog
    })
}


exports.createBlog=async (req,res)=>{
    let blog=await Blog.create(req.body);
    res.status(201).json({
        status:'success',
        message:'blog created',
    })
}
exports.updateBlog=async (req,res)=>{
   const blog=await Blog.findByIdAndUpdate(req.params.id,req.body);
    res.status(201).json({
        status:'success',
        message:'blog updated',
    })
}
exports.deleteBlog=async (req,res)=>{
    const blog=await Blog.findByIdAndDelete(req.params.id);
    res.status(201).json({
        status:'success',
        message:'blog deleted',
    })
}