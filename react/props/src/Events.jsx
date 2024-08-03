import React, { useState } from 'react'

function Events() {
    let [state,setState]=useState(0)
    //we can't change state directly
    //use set fn to change state variable
    //whenever state changes ui re-renders
    function increaseState(){
        setState(state+1)
    }


    let count=0
    let increase=()=>{
        count++
        console.log(count)
    }

    function handleClick(){
        alert('hello buddy!!!')
    }
    function showName(name){
        alert(`hello ${name}`)
    }
  return (
    <div>
        <p>{count}</p>
        <p>state is {state}</p>
        <button onClick={increaseState}>increaseState</button>
        <button onClick={increase}>increase</button>
      <button onClick={handleClick} >click here</button>
      <button onClick={()=>showName('pawan')}>show name </button>
    </div>
  )
}

export default Events
