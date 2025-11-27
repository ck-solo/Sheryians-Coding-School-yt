import React from 'react'

const RightCardContent = () => {
  return (
        <div className='absolute top-0 left-0 h-full w-full  flex gap-30 flex-col p-6'>
        <h1 className='border-2 w-fit px-2 rounded-full'>1</h1>
        <div >
        <p className='w-50  text-white font-semibold mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis a dignissimos iste? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='flex gap-20 items-center'>
          <button className='font-semibold bg-blue-600 rounded-4xl p-4 w-fit'>Satisfied</button>
          <i class="ri-arrow-right-line text-4xl bg-blue-600 rounded-4xl px-2 py-2 w-fit "></i>
        </div>
    </div>
    </div> 
  )
}

export default RightCardContent