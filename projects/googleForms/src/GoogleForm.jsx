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
      let newId=state.at(-1).id +1
      return [...state,{id:newId,type:'short',question:'', options:['option 1'] , require:false }]
     }
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
