import React from 'react'
import Question from './Question'

function Questions({state,dispatch}) {
  return (
    <div>
      {state.map((question,i)=>{
        return <Question {...question} key={question.id} dispatch={dispatch} />
      })}
    </div>
  )
}

export default Questions
