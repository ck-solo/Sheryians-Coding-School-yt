import React from 'react'

const RightCardContent = (props) => {
    
  return (
        <div className='absolute top-0 left-0 h-full w-full  flex gap-30 flex-col p-6'>
        <h1 className='border-2 w-fit px-2 rounded-full'>{props.id+1}</h1>
        <div >
        <p className='w-50  text-white font-semibold mb-10'>{props.intro}</p>
        <div className='flex gap-20 items-center'>
          <button style={{backgroundColor:props.color}} className='font-semibold bg-blue-600 rounded-4xl p-2 w-fit'>{props.tag}</button>
          <i class="ri-arrow-right-line text-4xl bg-blue-600 rounded-4xl p2 w-fit "></i>
        </div>
    </div>
    </div> 
  )
}

export default RightCardContent