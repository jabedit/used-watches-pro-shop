import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserSystem } from '../../context/FirebaseContext'

function SigninWith() {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location?.state?.from?.pathname || '/'

  const { sign_in_google_pop_up, setLoading } = useContext(UserSystem)
  // google sing in by pop up
  const google_sign_in_handeler = () => {
    sign_in_google_pop_up()
      .then((user) => {
        if (user.user.uid) {
          const userdata = {
            name: user.user.displayName,
            email: user.user.email,
            user_img: user.user.photoURL,
            password: '',
            userRole: 'user',
            user_verified: false,
            uid_get: user.user.uid,
          }

          // get user form db
          fetch(
            `https://watch-house.vercel.app/user-get-by-google-id/v1?uid=${user.user.uid}`,
          )
            .then((r) => r.json())
            .then((res) => {
              // if user didnot in data base
              if (res.uid_get !== user.user.uid) {
                fetch('https://watch-house.vercel.app/users', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(userdata),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.acknowledged) {
                      navigate(from, { replace: true })
                      toast.success('Successfuly Create User', {
                        position: 'top-center',
                        draggable: true,
                        autoClose: 200,
                      })
                      setLoading(false)
                    }
                  })
                  .catch((err) => {
                    navigate('/registration')
                    toast.error('Can not Create User', {
                      position: 'top-center',
                      draggable: true,
                      autoClose: 200,
                    })
                    setLoading(false)
                  })
              } else {
                const data_for_update = {
                  name: user.user.displayName,
                  email: user.user.email,
                  user_img: user.user.photoURL,
                }
                // if user already have databse just update data
                fetch(`https://watch-house.vercel.app/users`, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data_for_update),
                })
                  .then((r) => r.json())
                  .then((res) => {
                    if (res.acknowledged) {
                      navigate(from, { replace: true })
                      toast.success('Successfuly Login Google User', {
                        position: 'top-center',
                        draggable: true,
                        autoClose: 200,
                      })
                      setLoading(false)
                    }
                  })
                  .catch((er) => {
                    navigate('/registration')
                    setLoading(false)
                  })
              }
            })
            .catch((er) => console.log(er))
        }
      })
      .catch((err) => {
        setLoading(false)
        toast.error('Something is wrong try again', {
          position: 'top-center',
          draggable: true,
          autoClose: 200,
        })
      })
  }
  return (
    <button
      onClick={google_sign_in_handeler}
      className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md hover:shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2  "
    >
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          className="w-6 h-6"
          viewBox="0 0 48 48"
        >
          <defs>
            <path
              id="a"
              d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
            ></path>
          </defs>
          <clipPath id="b">
            <use href="#a" overflow="visible"></use>
          </clipPath>
          <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"></path>
          <path
            clipPath="url(#b)"
            fill="#EA4335"
            d="M0 11l17 13 7-6.1L48 14V0H0z"
          ></path>
          <path
            clipPath="url(#b)"
            fill="#34A853"
            d="M0 37l30-23 7.9 1L48 0v48H0z"
          ></path>
          <path
            clipPath="url(#b)"
            fill="#4285F4"
            d="M48 48L17 24l-4-3 35-10z"
          ></path>
        </svg>
        <span className="ml-4"> Log in with Google As a User</span>
      </div>
    </button>
  )
}

export default SigninWith
