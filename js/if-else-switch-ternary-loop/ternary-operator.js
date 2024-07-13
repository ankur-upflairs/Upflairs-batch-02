let n = parseInt(prompt('enter a no.'))

//ternary operator => short hand of if-else used for single line code execution
//condition ? statement1 : statement2

// n>=18 ? console.log('adult') : console.log('minor')

let status = n >= 18 ? 'adult' : 'minor'


let n1 = parseInt(prompt('enter a no.1'))
let n2 = parseInt(prompt('enter a no.2'))
let operator = prompt('enter operator');
if (operator == '+') {
    console.log(n1 + n2)
}
else if (operator == '-') {
    console.log(n1 - n2)
}
else if (operator == '*') {
    console.log(n1 * n2)
}
else if (operator == '/') {
    console.log(n1 / n2)
}



