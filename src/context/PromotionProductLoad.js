import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function PromotionProductLoad() {
  const data_fetch = () => {
    return axios.get(
      'https://watch-house.vercel.app/laptops/promotion-product/v1',
    )
  }
  const { data, isLoading, refetch } = useQuery(['promote_laptops'], data_fetch)

  const promote_laptops = data?.data

  return { promote_laptops, data, isLoading, refetch }
}

export default PromotionProductLoad
