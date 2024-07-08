// var =>can be redeclare
var a;
var a;

//can be reassigned
a=5;
a=7;
//scope => global /function scope
{var e=5}
console.log(e)

//let =>can't be redeclare
let b;
//can be reassigned
b=4;
b=8;
//scope block
{
    let d=5
}
// console.log(d)

//const =>can't be redeclare
//can't reassigned
const c=45;
//scope block
