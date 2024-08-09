import React, { useRef, useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';
let types = ['short', 'paragraph', 'file', 'multiple']
function Question({ id, type, question, options, require }) {
    const [questionText, setQuestionText] = useState('')
    const [selectedType, setselectedType] = useState('short')
    const [showTypes, setshowTypes] = useState(false)

    const typeList = useRef(null)
    console.log(showTypes)
    return (
        <div className='question'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <input type="text" onChange={(e) => setQuestionText(e.target.value)} value={question} />
                </div>
                <div>
                    <ImageIcon />
                </div>
                <div onClick={()=>setshowTypes(!showTypes)} >
                    <span  >{selectedType}</span>
                    {showTypes && <ul style={{
                        position: 'absolute', top: '10px',
                        listStyle: 'none',
                        left: typeList.current?.parentElement.offsetLeft
                    }}>
                        {types.map((v, i) => {
                            return <li onClick={() => setselectedType(v)}
                                style={{ margin: '20px', cursor: 'pointer' }} key={i} >{v} <hr></hr></li>
                        })}
                    </ul>}
                </div>
            </div>
            {type == 'short' && <div>
                <div style={{borderBottom:'1px solid',padding:'10px',width:'50%'}}>
                short answer text
                </div>
            </div>}
            <div>
                <span style={{cursor:'pointer'}}><DeleteIcon style={{fontSize:'30px'}}/></span>
            </div>
        </div>
    )
}

export default Question
