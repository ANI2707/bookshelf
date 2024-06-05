import React from 'react'
import ShimmerMenu from './ShimmerMenu'

const Shimmer = () => {
  return (
    <div className='mx-10 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 am:gap-2'>
        <ShimmerMenu/>
        <ShimmerMenu/>
        <ShimmerMenu/>
        <ShimmerMenu/>
        <ShimmerMenu/>
        <ShimmerMenu/>
        <ShimmerMenu/>
        <ShimmerMenu/>
        <ShimmerMenu/>
        <ShimmerMenu/>
        </div>
  )
}

export default Shimmer