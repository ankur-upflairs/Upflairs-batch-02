//collection of datatypes
let arr=[3,'a',true ,null,{name:'ankit'}]
//element can be any datatype including object and array
//elements are seperated by comma
//elements can be accessed using index
//indexing start with 0
//indexing increases one by one
// console.log(arr[2])
//length=> total no. of elements
// console.log(arr.length)
//array are not actual datatype ,array is special type of 
//object
// console.log(typeof arr)

//array methods =>
let a=[3,4,6,7,8 ,15,45]
// console.log(a.concat([4,5]))//used to merge two arrays
// console.log(a.pop())//removes last element
// console.log(a.push(4,6,7))//add elements in last
// console.log(a.shift())//remove an element from start
// console.log(a.unshift(34,56))//add elements in last
// console.log(a)
// console.log(a.includes(9))//check if element is present
// console.log(a.indexOf(8))
// console.log(a.lastIndexOf(6))
// console.log(a.reverse())

//make an array of friends and show them in a list
//for-in // treverse through index

// for (const i in a) {
//     // console.log(i)
//     console.log(a[i])
// }
// for-of => treverse through elements 
// for (const i of a) {
//     console.log(i)
// }
let ul=document.querySelector('ul')
let friends=['ankit','vicky','padam','komal']
// ul.innerHTML=`<li>${friends[0]}</li>
//     <li>${friends[1]}</li>
//     <li>${friends[2]}</li>
//     <li>${friends[3]}</li>
// `
// let list=''
// for (const i of friends) {
//     list+=`<li>${i}</li>`
// }
// ul.innerHTML=list
// friends.forEach((value,index,arr)=>{
//     console.log(value,index,arr)
// })
//map returns new array
// let newArray=a.map((v,i)=>{
//     return v*2
// })
// console.log(newArray)
// let i=a.findIndex((v,i)=>{
//     return v>6
// })
// console.log(i)
// let el=a.find((v,i)=>{
//     return v>=10 && v<=20
// })
// console.log(el)
// console.log(a.sort((a,b)=>b-a))
// console.log(a.slice(2,4))
// console.log(a.slice(4))
// a.splice(2,0,49,12,90)
// //(index,deleted elements,elements to add)
// console.log(a)
//some, every ,filter 

// let filter=a.filter((v,i)=>{
//     return v>9
// })
// console.log(filter)
// console.log(a.some(v=>v>50))
// console.log(a.every(v=>v<50))
// let a=[3,4,6,7,8 ,15,45]

// let sum=a.reduce((accumalator,value,index,array)=>{
//     return accumalator+value
// },0)
// console.log(sum)
// 3 0 => 3
// 4 3 => 7
// 6 7 => 13
// 7 13 => 20
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// let a=[3,4,6,7,8 ,15,45] find the average of array

//join => convert an array to string

// console.log(friends.join('\n'))
let arr2=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


