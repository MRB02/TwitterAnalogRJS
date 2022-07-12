import React from 'react'

export default function PostStatusFilter() {
  return (
    <div className='btn-group d-flex my-4 '>
    <button type="button" className="btn btn-primary p-3 mx-2">All</button>
    <button type="button" className="btn btn-danger p-3 mx-1">Liked</button>
    </div>
  )
}
