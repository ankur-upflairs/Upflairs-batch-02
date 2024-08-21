import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import {Home,About,Services,ContactUs,Mobile,Web} from './pages'
// import Home from './pages/Home'
// import About from './pages/About'
// import Services from './pages/Services'
// import ContactUs from './pages/ContactUs'
// import Mobile from './pages/Mobile'
// import Web from './pages/Web'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to={'/'} >Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'} >About</NavLink>
          </li>
          <li>
            <NavLink to={'/services'} >Services</NavLink>
          </li>
          <li>
            <NavLink to={'/contactus'} >Contact Us</NavLink>
          </li>
        </ul>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} >
            <Route path='mobile-development' element={<Mobile />} />
            <Route path='web-development' element={<Web />} />
          </Route>
          <Route path='contactus' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
