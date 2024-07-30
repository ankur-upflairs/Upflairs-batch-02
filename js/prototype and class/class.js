class Student{
    static college='XYZ'
    static count=0
    #firstName
    constructor(firstName,lastName){
        Student.count++
        this.#firstName=firstName
        this.lastName=lastName
        console.log(Student.count)
    }
    get fullName(){
        let _fullName=this.#firstName + ' ' + this.lastName
        return _fullName
    }
    set fees(fee){
        if(!Number.isInteger(fee)) {
            throw Error('fee must be integer')
            return
        }
        this._fees=fee
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
// console.log(pankaj.fullName())
console.log(pankaj.dressColor())
let gagan=new Student('gagan','mathur')
console.log(Student.college)

console.log(pankaj.fullName)
pankaj.fees=23000
console.log(pankaj._fees)




