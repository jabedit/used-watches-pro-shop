import React from 'react'
import AllLaptopsLoad from '../../context/AllLaptopsLoad'
import PropagateLoader from 'react-spinners/PropagateLoader'
import LoadUserbyProductidTable from '../card/SimpleComponet/LoadUserbyProductid.Table'
import DeleteLaptops from '../../context/DeleteLaptops'
import swal from 'sweetalert'

function AllLaotopTable() {
  const { all_laptops, isLoading, refetch } = AllLaptopsLoad()
  const { delete_func } = DeleteLaptops()

  // delete laptop
  const delete_laptop_handeler = (e) => {
    swal({
      title: 'Are you sure?',
      text:
        'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        delete_func(e)
          .then((r) => r.json(r))
          .then((r) => {
            refetch()
            if (r.deletedCount > 0) {
              swal('Poof! Your imaginary file has been deleted!', {
                icon: 'success',
              })
            }
          })
          .catch((er) => console.log(er))
      } else {
        swal('Your imaginary file is safe!')
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
                    Seller Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Upload Time
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {all_laptops?.map((e, i) => (
                  <tr key={e._id}>
                    <td className="px-4 py-3">{i + 1}</td>
                    <td className="px-4 py-3">{e.laptop_name}</td>
                    <td className="px-4 py-3">{e.brand_name}</td>
                    <td className="px-4 py-3">
                      <LoadUserbyProductidTable user_db_id={e.user_db_id} />
                    </td>
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

export default AllLaotopTable
