import React, { useContext, useEffect, useState } from 'react'
import { PuffLoader } from 'react-spinners'
import BuyerBookedLaptopTableRow from '../../component/card/BuyerBookedLaptopTableRow'
import { UserSystem } from '../../context/FirebaseContext'
import BookedProductLoadByUserEmail from '../../context/userApi/BookedProductLoadByUserEmail'

function MyOrders() {
  const [booked_porducts_load, set_booked_products_load] = useState([])
  const { user } = useContext(UserSystem)
  const auth_user_email = user?.email

  const {
    booked_products,
    data,
    isLoading,
    refetch,
  } = BookedProductLoadByUserEmail(auth_user_email)

  useEffect(() => {
    if (booked_products) {
      set_booked_products_load(booked_products)
    }
  }, [booked_products])

  return (
    <div>
      {' '}
      <div>
        <div className="flex justify-center">
          {/* {laptops_loading && <PuffLoader color="#105bdb" />} */}
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5  mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                Your All Laptops here
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
                      Photo
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Product Name
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Brand Name
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Booked Time
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Laptop Price
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {booked_porducts_load?.map((e, i) => (
                    <BuyerBookedLaptopTableRow
                      key={e._id}
                      booked_laptop={e}
                      i={i}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MyOrders
