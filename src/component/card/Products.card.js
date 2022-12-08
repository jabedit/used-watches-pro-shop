import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { toast } from 'react-toastify'
import swal from 'sweetalert'
import DeleteLaptops from '../../context/DeleteLaptops'
import './Product.Card.css'
function ProductsCard({ laptops, refetch }) {
  const { _id, laptop_name, brand_name, laptop_photo } = laptops

  const { delete_func } = DeleteLaptops()
  const delete_laptop_handel = (e) => {
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
          .then((r) => r.json())
          .then((res) => {
            refetch()
            if (res.deletedCount > 0) {
              toast.success('Delete Success!', {
                position: 'top-center',
                autoClose: 200,
              })
            }
          })
          .catch((err) => console.log(err))
      } else {
        swal('Your imaginary file is safe!')
      }
    })
  }
  return (
    <>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer relative hidden_element ">
        <div className=" absolute right-2 show_element hidden rounded-tr-lg rounded">
          <div
            className="tooltip tooltip-right tooltip-warning"
            data-tip="Delete"
          >
            <AiFillDelete
              onClick={() => delete_laptop_handel(_id)}
              className="text-2xl text-red-500 hover:text-red-600"
            />
          </div>
        </div>

        <div className="h-full flex items-center bg-[#81C6E8] hover:bg-[#4eb9ef] transition-all border-blue-300 shadow-md border p-4 rounded-lg">
          <img
            alt="laptop"
            className="w-16 h-16 bg-gray-100 object-cover object-center border-2 border-blue-100 flex-shrink-0 rounded-full mr-4"
            src={laptop_photo}
          />
          <div className="flex-grow">
            <h2 className="text-black title-font font-medium">{laptop_name}</h2>
            <p className="text-gray-700">{brand_name}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsCard
