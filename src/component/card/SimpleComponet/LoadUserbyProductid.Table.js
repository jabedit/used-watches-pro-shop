import React from 'react'
import AllUserLoadByProductID from '../../../context/AllUserLoadByProductID'

function LoadUserbyProductidTable({ user_db_id }) {
  const {
    all_users,
    isLoading: loading_by_product_id,
    refetch,
  } = AllUserLoadByProductID(user_db_id)

  return (
    <div className="tooltip tooltip-top " data-tip={all_users?.[0]?.email}>
      <div className="cursor-pointer">{all_users?.[0]?.name}</div>
    </div>
  )
}

export default LoadUserbyProductidTable
