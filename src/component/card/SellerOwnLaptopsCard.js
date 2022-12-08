import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaRegShareSquare } from 'react-icons/fa'
import { toast } from 'react-toastify'
import swal from 'sweetalert'
import DeleteLaptops from '../../context/DeleteLaptops'

function SellerOwnLaptopsCard({ laptops, refetch, i }) {
  const {
    _id,
    laptop_name,
    brand_name,
    laptop_photo,
    product_added_time,
    price,
    promotion_product,
  } = laptops

  // delete laptops
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
      }
    })
  }

  // pormote laptops
  const promote_now_handeler = (e) => {
    swal({
      title: 'Are you sure?',
      text: 'If you promote your file It will be display in Home Page',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const all_data = {
          promotion_product: true,
          laptop_id: e,
        }
        fetch(
          `https://watch-house.vercel.app/laptops/promotion-product/v1?laptop_id=${e}`,
          {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(all_data),
          },
        )
          .then((r) => r.json())
          .then((r) => {
            refetch().then((nex) => {
              if (r.acknowledged) {
                swal('Successfuly Live Your Watch in Home Page', {
                  icon: 'success',
                })
              }
            })
          })
          .catch((er) => console.log(er))
      }
    })
  }
  return (
    <tr>
      <td className="px-4 py-3">{i + 1}</td>
      <td className="px-4 py-3">
        <img
          alt="laptop"
          className="w-16 h-16 bg-gray-100 object-cover object-center border-2 border-blue-100 flex-shrink-0 rounded-full mr-4"
          src={laptop_photo}
        />
      </td>
      <td className="px-4 py-3">
        <h2 className="text-black title-font font-medium">{laptop_name}</h2>
      </td>
      <td className="px-4 py-3">
        <p className="text-gray-700">{brand_name}</p>
      </td>
      <td className="px-4 py-3">
        <div
          className="tooltip tooltip-accent"
          data-tip={new Date(product_added_time).toLocaleTimeString()}
        >
          {new Date(product_added_time).toLocaleDateString()}
        </div>
      </td>
      <td className="px-4 py-3">$ {price}</td>
      <td className="w-64 px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          {promotion_product ? (
            <div
              className="w-full tooltip tooltip-success"
              data-tip="This product is Promoted in home Page"
            >
              <button className="w-full btn capitalize btn-xs bg-green-600 border-none text-white hover:text-white">
                In Live
              </button>
            </div>
          ) : (
            <div
              className="w-full tooltip tooltip-primary"
              data-tip="You can Advertise this product in Home Page"
            >
              <button
                onClick={() => promote_now_handeler(_id)}
                className="!w-full btn btn-xs capitalize bg-primary border-none text-white hover:text-white"
              >
                Promote Now
              </button>
            </div>
          )}
          <div className="tooltip tooltip-error" data-tip="Delete">
            <AiFillDelete
              onClick={() => delete_laptop_handel(_id)}
              className="text-2xl cursor-pointer text-red-500 hover:text-red-600"
            />
          </div>

          {!true ? (
            <div className="w-full tooltip tooltip-warning" data-tip="Sold">
              <button className="w-full btn capitalize btn-xs bg-yellow-500 border-none text-white hover:text-white">
                Sold
              </button>
            </div>
          ) : (
            <div className="w-full tooltip tooltip-accent" data-tip="Available">
              <button className="w-full btn capitalize btn-xs bg-blue-500 border-none text-white hover:text-white">
                Available
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  )
}

export default SellerOwnLaptopsCard
