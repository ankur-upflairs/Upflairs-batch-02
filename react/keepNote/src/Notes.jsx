import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ColorLensIcon from '@mui/icons-material/ColorLens';

let colors=['red','green','blue','purple','maroon','tan']

function Notes({ notes, dispatch }) {
    const [show,setShow]=useState(false)
    return (
        <div className='notes'>
            {notes.map((note, i) => {
                return <div className='note'>
                    <h3>{note.title}</h3>
                    <p>{note.note}</p>
                    <div className='options'>
                        <span onClick={() => dispatch({ type: 'delete', id: note.id })} style={{ cursor: 'pointer',marginRight:'10px' }}><DeleteIcon /></span>
                        <span onClick={()=>setShow(!show)} ><ColorLensIcon/></span>
                    </div>
                    {show && <div style={{position:'absolute',bottom:'-60px',visibility:'visible'}}>
                        {colors.map(v=>{
                            return <span style={{width:'50px',height:'50px',borderRadius:'50%',
                                backgroundColor:v,display:'inline-block',margin:'10px'
                            }}></span>
                        })}
                    </div>}
                </div>
            })}
        </div>
    )
}

export default Notes
