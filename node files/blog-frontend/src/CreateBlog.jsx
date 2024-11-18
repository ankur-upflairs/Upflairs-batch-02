import axios from 'axios';
import React, { useState } from 'react';


const BlogForm = () => {
  const [blog, setBlog] = useState({ title: '', description: '', image: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form submission logic here
    let res=await axios.post("http://localhost:3000/blog",blog)
    console.log(res.data)
    if(res.data.status=="success"){
      alert("Blog created successfully")
    //   setBlog({ title: '', description: '', image: '' });
    }
    else{
      alert("Blog creation failed")
    }
  };

  return (
    <div className="container mt-4">
      <h2>Blog Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="card mb-3">
          <div className="card-body">
            <div className="form-group mb-3">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={blog.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                value={blog.description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="image">Image URL</label>
              <input
                type="url"
                className="form-control"
                id="image"
                name="image"
                value={blog.image}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
