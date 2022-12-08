import { useState } from 'react'
import PromotionProductCard from '../../component/card/PromotionProductCard'
import HeaderOne from '../../component/header/HeaderOne'
import PromotionBookedModal from '../../component/modal/PromotionBookedModal'

function PromotionLaptops({ promote_laptops }) {
  const [promt_lap, setPromt_lap] = useState({})
  const book_handeler = (e) => {
    setPromt_lap(e)
  }

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <HeaderOne>Promotion Watch</HeaderOne>
          </div>

          <div className="antialiased bg-sky-100 text-gray-900 font-sans p-6">
            <div className="container mx-auto">
              <div className="flex flex-wrap -mx-4">
                {promote_laptops?.map((e) => (
                  <PromotionProductCard
                    key={e._id}
                    promote_laptops={e}
                    book_handeler={book_handeler}
                  />
                ))}
              </div>
            </div>
          </div>
          <PromotionBookedModal porduct={promt_lap} />
        </div>
      </div>
    </div>
  )
}

export default PromotionLaptops
