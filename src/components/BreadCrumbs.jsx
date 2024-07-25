import React from 'react'

function BreadCrumbs({ category, subCategory }) {
  return (
    <div className='flex flex-row gap-2 items-center'>
        <span className='text-sm text-secondary-50'>{category}</span>
        <span className='text-sm text-secondary-50'>/</span>
        <span className='text-sm text-secondary-50'>{subCategory}</span>
    </div>
  )
}

export default BreadCrumbs