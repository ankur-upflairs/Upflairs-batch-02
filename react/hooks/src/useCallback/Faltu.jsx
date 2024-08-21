import React, { memo } from 'react'

function Faltu({fullName}) {
    console.log('re-render')
  return (
    <div>
     hello {fullName()}
    </div>
  )
}

export default memo(Faltu)


