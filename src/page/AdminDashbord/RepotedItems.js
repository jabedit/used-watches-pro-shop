import React from 'react'
import ReportedTable from '../../component/table/ReportedTable'

function RepotedItems() {
  return (
    <div>
      <div>
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Repoted Items
          </h1>
        </div>
      </div>
      <div className="flex justify-center"></div>
      <ReportedTable />
    </div>
  )
}

export default RepotedItems
