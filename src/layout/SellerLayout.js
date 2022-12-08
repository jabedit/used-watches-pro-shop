import React from 'react'
import Nav from '../component/nav/Nav'
import Footer from '../page/footer/Footer'
import SellerDashboard from '../page/SellerDashboard/SellerDashboard'

function SellerLayout() {
  return (
    <>
      <Nav />
      <SellerDashboard />
      <Footer />
    </>
  )
}

export default SellerLayout
