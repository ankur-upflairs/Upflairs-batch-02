import Faltu from "./Faltu"
import React,{useCallback, useState} from 'react'

function Counter() {
    const [count,setcount]=useState(0)
    
    let fullNameCallback=useCallback(fullName,[])

    function fullName(){
        return 'padam bahadur'
    }
  return (
    <div>
      <button onClick={()=>setcount(count+1)}>{count}</button>
     <Faltu fullName={fullNameCallback}/>
    </div>
  )
}



export default Counter