class Student{
    static college='XYZ'
    static count=0
    constructor(firstName,lastName){
        Student.count++
        this.firstName=firstName
        this.lastName=lastName
        console.log(Student.count)
    }
    fullName(){
        return this.firstName + ' ' + this.lastName
    }
    dressColor(){
        return 'red'
    }
}

// console.log(typeof Student)
let sunil=new Student('sunil','kumar')
console.log(sunil.dressColor())
// console.log(sunil.fullName())
// console.log(sunil.firstName)
class SectionA extends Student{
    constructor(firstName,lastName,age){
        super(firstName,lastName)
        this.age=age
    }
    dressColor(){
        return 'green'
    }
}

let pankaj=new SectionA('pankaj','singh',12)

console.log(pankaj.age)
console.log(pankaj.fullName())
console.log(pankaj.dressColor())
let gagan=new Student('gagan','mathur')
console.log(Student.college)





