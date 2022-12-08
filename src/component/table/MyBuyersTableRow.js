import React, { useEffect, useState } from 'react'
import AllUserLoadByProductID from '../../context/AllUserLoadByProductID'

function MyBuyersTableRow({ booked_porduct, i }) {
  const [booking_get_user, set_booking_set_user] = useState({})
  const {
    booking_user,
    phone_number,
    metting_location,
    booking_user_email,
  } = booked_porduct

  //   booking user by id
  const { all_users, isLoading, refetch } = AllUserLoadByProductID(booking_user)

  useEffect(() => {
    if (booking_user) {
      set_booking_set_user(all_users?.[0])
    }
  }, [booking_user, all_users])

  return (
    <tr>
      <td className="px-4 py-3">{i + 1}</td>
      <td className="px-4 py-3">{booking_get_user?.name}</td>
      <td className="px-4 py-3">{booking_user_email}</td>
      <td className="px-4 py-3">{phone_number}</td>
      <td className="px-4 py-3">{metting_location}</td>
    </tr>
  )
}

export default MyBuyersTableRow
