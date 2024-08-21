import React, { createContext } from 'react'
import CompB from './CompB'

export const userContext=createContext()
function CompA() {
    let user={name:'pankaj'}
  return (
    <userContext.Provider value={user} >
    <div>
      <CompB/>
    </div>
    </userContext.Provider>
  )
}

export default CompA
