import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from './redux/counter/counter'

function Counter() {
    let count=useSelector(state=>state.counter.count)
    let dispatch=useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(increase())}>increase</button>
        {count} 
      <button onClick={()=>dispatch(decrease())}>decrease</button>
    </div>
  )
}

export default Counter
