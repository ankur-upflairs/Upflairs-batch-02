
let li6=document.createElement('li')
li6.innerText='element 6'
let ul=document.querySelector('ul')
// ul.append(li6)
ul.prepend(li6)
let box=document.createElement('div')
box.className='box'
box.innerHTML='this is  a box'
ul.before(box)
ul.after(box)
// console.log(ul.childNodes)
// console.log(ul.children[0])
let ulChildren=ul.children
console.log(ulChildren)

let list=document.querySelectorAll('li')

// list.forEach((el)=>{
//     el.addEventListener('click',function(){
//         alert(this.innerText)
//     })
// })

// for(const el of ulChildren){
//         el.addEventListener('click',function(){
//         alert(this.innerText)
//     })
// }
// console.log(li6)
// li6.remove()
// console.log(li6)
// ul.insertAdjacentElement('afterbegin',li6)
// ul.insertAdjacentElement('afterend',li6)
// ul.insertAdjacentElement('beforebegin',li6)
// ul.insertAdjacentElement('beforeend',li6)

// const li2 = li6.parentElement.children[2]
// console.log(li6.parentElement)
// console.log(li2.nextElementSibling)
// console.log(li2.previousElementSibling)
// console.log(li2.closest('ul'))






