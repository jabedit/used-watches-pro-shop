import React from 'react'
import { GoUnverified, GoVerified } from 'react-icons/go'
import AllUserLoadByProductID from '../../context/AllUserLoadByProductID'

function PromotionProductCard({ promote_laptops, book_handeler }) {
  const {
    _id,
    brand_name,
    laptop_name,
    laptop_photo,
    orginal_price,
    price,
    product_added_time,
    used_year,
    user_email,
    laptop_description,
    location,
    promotion_product,
    user_db_id,
  } = promote_laptops

  const { all_users, isLoading, refetch } = AllUserLoadByProductID(user_db_id)
  const user_verified = all_users?.[0]?.user_verified
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg  ">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={laptop_photo}
            alt={laptop_name}
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between">
            <div>
              <div
                className="tooltip tooltip-warning"
                data-tip={`This is Advertisement Products`}
              >
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {promotion_product && 'Advertisement'}
                </span>
              </div>
            </div>
            <div className="mr-4">
              {user_verified ? (
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
          </div>
          <h2 className="mt-2 font-bold">{laptop_name}</h2>
          <h2 className="mb-2 text-blue-500 font-semibold">{brand_name}</h2>
          <p className="text-sm">{laptop_description.slice(0, 120)}...</p>
          <div className="flex justify-between">
            <div className="mt-3 flex items-center">
              <span className="text-sm font-semibold">Sell Price</span>
              &nbsp;
              <span className="text-sm font-semibold text-red-600">$</span>
              <span className="font-bold text-xl text-red-600">{price}</span>
              &nbsp;
            </div>
            <div className="mt-3 flex items-center">
              <span className="text-sm font-semibold">Orginal Price</span>
              &nbsp;
              <span className="text-sm font-semibold text-yellow-600">$</span>
              <span className="font-bold text-xl text-yellow-600">
                {orginal_price}
              </span>
              &nbsp;
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-b text-xs text-gray-700">
          <div className="flex justify-between">
            <div className="flex-1">
              <span className="flex items-center mb-1">
                <i className="far fa-clock fa-fw mr-2 text-blue-600"></i>Upload
                time
              </span>
              <span className="flex items-center">
                <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>
                {new Date(product_added_time).toLocaleDateString()}{' '}
                {new Date(product_added_time).toLocaleTimeString()}
              </span>
            </div>
            <div className="flex-1">
              <span className="flex items-center mb-1">
                <i className="far fa-clock fa-fw mr-2 text-blue-600"></i>Used
                Time
              </span>
              <span className="flex items-center">
                <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>
                {used_year} <span className="mx-1 text-red-600"> to </span>
                {new Date(product_added_time).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 flex items-center justify-center text-sm text-gray-600">
          <label
            onClick={() => book_handeler(promote_laptops)}
            htmlFor="add_booking_modal_pormote"
            className="btn btn-sm w-full btn-accent text-white"
          >
            Booked Now
          </label>
        </div>
      </div>
    </div>
  )
}

export default PromotionProductCard
