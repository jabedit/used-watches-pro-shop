import React, { useEffect, useState } from 'react'
import MyBuyersTableRow from '../../component/table/MyBuyersTableRow'
import GetCurrentUserByLoginEmail from '../../context/GetCurrentUserByLoginEmail'

function MyBuyer() {
  const [db_user, set_db_user] = useState({})
  const [booked_porduct, set_booked_porduct] = useState([])

  // get current user form db
  const { current_db_user, isLoading, refetch } = GetCurrentUserByLoginEmail()
  useEffect(() => {
    if (current_db_user) {
      set_db_user(current_db_user)
    }
  }, [current_db_user])
  const current_db_user_id = db_user?._id

  // get seller products whitch buyer booked
  useEffect(() => {
    if (current_db_user_id) {
      fetch(
        `https://watch-house.vercel.app/booked-laptop-get-by-seller-id/v1?seller_id=${current_db_user_id}`,
      )
        .then((r) => r.json())
        .then((res) => set_booked_porduct(res))
        .catch((er) => console.log(er))
    }
  }, [current_db_user_id])

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5  mx-auto">
          <div className="flex flex-col text-center w-full mb-50">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              My Buyers
            </h1>
          </div>
          <div className=" w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Sr.
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Email
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Phone Number
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {booked_porduct.map((e, i) => (
                  <MyBuyersTableRow booked_porduct={e} key={e._id} i={i} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MyBuyer
