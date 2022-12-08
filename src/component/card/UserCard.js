import { GoUnverified, GoVerified } from 'react-icons/go'
import { toast } from 'react-toastify'
import swal from 'sweetalert'
function UserCard({ users, sr }) {
  const hendel_veryfied = (e) => {
    const all_data = {
      user_verified: true,
      user_id: e,
    }
    swal({
      title: 'Are you sure?',
      text: 'Once You veryfied user You Never be Resote',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://watch-house.vercel.app/users/veryfy`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(all_data),
        })
          .then((r) => r.json())
          .then((res) =>
            swal('Good! User Sucessfully Verified!', {
              icon: 'success',
            }).then((re) =>
              toast.success('Verified!', {
                position: 'top-right',
                autoClose: 100,
              }),
            ),
          )
          .catch((err) => console.log(err))
      }
    })
  }

  // delte user by update
  const handel_delete = (e) => {
    swal({
      title: 'Are you sure?',
      text: 'Once You Delete user You Never be Resote',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://watch-house.vercel.app/users?id=${e}`, {
          method: 'DELETE',
        })
          .then((r) => r.json())
          .then((res) => {
            if (res.deletedCount > 0) {
              swal('Good! User Sucessfully Deleted!', {
                icon: 'success',
              }).then((r) =>
                toast.success('Deleted Account!', {
                  position: 'top-right',
                  autoClose: 200,
                }),
              )
            }
          })
          .catch((err) => {
            toast.error('User Delete Failed!', {
              position: 'top-center',
              autoClose: 200,
            })
          })
      }
    })
  }

  return (
    <tr>
      <td className="px-4 py-3">{sr + 1}</td>
      <td className="px-4 py-3">
        <div className="w-12 md:w-16 bg-gray-200 rounded-full overflow-hidden shadow-lg ">
          <img
            src={
              users?.user_img
                ? users?.user_img
                : 'https://i.ibb.co/F6Nr8W3/not-Found-Img.webp'
            }
            loading="lazy"
            alt=" by Radu Florin"
            className="w-full align-middle object-cover object-center"
          />
        </div>
      </td>
      <td className="px-4 py-3 text-indigo-500 md:text-lg font-bold ">
        <div className="tooltip" data-tip={users.userRole}>
          <button>{users.name}</button>
        </div>
      </td>
      <td className="px-4 py-3 text-lg text-gray-900">
        <span className="hidden lg:inline-block">{users.email}</span>
        <div className="tooltip" data-tip={users.email}>
          <span className="lg:hidden">{users.email.slice(0, 10)}...</span>
        </div>
      </td>
      <td className="px-4 py-3 text-lg text-gray-900">
        <div className="tooltip" data-tip={`Delete ${users.userRole}`}>
          <button
            onClick={() => handel_delete(users._id)}
            className="btn btn-sm btn-error text-white"
          >
            DEL
          </button>
        </div>
        {!users.user_verified && (
          <button
            onClick={() => hendel_veryfied(users._id)}
            className="btn capitalize btn-sm bg-blue-500 ml-3 border-none text-white"
          >
            verify
          </button>
        )}
      </td>
      <td className="px-4 py-3 w-10 text-center">
        {users?.user_verified ? (
          <div
            className="tooltip tooltip-success"
            data-tip={`Verified ${users.userRole}`}
          >
            <GoVerified className="mx-auto text-blue-500 text-2xl" />
          </div>
        ) : (
          <div
            className="tooltip tooltip-error"
            data-tip={`Not Verified ${users.userRole}`}
          >
            <GoUnverified className="mx-auto text-red-500 text-2xl" />
          </div>
        )}
      </td>
    </tr>
  )
}

export default UserCard
