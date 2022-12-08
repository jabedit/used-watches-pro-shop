import React from "react";
import { Link } from "react-router-dom";
import watch from '../../../media/watch.jpg'
import './Banner.css'
const Banner = () => {
  return (
    <div id="#banner" className="bg-sky-50 px-3  md:px-10">
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
          className=" md:w-1/2  rounded-2xl"
            src={watch}
            alt=''
          />
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold ">Shop as you like!</h1>
            <p className="py-6">
            You buy the weed products of your choice from our resellers. Our goal is the satisfaction of our users. We are always dedicated to serving our owners and resellers. Happy shopping
            </p>
            <Link to='/shop'><button className="btn  bg-slate-900 ">Shop Now</button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
