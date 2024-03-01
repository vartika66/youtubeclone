import React from 'react'
import Head from './Head'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <>
    
    <div className='flex'>
      <div className='w-64'>  <Sidebar/></div>
      <Outlet/>
    </div>
    </>
  )
}

export default Body