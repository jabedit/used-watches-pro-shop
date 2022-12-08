import React from 'react'
import UserCard from '../../component/card/UserCard'
import AllUsersLoad from '../../context/AllUsersLoad'
import PuffLoader from 'react-spinners/PuffLoader'

function AllUsers() {
  const { all_users, isLoading, refetch } = AllUsersLoad('user')
  refetch()
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="mb-10">
          <h2 className="text-blue-500 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Our all Users
          </h2>
        </div>

        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="flex justify-center">
              <PuffLoader color="#36b0d6" />
            </div>
          ) : (
            <table className="table-auto w-full text-left ">
              <thead>
                <tr>
                  <th className="px-4 py-3 w-10  title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Sr.
                  </th>
                  <th className="px-4 py-3 w-32 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Photo
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Email
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Action
                  </th>
                  <th className="px-4 py-3 w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                    Verified
                  </th>
                </tr>
              </thead>
              <tbody>
                {all_users?.map((e, i) => (
                  <UserCard key={e._id} users={e} sr={i} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllUsers
