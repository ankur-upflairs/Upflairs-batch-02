import React from 'react'

function CurlyBrackets() {
    //for writing javascript inside jsx use {}
    let name= 'sunil'
    //we can't use if-else and loop inside {}
    //we can call a fn and use ternary operator
    function fullName(name){
        return name+ ' ' + 'kumar'
    }
  return (
    <div>
      <p>my name is {name}</p>
      <p>and my full name is {fullName('sunil')}</p>
      <p>and my age is {12+12}</p>
    </div>
  )
}

export default CurlyBrackets
