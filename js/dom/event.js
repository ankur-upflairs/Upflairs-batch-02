//when something occurs than it is known as events
//mouse=>events=>
//click event=> onclick=fn();
let paragraph=document.getElementById('para')

function changeText(){
    paragraph.innerText='text changed on click'
}

//change the background color of a paragraph on a button
// https://udn.realityripple.com/docs/Web/Events
let paragraph1=document.getElementById('para1')

function changeBg(){
    paragraph1.style.background='red'
}

function removeBg(){
    paragraph1.style.background=''
}


let btn=document.querySelectorAll('.btn')[1]

// btn.addEventListener('mouseenter',changeBg)
// btn.addEventListener('mouseleave',removeBg)

function changeBackground(){
    paragraph1.classList.toggle('d')
}
btn.addEventListener('mouseenter',changeBackground)
btn.addEventListener('mouseleave',changeBackground)

//btn=hello=> bye => hello