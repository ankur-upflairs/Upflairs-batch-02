import React from 'react'


function Blog(props) {
    let {userId,id,title,body}=props

    // console.log(props)
    //destructuring 
    // let obj={name:'xyz',age:23}
    // // console.log(obj.name)
    // let {name,age}=obj
    // let arr=[3,4]
    // let [x,y]=arr
  return (
    <div className="card w-75 mb-3 mx-auto">
    <div className="card-body">
      <h5 className="card-title"><span className='fw-bold'>Title - </span>{title}</h5>
      <p className="card-text"><span className='fw-bold'>Text - </span>{body}</p>
    </div>
  </div>
  )
}




// function Blog(props) {
//     // console.log(props)
//   return (
//     <div className="card w-75 mb-3 mx-auto">
//     <div className="card-body">
//       <h5 className="card-title"><span className='fw-bold'>Title - </span>{props.title}</h5>
//       <p className="card-text"><span className='fw-bold'>Text - </span>{props.body}</p>
//     </div>
//   </div>
//   )
// }

export default Blog
