import React, { useState } from 'react'
import './FormTitle.css'
function FormTitle({ dispatch }) {
    const [isTyping, setIsTyping] = useState(false)
    const [title, setTitle] = useState('Google Form')
    const [note, setNote] = useState('Google Form description')
    function addnote() {
        // title.trim().length || note.trim().length ? dispatch({ type: 'add', title, note }) : null
        setIsTyping(false)
        // setTitle(''); setNote('')
    }
    return (
        <div className='inputbox' >
            <div className='not-typing'>
                {isTyping && <input  type='text' onChange={(e) => setTitle(e.target.value)} value={title} />} <br />
                <input type="text"                 
                onChange={(e) => setNote(e.target.value)} value={note} onFocus={() => { setIsTyping(true) }} />
                {isTyping && <div>
                    <button onClick={addnote}>Close</button>
                </div>}
            </div>

        </div>
    )
}

export default FormTitle
