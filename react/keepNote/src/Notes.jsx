import React, { useEffect, useRef, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';

let colors = ['transparent', 'red', 'green', 'blue', 'purple', 'maroon', 'tan']

function Notes({ notes, dispatch }) {
    const [show, setShow] = useState(null)
    let [file, setFile] = useState(null)
    let [url, setUrl] = useState('')
    let input = useRef(null)

    useEffect(() => {
        if (file) {
            dispatch({ type: 'image', image: URL.createObjectURL(file), id: id })
        }
    }, [file])
    function showColor(i) {
        if (show == i) {
            setShow(null)
        } else setShow(i)

    }
    function handleImage() {
        input.current.click()
    }
    let handleImageChange = (e,id)=>{
        if (e.target.files[0]) {
            let url = URL.createObjectURL(e.target.files[0])
            // console.log(url)
            dispatch({ type: 'image', image: url, id: id })
        }
    }
    return (
        <div className='notes'>
            {notes.map((note, i) => {
                return <div style={{ backgroundColor: note.backgroundColor }} className='note'>
                    {note.image && <img src={note.image} width={'100%'} />}
                    <h3>{note.title}</h3>
                    <p>{note.note}</p>
                    <div className='options'>
                        <span onClick={() => dispatch({ type: 'delete', id: note.id })} style={{ cursor: 'pointer', marginRight: '10px' }}><DeleteIcon /></span>
                        <span onClick={() => showColor(i)} ><ColorLensIcon /></span>
                        <span onClick={handleImage}><ImageIcon /></span>
                    </div>
                    <input type="file" hidden ref={input} onChange={(e)=>handleImageChange(e,note.id)} />

                    {show == i && <div style={{ position: 'absolute', bottom: '-70px', visibility: 'visible' }}>
                        {colors.map(v => {
                            return <span onClick={() => dispatch({ type: 'color', id: note.id, color: v })}
                                style={{
                                    cursor: 'pointer',
                                    width: '50px', height: '50px', borderRadius: '50%',
                                    backgroundColor: v, display: 'inline-block', margin: '10px', border: '1px solid black'
                                }}></span>
                        })}
                    </div>}
                </div>
            })}
        </div>
    )
}

export default Notes
