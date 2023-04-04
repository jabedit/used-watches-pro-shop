import React from 'react'
import { Link } from 'react-router-dom'
import subtle_prism from '../../media/img/subtle-prism.svg'
function NotFound() {
  return (
    <div
      className="bg-white min-h-[80vh] py-6 sm:py-8 lg:py-12 mt-1"
      style={{ backgroundImage: `url(${subtle_prism})` }}
    >
      <div className="flex justify-center items-center max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="w-full sm:w-96 h-96 flex justify-center items-center bg-blue-100 shadow-lg rounded-lg overflow-hidden relative mx-auto">
          <div className="flex flex-col justify-center items-center relative p-8 md:p-16">
            <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">
              404
            </h1>

            <p className="text-blackmd:text-lg text-center mb-8">
              The page you’re looking for doesn’t exist.
            </p>

            <Link
              to="/"
              href="#"
              className="inline-block text-white bg-blue-500 hover:bg-blue-600 focus-visible:ring ring-indigo-300 active:text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
