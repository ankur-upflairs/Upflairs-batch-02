import React, { useState } from 'react'
import './inputBox.css'
function InputBox({dispatch}) {
   const [isTyping,setIsTyping]=useState(false)
   const [title,setTitle]=useState('')
   const [note,setNote]=useState('')
   function addnote(   ){
    title.trim().length || note.trim().length ? dispatch({type:'add',title,note}) :null
    setIsTyping(false)
    setTitle('');setNote('')
   }
  return (
    <div className='inputbox' >
        
            <div className='not-typing'>
                {isTyping && <input type='text' placeholder='Title...' onChange={(e)=>setTitle(e.target.value)} value={title}/>} <br/>
                <input type="text" placeholder='Take a Note...' onChange={(e)=>setNote(e.target.value)} value={note} onFocus={()=>{setIsTyping(true)}} /> 
                {isTyping && <div>
                    <button onClick={addnote}>Close</button>
                </div>}
            </div>
        
    </div>
  )
}

export default InputBox
