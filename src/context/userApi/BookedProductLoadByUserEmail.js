import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function BookedProductLoadByUserEmail(e) {
  const data_fetch = () => {
    return axios.get(
      `https://watch-house.vercel.app/booked-laptop-get-by-user-email/v1?email=${e}`,
    )
  }
  const { data, isLoading, refetch } = useQuery(
    ['booked-laptop-get-by-user-email', e],
    data_fetch,
    { refetchOnWindowFocus: false },
  )
  const booked_products = data?.data

  return { booked_products, data, isLoading, refetch }
}

export default BookedProductLoadByUserEmail
