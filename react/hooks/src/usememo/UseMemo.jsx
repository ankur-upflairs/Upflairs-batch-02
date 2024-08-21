import React,{useCallback, useMemo, useState} from 'react'

function UseMemo() {
    const [count,setcount]=useState(0)
    let n=50
    let memofact=useMemo(()=>fact(n),[n])
    function fact(n) {
        let f=1
        for (let i = 1; i <= n; i++) {
           f*=i            
        }
        console.log(f)
        return f
    }
  return (
    <div>
      <button onClick={()=>setcount(count+1)}>{count}</button>
      {memofact}
    </div>
  )
}

export default UseMemo





