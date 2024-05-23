import JobApplyFormLeft from '@/components/JobApplyFormLeft'
import JobApplyFormRight from '@/components/JobApplyFormRight'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-12 min-h-screen'>
      <JobApplyFormLeft />
      <JobApplyFormRight />
    </div>
  )
}

export default page
