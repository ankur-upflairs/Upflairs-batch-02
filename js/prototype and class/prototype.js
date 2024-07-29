//constructor function

function Person(firstName,lastName){
    this.firstName=firstName
    this.lastName=lastName
        
    // this.fullName=function(){
    //     return this.firstName+' '+ this.lastName
    // }
}

Person.prototype.fullName=function(){
    return this.firstName+' '+ this.lastName
}


let person1=new Person('sunil','kumar')
//{}
//this
//prototype
// console.log(person1.firstName)
// console.log(person1.fullName())
// console.log(person1.__proto__== Person.prototype)
// console.log(Object.getPrototypeOf(person1))

Array.prototype.sum=function (){
   return this.reduce((acc,v,i)=>acc+v,0)
}


// let arr=[5,6,7]
// console.log(arr.sum())