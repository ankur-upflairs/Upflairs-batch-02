//object => object of key-value pair
//key must be a valid identifier or a string
//value can be any datatype including object and function
//key-value pair must be seperated by comma
let person={
    firstName:'ankit',
    lastName:'saini',
    age:30,
    isStudent:true,
    marks:[23,12,67,9],
    fullName:function(){
        return this.firstName + this.lastName
    }
}
//accessing object values
//dot notation=>
// console.log(person.firstName)
// console.log(typeof person)
//square notation
// console.log(person['marks'][2])
// console.log(person['age'])
// let key='age'
// console.log(person[key])
// console.log(Object.entries(person))//convert object to array
// let arr=[['name','pawan'],['age',90]]
// console.log(Object.fromEntries(arr))//convert array to object

// Object is reference data type 
// let obj=person //creates a reference to person
// obj.age=45
// console.log(person)
// let obj={...person}
// obj.class=12
// console.log(obj,person)
// let person1=Object.assign({},person)
// person1.class=12
// console.log(person1,person)

// adding a property to object 
// person.class=10
// console.log(person)
// const a={price:10}
// const b=45
// a.price=12
// console.log(a)




