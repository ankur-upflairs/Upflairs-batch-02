import React, { useState } from 'react'
import Random from './Random'
function Counter() {
    const [count,setcount]=useState(0)
  return (
    <div>
      <button onClick={()=>setcount(count+1)}>{count}</button>
      <Random count={10}/>
    </div>
  )
}

export default Counter
