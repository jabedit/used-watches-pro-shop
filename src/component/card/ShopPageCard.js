import React, { useState } from 'react'
import AllUserLoadByProductID from '../../context/AllUserLoadByProductID'

import { GoUnverified, GoVerified } from 'react-icons/go'
import { toast } from 'react-toastify'

function ShopPageCard({ laptop, book_handeler }) {
  const [reported_id, set_reported_id] = useState([])
  const {
    brand_name,
    laptop_name,
    laptop_photo,
    orginal_price,
    price,
    condition,
    product_added_time,
    used_year,
    user_db_id,
  } = laptop

  const { all_users } = AllUserLoadByProductID(user_db_id)
  const seller_info = all_users?.[0]
  const report_to_admin = async (e) => {
    await fetch(
      `https://watch-house.vercel.app/get-reported-laptop-by-id/v1?id=${e._id}`,
    )
      .then((r) => r.json())
      .then((data) => {
        if (data.length > 0) {
          set_reported_id(data)
        }
      })
      .catch((er) => console.log(er))

    if (reported_id.length <= 0) {
      fetch(`https://watch-house.vercel.app/reported-laptop/v1`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(e),
      })
        .then((r) => r.json())
        .then((res) => {
          if (res.acknowledged) {
            toast.success('Reported to admin success', {
              position: 'top-center',
              autoClose: 300,
              draggable: true,
            })
          }
        })
        .catch((er) => {})
    } else {
      return toast.error('Sorry! This Laptop Allready Roported to Admin!', {
        position: 'top-center',
        autoClose: 300,
        draggable: true,
      })
    }
  }

  return (
    <div className=" w-full py-6 px-3">
      <div className="bg-white shadow-xl rounded-lg  ">
        <div
          className="bg-cover bg-center h-56 p-4"
          style={{
            backgroundImage: `url(${laptop_photo})`,
          }}
        >
          <div className="flex items-end gap-1 flex-col">
            <div
              className="tooltip tooltip-warning"
              data-tip="Add to Wish list"
            >
              <svg
                className="h-6 w-6 fill-current rounded-full p-1 text-white bg-teal-500 hover:h-7 hover:w-7 transition-all cursor-not-allowed"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
              </svg>
            </div>
            <div className="tooltip tooltip-error" data-tip="Report To Admin">
              <svg
                onClick={() => report_to_admin(laptop)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 rounded-full p-1 text-white bg-rose-700 hover:h-7 hover:w-7 transition-all cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
            {laptop_name}
          </p>
          <div className="flex justify-between mt-1">
            <div className="flex-1">
              <p className="text-sm text-gray-900">Sell Price</p>
              <p className="text-2xl text-blue-700">${price}</p>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">Orginal Price</p>
              <p className="text-2xl text-blue-700">${orginal_price}</p>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex-1 inline-flex items-center">
              <p>
                <span className="text-gray-900 font-bold">Brand:</span>{' '}
                {brand_name}
              </p>
            </div>
            <div className="flex-1 inline-flex items-center">
              <p className="capitalize">
                <span className="text-gray-900 font-bold ">Condition</span>{' '}
                {condition}
              </p>
            </div>
          </div>
        </div>
        <div className="flex p-4 border-t border-gray-300 text-gray-700">
          <div className="flex-1">
            <p className="text-sm text-gray-900">Post Time</p>
            <div className="text-sm text-gray-900">
              <div
                className="tooltip"
                data-tip={new Date(product_added_time).toLocaleTimeString()}
              >
                <span className="btn btn-xs border-none">
                  {new Date(product_added_time).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-900 capitalize">purchase date</p>
            <p className="text-sm text-gray-900">{used_year}</p>
          </div>
        </div>
        {/* booking hander  */}
        <div className="py-3 border-t flex justify-center">
          <label
            onClick={() => book_handeler(laptop)}
            htmlFor="add_booking_modal"
            className="btn btn-sm bg-blue-500 border-none text-white"
          >
            Add to Booking
          </label>
        </div>
        <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
          <div className="text-xs capitalize font-bold text-gray-600 tracking-wide">
            Seller info
          </div>
          <div className="flex items-center pt-2">
            <div
              className="bg-cover bg-center w-12 h-12 rounded-full mr-3"
              style={{
                backgroundImage: `url(${
                  seller_info?.user_img
                    ? seller_info?.user_img
                    : 'https://i.ibb.co/F6Nr8W3/not-Found-Img.webp'
                })`,
              }}
            ></div>
            <div className="grow">
              <div className="flex justify-between">
                <div className="mr-4 order-2">
                  {seller_info?.user_verified ? (
                    <div
                      className="tooltip tooltip-success"
                      data-tip={`Verified Seller`}
                    >
                      <GoVerified className="mx-auto text-blue-500 text-2xl" />
                    </div>
                  ) : (
                    <div
                      className="tooltip tooltip-error"
                      data-tip={`Not Verified Seller`}
                    >
                      <GoUnverified className="mx-auto text-red-500 text-2xl" />
                    </div>
                  )}
                </div>
                <p className="font-bold text-gray-900 order-1">
                  {seller_info?.name}{' '}
                </p>
              </div>
              <p className="text-sm text-gray-700">{seller_info?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPageCard
