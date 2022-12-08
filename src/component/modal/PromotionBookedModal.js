import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { UserSystem } from '../../context/FirebaseContext'

function PromotionBookedModal({ porduct }) {
  const [seller, set_seller] = useState([])
  const [db_user, db_set_user] = useState({})
  const { user } = useContext(UserSystem)

  useEffect(() => {
    if (porduct?.user_db_id) {
      fetch(
        `https://watch-house.vercel.app/users-get?userid=${porduct?.user_db_id}`,
      )
        .then((res) => res.json())
        .then((data) => set_seller(data[0]))
        .catch((er) => console.log(er))
    }
  }, [porduct.user_db_id])

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://watch-house.vercel.app/user-get-by-email/v1?email=${user?.email}`,
      )
        .then((r) => r.json())
        .then((data) => db_set_user(data))
        .catch((er) => console.log(er))
    }
  }, [user?.email])

  const { email: db_user_email, name: db_user_name } = db_user

  const { name, email } = seller
  const modal_submit = (e) => {
    let milliseconds = new Date().getTime()
    e.preventDefault()
    const target = e.target
    const phone_number = target.phone_number.value
    const metting_location = target.metting_location.value
    const doc = {
      phone_number,
      metting_location,
      porduct_id: porduct._id,
      seller: seller._id,
      booking_user: db_user._id,
      booking_user_email: db_user_email,
      booked: true,
      booking_time: milliseconds,
      purchase: false,
    }

    fetch('https://watch-house.vercel.app/booked-laptop/v1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doc),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.acknowledged) {
          toast.success('Successfuly booked!', {
            position: 'top-center',
            autoClose: 1000,
            draggable: true,
          })
        }
      })
      .catch((er) => console.log(er))

    e.target.reset()
  }
  return (
    <div>
      <input
        type="checkbox"
        id="add_booking_modal_pormote"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="add_booking_modal_pormote"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{porduct.laptop_name}</h3>

          <div className="mt-4">
            <img className="w-1/2 mx-auto" src={porduct.laptop_photo} alt="" />
          </div>
          <div className="border-b border-gray-300">
            <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
              Basic Info.
            </p>
            <div className="flex justify-between mt-1">
              <div className="flex-1">
                <p className="text-sm text-gray-900">Sell Price</p>
                <p className="text-xl text-green-500">${porduct.price}</p>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Orginal Price</p>
                <p className="text-xl text-red-500">${porduct.orginal_price}</p>
              </div>
            </div>
            <div className="flex justify-between mt-2 pb-1">
              <div className="flex-1 inline-flex items-center">
                <p>
                  <span className="text-gray-900 font-bold">Brand:</span>{' '}
                  {porduct.brand_name}
                </p>
              </div>
              <div className="flex-1 inline-flex items-center">
                <p className="capitalize">
                  <span className="text-gray-900 font-bold ">Condition</span>{' '}
                  {porduct.condition}
                </p>
              </div>
            </div>
          </div>
          {/* seller info  */}
          <div className="border-b border-gray-300 py-1">
            <p className="uppercase tracking-wide text-sm font-bold text-slate-700">
              Seller Info.
            </p>
            <div className="flex justify-between mt-1">
              <div className="flex-1">
                <p className="text-sm text-gray-900 font-semibold">
                  Seller Name
                </p>
                <p className="text-sm text-blue-700">{name}</p>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 font-semibold">
                  Seller Email
                </p>
                <p className="text-sm text-blue-700">{email}</p>
              </div>
            </div>
          </div>
          {/* user info  */}
          <div className="border-b border-gray-300 py-1">
            <p className="uppercase tracking-wide text-sm font-bold text-slate-700">
              About You
            </p>
            <div className="flex justify-between mt-1">
              <div className="flex-1">
                <p className="text-sm text-gray-900 font-semibold">Your Name</p>
                <p className="text-sm text-blue-700">{db_user_name}</p>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 font-semibold">
                  Your Email
                </p>
                <p className="text-sm text-blue-700">{db_user_email}</p>
              </div>
            </div>
          </div>
          {/* form  */}
          <form onSubmit={modal_submit}>
            <div className="mt-4">
              <label htmlFor="your-phone-number">Your Phone Number</label>
              <input
                id="your-phone-number"
                type="text"
                name="phone_number"
                required
                placeholder="Enter Your Phone Number"
                className="input input-bordered w-full mt-2"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="your-metting-location">
                Add Metting Location
              </label>
              <input
                id="your-metting-location"
                type="text"
                name="metting_location"
                required
                placeholder="Enter metting location"
                className="input input-bordered w-full mt-2"
              />
            </div>

            <button
              type="submit"
              className="btn btn-info text-white w-full my-4"
            >
              Add to Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PromotionBookedModal
