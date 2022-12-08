import React from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'
import swal from 'sweetalert'
import DeleteLaptops from '../../context/DeleteLaptops'
import GetReportedItems from '../../context/GetReportedItems'
function ReportedTable() {
  const { laptops, isLoading, refetch } = GetReportedItems()
  const { delete_func } = DeleteLaptops()
  const delete_laptop_handeler = (e) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, It will be deleted for everywerere',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://watch-house.vercel.app/reported-laptop/v1?id=${e}`, {
          method: 'DELETE',
        })
          .then((r) => r.json())
          .then((res) => {
            refetch()
            if (res.deletedCount > 0) {
              delete_func(e)
                .then((r) => r.json())
                .then((r) => {
                  swal('Good! Your Laptop has been deleted!', {
                    icon: 'success',
                  })
                })
                .catch((er) => console.log(er))
            }
          })
          .catch((er) => console.log(er))
      }
    })
  }
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="w-full mx-auto overflow-auto">
            <div className="flex justify-center absolute left-1/2 top-2/3">
              {isLoading && <PropagateLoader color="#36d7b7" />}
            </div>
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead className="">
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Sr.
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Laptop Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Brand
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Upload Time
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    In Addvertise
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {laptops?.map((e, i) => (
                  <tr key={e._id}>
                    <td className="px-4 py-3">{i + 1}</td>
                    <td className="px-4 py-3">{e.laptop_name}</td>
                    <td className="px-4 py-3">{e.brand_name}</td>
                    <td className="px-4 py-3">
                      <div
                        className="tooltip"
                        data-tip={new Date(
                          e.product_added_time,
                        ).toLocaleTimeString()}
                      >
                        {new Date(e.product_added_time).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {e.promotion_product ? (
                        <div
                          className="tooltip tooltip-success"
                          data-tip="This product is Live in home Page"
                        >
                          <button className="btn capitalize btn-xs bg-green-600 border-none text-white hover:text-white">
                            In Live
                          </button>
                        </div>
                      ) : (
                        <div
                          className="tooltip tooltip-primary"
                          data-tip="This porduct is not Live"
                        >
                          <button className="btn btn-xs capitalize bg-primary border-none text-white hover:text-white">
                            Not Promoted
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1 ">
                        <div
                          className="tooltip tooltip-top tooltip-error"
                          data-tip="Delete"
                        >
                          <button
                            onClick={() => delete_laptop_handeler(e._id)}
                            className="btn btn-xs bg-red-600 border-none hover:bg-red-500"
                          >
                            Del
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto"></div>
        </div>
      </section>
    </div>
  )
}

export default ReportedTable
