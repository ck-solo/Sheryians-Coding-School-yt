 import React from 'react'
 
 const RightCard = () => {
   return (
     <div className='w-70 bg-amber-800 relative overflow-hidden rounded-lg h-full'>
      <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <div className='absolute top-0 left-0 h-full w-full bg-green-500 flex gap-30 flex-col p-6'>
        <h1 className='border-2 w-fit px-2 rounded-full'>1</h1>
        <div >
        <p className='w-50  text-white font-semibold mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis a dignissimos iste? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='flex gap-20 items-center'>
          <button className='font-semibold bg-blue-600 rounded-4xl p-4 w-fit'>Satisfied</button>
          <i class="ri-arrow-right-line text-4xl bg-blue-600 rounded-4xl px-2 py-2 w-fit "></i>
        </div>

        </div>
      </div>


     </div>
   )
 }
 
 export default RightCard