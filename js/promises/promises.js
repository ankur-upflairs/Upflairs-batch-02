// promise is a way to handle asynchronous task 
//promise have 3 state 
// 1. pending 
// 2. rejected
// 3. fulfilled

// let promise = new Promise((resolve,reject)=>{
//     let x=6;
//      if(x==5){
//         resolve()
//      }
//      else{
//         reject()
//      }
// })

// promise.then(()=>console.log('fulfilled'))
// promise.catch(()=>console.log('rejected'))
// let n
// let takeNo=()=>{
//     n=prompt('enter a no.')

//     return new Promise((resolve, reject) => {
//         if(Number.isInteger(n)){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })
// }
// console.log('before promise',n)
// let promise=takeNo()
// promise.then(()=>console.log('input is integer'))
// promise.catch(()=>console.log('input is not integer'))
// console.log('after promise',n)



