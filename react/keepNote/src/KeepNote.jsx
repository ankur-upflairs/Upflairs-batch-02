import React, { useReducer } from 'react'
import InputBox from './InputBox'
import Notes from './Notes'

let initialState=[
    {id:1,title:'something',note:'about something'}
]
let reducer=(state,action)=>{
    if(action.type==='add'){
        let newId=state.length>0? state.at(-1).id+1:1
        return [...state,{id:newId,title:action.title,note:action.note}]
    }
    else if(action.type=='delete'){
        return state.filter(v=>v.id!=action.id)
    }
}

function KeepNote() {
    const [notes,dispatch]=useReducer(reducer,initialState)
    
  return (
    <div style={{width:'60%',margin:'0px auto'}}>
      <InputBox dispatch={dispatch}/>
      <Notes notes={notes} dispatch={dispatch} />
    </div>
  )
}

export default KeepNote
