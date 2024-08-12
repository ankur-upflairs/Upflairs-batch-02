import React, { Fragment, useEffect, useRef, useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';

let types = ['short', 'paragraph', 'file', 'multiple']
function Question({ id, type, question, options, require , dispatch }) {
    const [questionText, setQuestionText] = useState('')
    const [selectedType, setselectedType] = useState('short')
    const [showTypes, setshowTypes] = useState(false)

    function changeType() {
     dispatch({ type: 'changeType', id, selectedType })   
    }
    useEffect(() => {
        changeType()
       }, [selectedType])

    function deleteQuestion(id) {
        dispatch({ type: 'delete', id })
    }
    function changeOptionText(text,index) {
        dispatch({ type: 'changeOptionText', id,text,index })
    }
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

            {type == 'multiple' && <div>
                
            {options.map((v, i) => {
                    return <Fragment key={i} >
                    <input type="text" onChange={(e) => changeOptionText(e.target.value,i)} value={v} style={{width:'50%'}} placeholder="option" />
                    <span onClick={() => dispatch({ type: 'deleteOption', id, index: i })}
                     style={{margin:'10px',cursor:'pointer'}}><DeleteIcon style={{fontSize:'30px'}}/></span>
                    <br />
                    {/* <button onClick={()=>dispatch()}>add option...</button> */}
                    </Fragment>
                })}
                    <button onClick={()=>dispatch({type:'addOption',id})}>add option...</button>

                </div>}


            <div>
                <span style={{cursor:'pointer'}} onClick={() => deleteQuestion(id)}><DeleteIcon style={{fontSize:'30px'}}/></span>
            </div>
        </div>
    )
}

export default Question
