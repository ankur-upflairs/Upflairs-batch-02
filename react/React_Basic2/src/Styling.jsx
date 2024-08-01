import React from 'react'

function Styling() {
    let styleObj={
        backgroundColor:'red',
        fontSize:'30px'
    }
  return (
    <div>
      <p style={styleObj}>Lorem ipsum dolor sit amet consectetur.</p>
      <p style={{color:'red'}}>this is paragraph  </p>
    </div>
  )
}

export default Styling
