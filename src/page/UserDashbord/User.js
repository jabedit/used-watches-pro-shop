import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserSystem } from '../../context/FirebaseContext'
import UsersLoad from '../../context/UsersLoad'
import UserEditModal from './UserEditModal'

function User() {
  const { log_out, user, set_db_user } = useContext(UserSystem)
  const user_email = user?.email

  const navigate = useNavigate()

  // load user by database
  const { users_data, isLoading, refetch } = UsersLoad(user_email)

  // logout
  const logout_hendeler = () => {
    log_out()
      .then(() => {
        set_db_user(null)
        refetch()
        toast.success('Successfuly Logout', {
          position: 'top-right',
          draggable: true,
          autoClose: 200,
        })
        navigate('/')
      })
      .catch((er) => console.log(er))
  }

  return (
    <div className="container mx-auto my-32">
      <div>
        <div className="bg-white relative shadow rounded-lg w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
          <div className="flex justify-center">
            <img
              src={
                users_data?.user_img
                  ? users_data?.user_img
                  : 'https://i.ibb.co/F6Nr8W3/not-Found-Img.webp'
              }
              alt=""
              className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
            />
          </div>

          <div className="mt-16 relative">
            {/* <div className="absolute right-4">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm bg-blue-500 border-none "
              >
                Edit
              </label>
             <UserEditModal users_data={users_data} refetch={refetch} /> 
            </div> */}
            <h1 className="font-bold text-center text-3xl text-gray-900 capitalize">
              {user?.displayName
                ? user?.displayName
                : users_data
                ? users_data?.name
                : 'Un Registers'}
            </h1>
            <p className="text-center text-sm text-gray-400 font-medium">
              User Role:-{' '}
              <span className="capitalize">{users_data?.userRole}</span>
            </p>
            <p>
              <span></span>
            </p>
            <div className="my-5 px-6">
              <p className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">
                {user_email}
              </p>
            </div>
            <div className="flex justify-between items-center my-5 px-6">
              <a
                href="a"
                className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
              >
                Facebook
              </a>
              <a
                href="a"
                className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
              >
                Twitter
              </a>
              <a
                href="a"
                className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
              >
                Instagram
              </a>
              <a
                href="a"
                className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
              >
                Email
              </a>
            </div>

            <div className="">
              
             <div className='flex justify-end'>
             <button
                  onClick={logout_hendeler}
                  className="btn btn-sm btn-error my-4 text-white bg-red-600"
                >
                  Log out
                </button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
