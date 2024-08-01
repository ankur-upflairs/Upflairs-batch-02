import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <Layout/>
   )
 

//functional component => start the fn name with capital letter
//every fn component should return jsx 
// function Header(){
//   return <div className='a'>
//     this is header
//   </div>
// }

// function Content(){
//   return <div>
//     this is Content
//   </div>
// }

// function Footer(){
//   return <div>
//     this is Footer
//   </div>
// }

// function Layout(){
//   return <div>
//     <Header></Header>
//     <Content/>
//     <Footer/>
//   </div>
// }


// ReactDOM.createRoot(document.getElementById('root')).render(
//  <Layout/>
//   )


//use fn component as a tag
// ReactDOM.createRoot(document.getElementById('root')).render(
//   [<Header></Header>,<Content/>,<Footer/>]
//   )
  





//jsx => writing html inside js =>js xtension
//complete jsx must be wrap inside a single tag
// let el1=<h1>hello everyone</h1><p>hello</p>
// let el1=<div>
// <h1>hello everyone</h1>
// <p>this is my first react app</p>
// </div>
// //every tag must be closed
// let el2=<div>
// <input type="text" ></input>
// <br />
// <input type="text" />
// </div>
// //use className insteed of class

// let el2='this is my first react app'
// ReactDOM.createRoot(document.getElementById('root')).render(
// [el1,el2]
// )


// let el1='hello everyone'
// let el2='this is my first react app'
// ReactDOM.createRoot(document.getElementById('root')).render(
//  [el1,el2]
// )
