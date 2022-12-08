import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function GetLaptopByLaptopId(id) {
  const data_fetch = () => {
    return axios.get(
      `https://watch-house.vercel.app/laptops-get-by-id/v1?id=${id}`,
    )
  }
  const { data, isLoading, refetch } = useQuery(
    ['GetLaptopByLaptopId', id],
    data_fetch,
    { refetchOnWindowFocus: false },
  )
  const single_laptop = data?.data

  return { single_laptop, data, isLoading, refetch }
}

export default GetLaptopByLaptopId
