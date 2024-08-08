import React, { useReducer } from 'react'
import InputBox from './InputBox'
import Notes from './Notes'

let initialState=[
    {id:1,title:'something',note:'about something',backgroundColor:'transparent',image:''},
]
let reducer=(state,action)=>{
    if(action.type==='add'){
        let newId=state.length>0? state.at(-1).id+1:1
        return [...state,{id:newId,title:action.title,note:action.note,backgroundColor:'transparent'}]
    }
    else if(action.type=='delete'){
        return state.filter(v=>v.id!=action.id)
    }
    else if(action.type=='color'){
      console.log('dkjfk')
       return state.map(v=>{
           if(v.id==action.id){
               return {...v,backgroundColor:action.color}
           }
           else{
               return v
           }
       })
        // return state.map(v=>v.id==action.id?{...v,backgroundColor:action.color}:v)
    }
    else if(action.type=='image'){
      return state.map(v=>{
        if(v.id==action.id){
          console.log(action.image)
            return {...v,image:action.image}
        }
        else{
            return v
        }        
    })
    }
    return state
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
