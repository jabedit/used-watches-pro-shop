import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function LoadCategory() {
  const data_fetch = () => {
    return axios.get('https://watch-house.vercel.app/product-category')
  }
  const { data, isLoading, refetch } = useQuery(
    ['product-category'],
    data_fetch,
    { refetchOnWindowFocus: false },
  )
  const category = data?.data

  return { category, data, isLoading, refetch }
}

export default LoadCategory
