import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function AddCategoryModal({ modalOpen, setToClose, refetch }) {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data, e) => {
    const formData = new FormData()
    formData.append('image', data.photo[0])

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgBB}`
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const category_data = {
            category_name: data.category_name,
            category_img: result.data.url,
          }

          fetch(`https://watch-house.vercel.app/product-category`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(category_data),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success('New Category Added Success', {
                  position: 'top-center',
                  autoClose: '2000',
                  draggable: true,
                })
                refetch()
              }
            })
            .catch((err) => console.log(err))
        }
      })
    e.target.reset()
  }
  return (
    <div>
      <input type="checkbox" id="add_category_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="add_category_modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <h3 className="text-lg font-bold">Add New Product Category</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4 ">
                <label htmlFor="porduct-name">Category Name</label>
                <input
                  {...register('category_name', { required: true })}
                  id="porduct-name"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full mt-2"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="add-photo">Add photo (80*80 px)</label>
                <input
                  {...register('photo', { required: true })}
                  id="add-photo"
                  type="file"
                  className="file-input file-input-bordered w-full"
                />
              </div>

              <button
                type="submit"
                // onClick={() => setToClose(!modalOpen)}
                className="btn btn-info text-white w-full my-4"
              >
                Add new Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCategoryModal
