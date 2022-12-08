import React from "react";
import { BiSupport } from "react-icons/bi";
import { IoReturnUpBack } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";

const FreeShipping = () => {
  return (
    <div className="px-3 md:px-20 bg-sky-200 py-10">
        <div className=" grid gap-7 grid-cols-1 md:grid-cols-3">
              <div className="bg-sky-100 py-7 px-5 shadow-lg rounded-lg flex justify-end items-center ">
                <p className="text-7xl text-sky-500"><BiSupport /></p>
                
                <div  className="pl-5">
                  <h3 className="text-2xl font-bold">Support 24/7 </h3>
                  <p>Contact us 24 hours a day, 7 day a weeks</p>
                </div>
              </div>
              <div className="bg-sky-100 py-7 px-5 shadow-lg rounded-lg flex justify-end items-center">
                <p className="text-7xl text-sky-500"><IoReturnUpBack /></p>
               
                <div className="pl-5">
                  <h3 className="text-2xl font-bold">30 days return</h3>
                  <p>Simplay return it within 24 days  for an exchange</p>
                </div>
              </div>
              <div className="bg-sky-100 py-7 px-5 shadow-lg rounded-lg flex justify-end items-center">
                <p className="text-7xl text-sky-500"><FaShippingFast /></p>
                <div className="pl-5">
                  <h3 className="text-2xl font-bold">Free Shipping</h3>
                   <p>Free Shipping  all us order or order above  $99</p>
                </div>
              </div>
        </div>
    </div>
  );
};

export default FreeShipping;
