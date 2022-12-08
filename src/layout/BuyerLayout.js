import React from 'react'
import Nav from '../component/nav/Nav'
import BuyerDashboard from '../page/BuyerDashboard/BuyerDashboard'
import Footer from '../page/footer/Footer'

function BuyerLayout() {
  return (
    <>
      <Nav />
      <BuyerDashboard />
      <Footer />
    </>
  )
}

export default BuyerLayout
