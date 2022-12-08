import React, { useContext } from 'react'
import { PuffLoader } from 'react-spinners'
import ProductsCard from '../../component/card/Products.card'
import { UserSystem } from '../../context/FirebaseContext'
import AllLaptopLoad from '../../context/AllLaptopLoad'
import SellerOwnLaptopsCard from '../../component/card/SellerOwnLaptopsCard'

function YourLaptop() {
  const { user } = useContext(UserSystem)
  const { laptops, isLoading: laptops_loading, refetch } = AllLaptopLoad(
    user?.email,
  )
  refetch()
  return (
    <div>
      <div className="flex justify-center">
        {laptops_loading && <PuffLoader color="#105bdb" />}
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5  mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Your All Watches here
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
                    Upload Time
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Sell Price
                  </th>
                  <th className="w-52 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {laptops?.map((e, i) => (
                  <SellerOwnLaptopsCard
                    key={e._id}
                    laptops={e}
                    refetch={refetch}
                    i={i}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default YourLaptop
