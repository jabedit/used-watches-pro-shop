import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import login_bg from '../../media/img/login-bg.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LoginImg from './LoginImg'
import SigninWith from './SigninWith'
import { UserSystem } from '../../context/FirebaseContext'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet'

function Registration() {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location?.state?.from?.pathname || '/'

  const [userRole, setUserRole] = useState('user')
  const {
    create_user_email_and_password,
    setLoading,
    db_user,
    set_db_user,
  } = useContext(UserSystem)
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    const email = data.email
    const password = data.password
    setLoading(true)
    create_user_email_and_password(email, password)
      .then((user) => {
        const userdata = {
          name: data.name,
          email,
          password,
          userRole,
          user_img: '',
          user_verified: false,
        }
        fetch('https://watch-house.vercel.app/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userdata),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success('Successfuly Create User', {
                position: 'bottom-left',
                draggable: true,
                autoClose: 200,
              })

              setLoading(false)
              navigate(from, { replace: true })
            }
          })
          .catch((err) => {
            toast.error('Can not Create User', {
              position: 'bottom-left',
              draggable: true,
              autoClose: 200,
            })
          })
      })
      .catch((err) => {
        setLoading(false)
        navigate('/registration')
      })
  }

  return (
    <div style={{ backgroundImage: `url(${login_bg})` }}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <section className=" overflow-hidden container mx-auto py-36 px-2">
        <div className="flex min- overflow-hidden">
          <LoginImg />
          <div className="flex flex-col justify-center flex-1 px-4 py-12 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white shadow-2xl border-blue-300 border-4 rounded-xl">
            <div className="w-full max-w-xl mx-auto lg:w-96">
              <div>
                <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
                  Registration as a{' '}
                  <span className="underline text-blue-600 capitalize">
                    {userRole}.
                  </span>
                </h2>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        Your Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="name"
                          name="name"
                          type="name"
                          autoComplete="name"
                          {...register('name', { required: true })}
                          placeholder="Your Name"
                          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          {...register('email', { required: true })}
                          placeholder="Your Email"
                          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 "
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          {...register('password', { required: true })}
                          placeholder="Your Password"
                          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 py-2 my-2 ">
                      <div
                        onClick={() => setUserRole('user')}
                        className={`rounded-md bg-stone-600 py-3 px-2 text-white font-semibold cursor-pointer ${
                          userRole === 'user' ? '!bg-blue-500' : ''
                        }`}
                      >
                        As a User
                      </div>
                      <div
                        onClick={() => setUserRole('seller')}
                        className={`rounded-md bg-stone-600 py-3 px-2 text-white font-semibold cursor-pointer ${
                          userRole === 'seller' ? '!bg-blue-500' : ''
                        }`}
                      >
                        As a Seller
                      </div>
                    </div>

                    <div className="flex items-center justify-between my-5">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          placeholder="Your password"
                          className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor="remember-me"
                          className="block ml-2 text-sm text-neutral-600"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm">
                        <a
                          href="a"
                          className="font-medium text-blue-600 hover:text-blue-500"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex capitalize items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >{`Registration as a ${userRole}`}</button>
                    </div>
                  </form>
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 text-neutral-600 bg-white">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div>
                    <SigninWith />
                  </div>
                  <div className="mt-4">
                    <h1>
                      Have Account
                      <Link
                        to="/login"
                        className="underline mx-2 text-blue-500"
                      >
                        Login
                      </Link>
                      Please.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Registration
