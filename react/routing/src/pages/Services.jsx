import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>
      <Link to={'/services/mobile-development'}>mobile development</Link>
      <br />
      <Link to={'/services/web-development'}>web development</Link>
      <br />
      this is services page
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Services
