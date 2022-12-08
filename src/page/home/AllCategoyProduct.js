import { PuffLoader } from 'react-spinners'
import Categorycard from '../../component/card/Category.card'
import HeaderOne from '../../component/header/HeaderOne'
import Pragarphone from '../../component/pragraph/Pragarphone'
import LoadCategory from '../../context/LoadCategory'
import proudcts_bg from '../../media/img/proudcts-bg.svg'
function AllCategoyProduct() {
  const { category, data, isLoading, refetch } = LoadCategory()

  return (
    <section
      className="text-gray-600 body-font"
      style={{ backgroundImage: `url(${proudcts_bg})` }}
    >
      <div className="container px-5 pb-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <HeaderOne>Our All brands</HeaderOne>
          <Pragarphone>We Are selling this products</Pragarphone>
        </div>
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
  )
}

export default AllCategoyProduct
