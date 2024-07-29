// function sum(){
//     // console.log(typeof arguments)
//     let x=0
//    for (const key in arguments) {
//     x+=arguments[key]
//    }
//     console.log(x)
// }

// sum(4,5,6)
// sum(6,9,'as',9)

// function p(){
//     for (const key in arguments) {
//         document.write(arguments[key])
//     }
// }

// p('5',8,'<br>',78)

// function appendInPage(){
//     for (const key in arguments) {
//        document.body.append(arguments[key])
//     }

// }
// appendInPage(5,6,9,'hello')


// function sum(a,b,...args){
//     console.log(args)
// }
// sum(6,7,8,10,12)


//max, min ,avg, sum
// calculate('avg',4,5,6,8)

function calculate(check, ...a) {
    switch (check) {
        case 'avg':
            let sum = 0;
            for (let i = 0; i < a.length; i++) {
                sum += a[i]
            }
            let count = a.length
            console.log(sum / count)
            break;
        case 'min':
            console.log(Math.min(...a))
            break;
        case 'max':
            console.log(Math.max(...a))
            break;
        case 'sum':
            let sum1 = 0;
            for (let j = 0; j < a.length; j++) {
                sum1 += a[j]
            }
            console.log(sum1)

    } 
}
// calculate('avg',4,54,78)
// calculate('min',4,54,78)
// calculate('max', 4, 54, 78)
// calculate('sum', 4, 54, 78)

// makeList('box','ol','banana','pineapple','orange')



