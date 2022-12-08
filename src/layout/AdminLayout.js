import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../component/nav/Nav'
import AdminDashbord from '../page/AdminDashbord/AdminDashbord'
import Footer from '../page/footer/Footer'

function AdminLayout() {
  return (
    <>
      <Nav />
      <AdminDashbord />
      <Footer />
    </>
  )
}

export default AdminLayout
