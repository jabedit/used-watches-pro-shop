import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink, Outlet } from 'react-router-dom'
function BuyerDashboard() {
  let activeStyle = {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#2563ebe3',
    borderRadius: '5px',
  }
  return (
    <div className="">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="my-10 ">
          <div className="flex flex-col xl:flex-row overflow-hidde">
            <div className="flex flex-col xl:w-64 bg-blue-100 rounded-md">
              <ul className="flex flex-col round rounded-md p-3 gap-1 ">
                <NavLink
                  to="my-orders"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="p-3 bg-blue-200 shadow my-1 hover:bg-[#2563ebe3] hover:text-white rounded-md"
                >
                  My Order
                </NavLink>
                <NavLink
                  to="my-wishlists"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="p-3 bg-blue-200 shadow my-1 hover:bg-[#2563ebe3] hover:text-white rounded-md"
                >
                  My Wish Lists
                </NavLink>
              </ul>
            </div>
            <div className="flex flex-col flex-1 overflow-hidden">
              <main className="min-h-[60vh] relative flex-1 bg-blue-100 rounded-md xl:ml-4 overflow-y-auto focus:outline-none p-4">
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyerDashboard
