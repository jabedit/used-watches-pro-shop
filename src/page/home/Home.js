import { Helmet } from 'react-helmet'
import { FadeLoader } from 'react-spinners'
import PromotionProductLoad from '../../context/PromotionProductLoad'
import AllCategoyProduct from './AllCategoyProduct'
import PromotionLaptops from './PromotionLaptops'

import './home.css'

import FreeShipping from './FreeShiping/FreeShipping'
import Banner from './Banner/Banner'

function Home() {
  const { promote_laptops, isLoading } = PromotionProductLoad()

  return (
    <div>
      <Helmet>
        <title>Watch-house</title>
      </Helmet>
      <Banner />
      <div className="flex justify-center">
        {isLoading && <FadeLoader color="#36d7b7" />}
      </div>
      {promote_laptops?.length > 0 && (
        <PromotionLaptops promote_laptops={promote_laptops} />
      )}
      <AllCategoyProduct />
     <FreeShipping />
    </div>
  )
}

export default Home
