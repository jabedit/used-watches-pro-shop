import React from 'react'

import AllLaotopTable from '../../component/table/AllLaotopTable'

function AllLaptops() {
  return (
    <div>
      <div>
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            All Laptops
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here is all laptops thats Sealers Added
          </p>
        </div>
      </div>
      <div className="flex justify-center"></div>
      <AllLaotopTable />
    </div>
  )
}

export default AllLaptops
