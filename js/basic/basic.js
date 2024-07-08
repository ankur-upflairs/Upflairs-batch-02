//inpage
//external js
// console.log('hello everyone')
//single line comment
/*multiline 
comment */
//variable => it is a container that stores a value
//let/var/const
//keyword variable_name;
let a; //declaring a variable
a=45;//assign a value
//semicolons are optional
//variable naming rules
//1. it can contain alphabet,no,$,_(underscore)
//2.can not start with no.
// let 1a;//can't start with no.
let a1;
// 3. can't use reserve keyword

//data type=>
//1.number=> integer or float
let b=23
let c=4.5

console.log(typeof c , c)
//2.string => normal text(collection of character)
//string can be written in single or double quotes
let d='ankur singh'
let e="hello"
console.log(e,d)
console.log(typeof e)

//3.boolean => represent a state in true or false
let f=true
let g=false
console.log(f,g)
console.log(typeof f)
//4.undefined => value is assigned
let i;
console.log(typeof i)
let j=undefined
console.log(typeof j)
//5.null =>value is assigned but value assigned is null
let k=null
console.log(typeof k)
//6.bigInt => 
let l=123435456576878n
console.log(typeof l)

//7.stybol =>
let symbol1=Symbol('a')
let symbol2=Symbol('a')
console.log(symbol1==symbol2)
console.log(typeof symbol1)

//object=>key-pair
let obj={
    name:'sunil',
    contact:{
        mobNo:34345
    },
    isAdult:true
}
//in object we can save any data type including object
//and functions
console.log(obj.name,obj.contact.mobNo)
console.log(typeof obj)
//Array => it is special collection of different datatype
let arr=[23,true,null,'xyz']

console.log(arr[3] )
console.log(typeof arr)



















