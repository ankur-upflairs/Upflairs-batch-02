//takes 2 args - cb fn and time in ms
//call - cb fn on certain intervals
// setInterval(function(){
//     console.log('hello')
// },1000)
//make a rotating div
//change css property that rotates a div 

let angle=0
let box=document.querySelector('.box1')

setInterval(()=>{
    angle++
    box.style.transform=`rotate(${angle}deg)`
},1)

//make a box and rotate this side by side 
//make a image slider/carousel
//a bouncing ball




