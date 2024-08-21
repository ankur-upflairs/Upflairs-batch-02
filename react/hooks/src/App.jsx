import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompA from './context/ComA'
// import Counter from './memo/Memo'
import UseMemo from './usememo/UseMemo'
import Counter from './useCallback/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <CompA/> */}
     {/* <Counter/> */}
     {/* <UseMemo/> */}
     {/* <Counter/> */}
     
    </>
  )
}

export default App
