import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function AllLaptopsLoad() {
  const load_all_laptop = () => {
    return axios.get(`https://watch-house.vercel.app/laptops`)
  }
  const { data, isLoading, refetch } = useQuery(
    ['load_all_laptops'],
    load_all_laptop,
  )
  const all_laptops = data?.data
  return { all_laptops, isLoading, refetch }
}

export default AllLaptopsLoad
