import React, { useReducer } from 'react'
import FormTitle from './FormTitle'
import './googleform.css'
import Questions from './Questions'
import AddIcon from '@mui/icons-material/Add';

let initialState=[{
    id:1,type:'short',question:'', options:['option 1'] , require:false 
}]

let reducer=(state,action)=>{
     if(action.type=='addquestion'){
      let newId=state.length>0 ? state.at(-1).id+1 : 0
      return [...state,{id:newId,type:'short',question:'', options:['option 1'] , require:false }]
     }
     else if(action.type=='delete'){
      return state.filter((v)=>v.id!=action.id)
     }
     else if(action.type=='changeType'){
      return state.map((v)=>{
        if(v.id==action.id){
          return {...v,type:action.selectedType}
        }
        return v
      })
     }
     else if(action.type=='changeOptionText'){
      let questionIndex=state.findIndex((v)=>v.id==action.id)     
      let newOptions=[...state[questionIndex].options]
      newOptions[action.index]=action.text
      return state.map((v)=>{
        if(v.id==action.id){
          return {...v,options:newOptions}
        }
        return v
      })
     }
     else if(action.type=='addOption'){
      return state.map((v)=>{
        if(v.id==action.id){
          return {...v,options:[...v.options,'option']}
        }
        return v
      })
    }
    else if(action.type=='deleteOption'){
      let questionIndex=state.findIndex((v)=>v.id==action.id)     
      let newOptions=[...state[questionIndex].options]
      newOptions.splice(action.index,1)
      return state.map((v)=>{
        if(v.id==action.id){
          return {...v,options:newOptions}
        }
        return v
      })
    }
     return state
}
function GoogleForm() {
    const [state,dispatch] = useReducer( reducer , initialState )
  function addQuestion(){
    dispatch({type:'addquestion'})
  }
  return (
    <div className='google-form'>
       <FormTitle dispatch={dispatch}/>
       <Questions state={state} dispatch={dispatch} />
       <div style={{marginLeft:'auto',textAlign:'center'}}>
          <span style={{cursor:'pointer'}} onClick={addQuestion} ><AddIcon style={{fontSize:'50px'}} /></span>

       </div>
    </div>
  )
}

export default GoogleForm
