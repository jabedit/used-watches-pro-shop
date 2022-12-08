import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import GetLaptopByLaptopId from '../../context/GetLaptopByLaptopId'

function BuyerBookedLaptopTableRow({ booked_laptop, i }) {
  const [get_lap, set_get_lap] = useState({})
  const product_id = booked_laptop.porduct_id
  const booking_time = booked_laptop.booking_time
  const { single_laptop, data, isLoading, refetch } = GetLaptopByLaptopId(
    product_id,
  )
  useEffect(() => {
    if (single_laptop) {
      set_get_lap(single_laptop[0])
    }
  }, [single_laptop])

  const { laptop_name, laptop_photo, brand_name, price } = get_lap
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
          data-tip={new Date(booking_time).toLocaleTimeString()}
        >
          {new Date(booking_time).toLocaleDateString()}
        </div>
      </td>
      <td className="px-4 py-3">$ {price}</td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          {true ? (
            <div className="tooltip tooltip-accent" data-tip="Available">
              <button className="btn capitalize btn-xs bg-blue-500 border-none text-white hover:text-white">
                purchase now
              </button>
            </div>
          ) : (
            <div className="tooltip tooltip-warning" data-tip="Sold">
              <button className="btn capitalize btn-xs bg-yellow-500 border-none text-white hover:text-white">
                Sold
              </button>
            </div>
          )}
          <div className="tooltip tooltip-error" data-tip="Remove My Order">
            <AiFillDelete
              //   onClick={() => delete_laptop_handel(_id)}
              className="text-2xl cursor-pointer text-red-500 hover:text-red-600"
            />
          </div>
        </div>
      </td>
    </tr>
  )
}

export default BuyerBookedLaptopTableRow
