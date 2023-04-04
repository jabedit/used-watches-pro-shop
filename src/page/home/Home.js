import { Helmet } from 'react-helmet'
import { FadeLoader } from 'react-spinners'
import PromotionProductLoad from '../../context/PromotionProductLoad'
import AllCategoyProduct from './AllCategoyProduct'
import PromotionLaptops from './PromotionLaptops'
import Testemonial from './Testemonial'
import './home.css'
import HeroSection from './HeroSection'

function Home() {
  const { promote_laptops, isLoading } = PromotionProductLoad()

  return (
    <div>
      <Helmet>
        <title>Laptop Hunter</title>
      </Helmet>
      <HeroSection />
      <div className="flex justify-center">
        {isLoading && <FadeLoader color="#36d7b7" />}
      </div>
      {promote_laptops?.length > 0 && (
        <PromotionLaptops promote_laptops={promote_laptops} />
      )}
      <AllCategoyProduct />
      <Testemonial />
    </div>
  )
}

export default Home
