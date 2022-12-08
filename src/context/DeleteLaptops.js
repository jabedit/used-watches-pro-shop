function DeleteLaptops() {
  // delete laptop by laptop id
  const delete_func = async (e) => {
    return fetch(`https://watch-house.vercel.app/laptops?id=${e}`, {
      method: 'DELETE',
    })
  }
  return { delete_func }
}

export default DeleteLaptops
