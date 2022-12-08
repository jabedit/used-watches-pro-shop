import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../component/nav/Nav'
import Footer from '../page/footer/Footer'

function MainLayoutRoutes() {
  return (
    <>
      <Nav />
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayoutRoutes
