import React, { useContext } from 'react'
import { userContext } from './ComA'

function CompD() {
    let user=useContext(userContext)

  return (
    <div>
      hello {user.name}
    </div>
  )
}

export default CompD
