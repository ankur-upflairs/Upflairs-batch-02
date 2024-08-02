import React from 'react'
import Blog from './Blog'
import { posts } from './postData'
function Blogs() {
    //spread operator ...
    // let obj={name:'pawan',age:34}
    // let obj1={name:obj.name,age:obj.age, course:'FSD'}
    // let obj1={...obj,course:'FSD'}
  return (
    <div>
     <Blog userId={posts[0].userId} id={posts[0].id} title={posts[0].title} body={posts[0].body}/>
     <Blog userId={posts[1].userId} id={posts[1].id} title={posts[1].title} body={posts[1].body}/>
     <Blog {...posts[2]} />
     <Blog {...posts[3]} />
    </div>
  )
}

export default Blogs
