
// let res=fetch('https://jsonplaceholder.typicode.com/posts')
// // console.log(res)

// let jsonRes=res.then((res)=>res.json())
// res.catch((err)=>console.log(err.message))

// jsonRes.then((data)=>console.log(data))
// jsonRes.catch((err)=>console.log(err.message))

let ol=document.querySelector('ol')
// let titles=''
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>res.json())
// .then((data)=>{
//     data.forEach((v,i)=> titles+=`<li>${v.title}</li>` )
//     ol.innerHTML=titles

// })
// .catch(err=>console.log(err.message))

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>res.json())
// .then((data)=>{
//     data.forEach((v,i)=> {
//         let li=document.createElement('li')
//         li.innerText=v.title
//         ol.append(li)
//     })   
// })
// .catch(err=>console.log(err.message))
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     headers:{},
//     method:'GET',
//     body:
// })


//methods => get , post , delete , put , patch

// let obj={name:'pankaj'}
// console.log(JSON.stringify(obj))
// let json=JSON.stringify(obj)
// console.log(JSON.parse(json))
// 'Content-Type':'json/application'
// 'Content-Type':'text/html'
// 'Content-Type':'text/csv'
// 'Accept':''

// fetch('https://icanhazdadjoke.com/',{
//     headers:{
//         'Accept':'application/json'
//     }
// })
// .then((res)=>res.json())
// .then((data)=>{
//       console.log(data)
// })


// async await 
async function getdata(){
     let res=await fetch('https://icanhazdadjoke.com/',{ headers:{'Accept':'application/json'   }})
     let data= await res.json()
    console.log(data)
}
getdata()

