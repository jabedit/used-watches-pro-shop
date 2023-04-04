import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { FadeLoader, PuffLoader } from 'react-spinners'
import Categorycard from '../../component/card/Category.card'
import ShopPageCard from '../../component/card/ShopPageCard'
import BookedNowModal from '../../component/modal/BookedNowModal'
import AllLaptopsLoad from '../../context/AllLaptopsLoad'
import LoadCategory from '../../context/LoadCategory'
import './shop.css'
function ShopPage() {
  const { all_laptops, isLoading } = AllLaptopsLoad()
  const [porduct, set_product] = useState({})
  const { category } = LoadCategory()

  const book_handeler = (e) => {
    set_product(e)
  }

  return (
    <div className="my-4 container mx-auto">
      <Helmet>
        <title>Shop Page</title>
      </Helmet>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <p className="text-indigo-500 lg:text-lg font-semibold text-center mb-2 md:mb-3">
            Shop Page
          </p>

          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Here is all Laptops you can booking any Laptop
          </h2>
        </div>
        <div>
          {' '}
          <section className="text-gray-600 body-font bg-slate-200 py-2 rounded-lg">
            <div className="container px-5   mx-auto">
              <div className="flex justify-center">
                {isLoading && <PuffLoader color="#105bdb" />}
              </div>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 allcategory_products_custom_css">
                {category?.map((e) => (
                  <Categorycard key={e._id} category={e} />
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="flex justify-center">
          {isLoading && <FadeLoader color="#36d7b7" />}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
        {all_laptops?.map((e) => (
          <ShopPageCard key={e._id} laptop={e} book_handeler={book_handeler} />
        ))}
      </div>
      <>{<BookedNowModal porduct={porduct} />}</>
    </div>
  )
}

export default ShopPage
