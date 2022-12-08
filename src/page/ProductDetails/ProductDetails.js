import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ShopPageCard from '../../component/card/ShopPageCard'
import BookedNowModal from '../../component/modal/BookedNowModal'

function ProductDetails() {
  const [products, setProducts] = useState([])
  const [porduct, set_product] = useState({})
  const loader = useLoaderData()

  useEffect(() => {
    fetch(`https://watch-house.vercel.app/laptops/count?id=${loader._id}`)
      .then((data) => data.json())
      .then((result) => setProducts(result))
  }, [loader._id])

  const book_handeler = (e) => {
    set_product(e)
  }
 
  return (
    <div>
      <div className="my-4 container mx-auto">
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <p className="text-indigo-500 lg:text-lg font-semibold text-center mb-2 md:mb-3">
              Shop Page
            </p>

            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Here is all{' '}
              <span className="text-blue-600">{loader.category_name}</span>{' '}
              {products.length <= 1 ? 'Laptop' : 'Laptops'}
            </h2>
          </div>
          <div className="flex justify-center">
            {/* {isLoading && <FadeLoader color="#36d7b7" />} */}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {products?.map((e) => (
            <ShopPageCard
              key={e._id}
              laptop={e}
              book_handeler={book_handeler}
            />
          ))}
        </div>
        <>{<BookedNowModal porduct={porduct} />}</>
      </div>
    </div>
  )
}

export default ProductDetails
