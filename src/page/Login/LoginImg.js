import React from 'react'
import login_img from '../../media/img/login.svg'

function LoginImg() {
  return (
    <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src={login_img}
        alt=""
      />
    </div>
  )
}

export default LoginImg
