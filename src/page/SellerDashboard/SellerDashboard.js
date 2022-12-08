import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink, Outlet } from 'react-router-dom'
function SellerDashboard() {
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
        <div className="my-10">
          <div className="flex overflow-hidde flex-col xl:flex-row gap-2">
            <div className="xl:w-64 bg-blue-100 rounded-md">
              <ul className="flex round rounded-md p-3 gap-3 flex-wrap xl:flex-col ">
                <NavLink
                  to="your-watches"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="p-3 bg-yellow-200 shadow my-1 hover:bg-[#2563ebe3] hover:text-white rounded-md"
                >
                  Your Watches
                </NavLink>
                <NavLink
                  to="add-watches"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="p-3 bg-yellow-200 shadow my-1 hover:bg-[#2563ebe3] hover:text-white rounded-md"
                >
                  Add new Watches
                </NavLink>
                <NavLink
                  to="my-buyer"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="p-3 bg-yellow-200 shadow my-1 hover:bg-[#2563ebe3] hover:text-white rounded-md"
                >
                  My Buyer
                </NavLink>
              </ul>
            </div>
            <div className="flex flex-col flex-1  overflow-hidden">
              <main className="min-h-[60vh] relative flex-1 bg-blue-100 rounded-md overflow-y-auto focus:outline-none p-4">
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellerDashboard
