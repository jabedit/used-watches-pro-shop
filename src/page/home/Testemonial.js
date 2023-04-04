import React from 'react'
import CardOne from '../../component/card/CardOne.component'
import testmonial_svg from '../../media/img/testmonila-bg.svg'
import testimoninal_1 from '../../media/img/testimonial/testimoninal-1.webp'
import testimoninal_2 from '../../media/img/testimonial/testimoninal-2.webp'
import testimoninal_3 from '../../media/img/testimonial/testimoninal-3.webp'
import HeaderOne from '../../component/header/HeaderOne'
import Pragarphone from '../../component/pragraph/Pragarphone'
function Testemonial() {
  const testmonial_data = [
    {
      id: 1,
      title: 'Best Service Proveder',
      details:
        'One of best marketplace for selling and buying products. Any one can easily find product and selling also buying porduct. This market will be one of the biggest marketplace in the world ',
      img: testimoninal_1,
      name: 'Mr Rock',
      position: 'Seller',
    },
    {
      id: 2,
      title: 'Get Best Laptop From ',
      details:
        'This marketplace is finding for best laptop, Sell and buying also thats the place for finding for awesome laptops and seller is good for, you have to welcome to get your best laptop for needed',
      img: testimoninal_2,
      name: 'Mr Jhone',
      position: 'Buyer',
    },
    {
      id: 3,
      title: 'Good Marketplace',
      details:
        ' This market will be one of the biggest marketplace in the world, any one can find his best laptops ',
      img: testimoninal_3,
      name: 'Rased Karim',
      position: 'User',
    },
  ]
  return (
    <div style={{ backgroundImage: `url(${testmonial_svg})` }}>
      <div className="bg-blue-50/[.8] ">
        <div className="flex justify-center ">
          <div className="flex flex-col justify-center items-center max-w-7xl">
            <HeaderOne>Testimonial</HeaderOne>
            <Pragarphone>What our Customers Say</Pragarphone>
            <div className="flex flex-col items-center justify-evenly my-12 md:px-10 md:flex-row space-y-8 lg:space-y-0 ">
              {testmonial_data.map((e) => (
                <CardOne key={e.id} testimonial={e} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testemonial
