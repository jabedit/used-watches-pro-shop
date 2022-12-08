import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserSystem } from '../../context/FirebaseContext'
import LoadCategory from '../../context/LoadCategory'
import UsersLoad from '../../context/UsersLoad'

function AddLaptop() {
  const navigate = useNavigate()
  const { user } = useContext(UserSystem)
  const { category } = LoadCategory()
  const { users_data } = UsersLoad(user?.email)

  const { register, handleSubmit } = useForm()
  let milliseconds = new Date().getTime()

  const onSubmit = (data, e) => {
    const formData = new FormData()
    formData.append('image', data.laptop_photo[0])
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgBB}`
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const category_data = {
            laptop_name: data.laptop_name,
            brand_id: data.brand.split(' ')[0],
            brand_name: data.brand.split(' ')[1],
            laptop_photo: result.data.url,
            condition: data.condition,
            price: data.price,
            orginal_price: data.orginal_price,
            used_year: data.used_year,
            location: data.location,
            laptop_description: data.laptop_description,
            user_email: user?.email,
            user_google_uid: user.uid,
            user_db_id: users_data._id,
            promotion_product: false,
            product_added_time: milliseconds,
            reported_item: false,
          }
          fetch(`https://watch-house.vercel.app/laptops`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(category_data),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                toast.success('Product Added Success', {
                  position: 'top-center',
                  draggable: true,
                  autoClose: 300,
                })
                navigate('/seller-dahboard/your-watches')
              }
            })
            .catch(
              (err) =>
                toast.error('Product cant not added', {
                  position: 'top-center',
                  draggable: true,
                  autoClose: 300,
                }),
              navigate('/seller-dahboard/your-watches'),
            )
          e.target.reset()
        }
      })
  }
  return (
    <div className="lg:w-1/2 mx-auto bg-blue-50 px-8 py-4 rounded-md shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4">
          <label htmlFor="laptop-name">Watch Name</label>
          <input
            {...register('laptop_name', { required: true })}
            id="laptop-name"
            type="text"
            placeholder="Watch Name"
            className="input input-bordered w-full mt-2"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="brand">Select Brand</label>

          <select
            id="brand"
            className="select select-bordered w-full mt-2 "
            {...register('brand', { required: true })}
          >
            {category?.map((e) => (
              <option key={e._id} value={`${e._id} ${e.category_name}`}>
                {e.category_name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="laptop-photo">Add a Photo (500*500 px)</label>
          <input
            {...register('laptop_photo', { required: true })}
            id="laptop-photo"
            type="file"
            className="file-input file-input-bordered w-full"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="condition">What About Watch Condition?</label>

          <select
            id="condition"
            className="select select-bordered w-full mt-2"
            {...register('condition', { required: true })}
          >
            <option value="good">Good</option>
            <option value="new">New</option>
            <option value="used">Used</option>
            <option value="broken">Broken</option>
            <option value="avarage">Avarage</option>
          </select>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 ">
          <div className="mt-4">
            <label htmlFor="price">Price</label>
            <input
              {...register('price', { required: true })}
              id="price"
              type="number"
              placeholder="Price"
              className="input input-bordered w-full mt-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="orginal_price">Orginal Price</label>
            <input
              {...register('orginal_price', { required: true })}
              id="orginal_price"
              type="number"
              placeholder="Orginal Price"
              className="input input-bordered w-full mt-2"
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="mt-4">
            <label htmlFor="used_year">Year of used?</label>
            <input
              {...register('used_year', { required: true })}
              id="used_year"
              type="date"
              placeholder="Year of used?"
              className="input input-bordered w-full mt-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="location">Location</label>
            <input
              {...register('location', { required: true })}
              id="location"
              type="text"
              placeholder="Location"
              className="input input-bordered w-full mt-2"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="laptop-description">Description</label>

          <textarea
            {...register('laptop_description', { required: true })}
            id="laptop-description"
            className="textarea textarea-bordered w-full h-24 mt-2"
            placeholder="Description"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-info text-white w-full my-4">
          Add Watch
        </button>
      </form>
    </div>
  )
}

export default AddLaptop
