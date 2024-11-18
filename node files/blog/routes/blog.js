var express = require('express');
const { getAllBlogs, getSingleBlog, createBlog ,updateBlog,deleteBlog} = require('../controllers/blog');
var router = express.Router();

/* GET users listing. */
router.get('/',getAllBlogs);
router.get('/:id',getSingleBlog);
router.post('/',createBlog)
router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)

module.exports = router;
