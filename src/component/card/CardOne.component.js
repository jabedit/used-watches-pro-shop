import React from 'react'

function CardOne({ testimonial }) {
  const { id, title, details, img, name, position } = testimonial
  return (
    <div className="flex flex-col justify-center items-center p-10 bg-white shadow w-[90%] md:w-[70%] lg:w-[30%] overflow-hidden">
      <div className="  "></div>
      <div className="flex flex-col -mt-20 -mr-[352px] hidden xl:block">
        <div className="w-2 h-14 bg-blue-500"></div>
        <div className="w-2 h-14 bg-green-500"></div>
      </div>
      <h1 className="text-xl tracking-tight font-semibold text-blue-600 uppercase   ">
        {id}. {title}
      </h1>
      <p className="text-black mt-3 text-center w-[90%] lg:w-[100%]">
        {details.slice(0, 100)}...
      </p>
      <img src={img} className="rounded-full mt-4" alt="" />
      <div className="flex flex-col -ml-[352px] mt-72 absolute hidden xl:block">
        <div className="w-2 h-14 bg-blue-500"></div>
        <div className="w-2 h-14 bg-green-500"></div>
      </div>
      <h1 className="text-lg font-semibold text-blue-600 uppercase mt-1">
        {name}
      </h1>
      <h1 className="text-lg font-semibold text-black uppercase -mt-1">
        {position}
      </h1>
    </div>
  )
}

export default CardOne
