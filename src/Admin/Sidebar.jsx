import React from 'react'
import { Outlet } from 'react-router-dom'



const Sidebar = () => {
  return (
    <div>
    <h2>ADMIN PAGE</h2>
   
    <Outlet />
    </div>
  )
}

export default Sidebar