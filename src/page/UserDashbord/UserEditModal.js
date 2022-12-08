import { toast } from 'react-toastify'

function UserEditModal({ users_data, refetch }) {
  const name = users_data?.name
  const email = users_data?.email
  const user_img = users_data?.user_img
  const onSubmit_handel = (data) => {
    data.preventDefault()
    const formData = new FormData()
    const target = data.target
    const name = target.name.value
    const email = target.email.value
    const user_img = target.user_img
    formData.append('image', user_img.files[0])

    fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgBB}`, {
      method: 'POST',
      'Content-Type': 'application/json',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const all_data = {
            name,
            email,
            user_img: result.data.url,
          }
          fetch(`https://watch-house.vercel.app/users`, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(all_data),
          })
            .then((res) => res.json())
            .then((r) => {
              toast.success('Update Success', {
                position: 'top-center',
                autoClose: 200,
                draggable: true,
              })
              refetch()
            })
            .then((err) => {})
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Edit Profile</h3>
          <div>
            <form onSubmit={onSubmit_handel}>
              <div className="mt-3">
                <label htmlFor="name">Change Your Name</label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  defaultValue={name}
                  className="input input-bordered w-full my-2 "
                />
              </div>
              <div className="mt-1">
                <label htmlFor="email">Your Email</label>
                <input
                  name="email"
                  type="text"
                  id="email"
                  defaultValue={email}
                  disabled
                  readOnly
                  className="input input-bordered w-full my-2 !cursor-default "
                />
              </div>
              <div className="mt-1">
                <label htmlFor="user_img">Upload Your Photo</label>
                <input
                  name="user_img"
                  type="file"
                  id="user_img"
                  className="file-input file-input-bordered w-full my-2"
                />
              </div>
              <button className="btn btn-info w-full text-white mt-3 mb-5 ">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserEditModal
