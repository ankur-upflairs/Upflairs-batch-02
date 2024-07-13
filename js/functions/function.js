//function is a block of code to perform specific task that can be reused
//function decclaration
// function printHello(){
//     console.log('hello world!')
// }
// calling of a function 
// printHello()
// printHello()
// printHello()

//functions with arguments/parameters
// make a function to print the sum of any two no.
// function sum(a,b){
//     console.log('sum of ',a,b ,'is',a+b)
// }
// sum(12,14)
// sum(15,12)
// function with return statement 
// make a function to calculate simple interest 
// function interest(p,t,r){
//      let i=(p*t*r)/100
//      return i
// }
// let i=interest(100,1,20)
// console.log(i)
// console.log(interest(1000,2,20))

//make a function to print table of a no.

// function table(n){
//     for(let i=1;i<=10;i++)
//     document.write(n*i,"<br>")
// }
// table(10)
// table(20)
//how to declare a function
// function declaration => allow hoisting
// sum(10,20)
// function  sum(a,b){
//     console.log(a+b)
// }
//function expression => does not allow hoisting
// hoisting => function can be used before declaration
// square(10) //can't call before declaration
// let square=function (n){
//     console.log(n*n)
// }
// square(20)

// arrow function 
// does not allow hoisting 
//don't have  own this keyword 
// let cube= (n)=>{
//     console.log(n**3)
//     return n**3
// }
// cube(10)
// if there is single line code in arrow fn than { } canbe omitted
// let cube= (n)=>console.log(n**3)
// cube(20)
//if there is single line than it already return it
// let cube= (n)=>n**3
// let cube20=cube(20)
// console.log(cube20)
//if there is single argument in arrow fn than () canbe omitted
// let cube= n=>console.log(n**3)
// cube(30)
// cube(5)
//make a function to calculate sum of natural nos. till n

// let sumOfNaturalNo=n=>{
//     let sum=0
//     for(let i=1;i<=n;i++){
//         sum+=i//1+2+3+4
//     }
//     return sum
// }
// console.log(sumOfNaturalNo(6))
//imediately invoked function expression (iife)
// ( function(){
//        console.log('hello')
//     }
// )();

//callback function =>cb fn is a function that is passed as
// an argument to another fn and called inside it 

// let interest=function(p,t,r){
//     return (p*t*r)
// }
// let bank=(interest,rate)=>{
//     let calculatedInterest=interest(1000,2,rate)
//     return calculatedInterest
// }
// let sbi=bank(interest,12)
// console.log(sbi)

// let a=function (p,t){
//     return (p*t*10)/100
// }
// let b=function (p,t){
//     return (p*t*20)/100
// }


// let bank=function (interest,p,t){
//     let i=interest(p,t)
//     return i 
// }
// let premium=bank(a,100,1)
// console.log(premium)

// let normal=bank(b,100,1)
// console.log(normal)

// closure= > it is fn created inside a function and closure have 
// access to variable of outer fn 


function outer(){
    let x=10
    function closureFunction(){
        console.log(x)
    }
    closureFunction()
}
outer()
//make a function to calculate factorial of a no



