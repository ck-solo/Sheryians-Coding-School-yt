import React from 'react'

const Right = () => {
  return (
    <div className='w-5/6 bg-red-600 mt-10 flex gap-4  '>
        <div className='bg-[url("https://images.unsplash.com/photo-1733995792613-38146e9f7dd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHZlcnRpY2FsJTIwd2FsbHBhcGVyJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D")] bg-cover bg-center w-1/3 h-[80vh]  px-10 flex flex-col justify-between rounded-2xl'>
        <h6 className='border w-fit py-1 px-3 rounded-full mt-10 text-white'>1</h6>
      <div className=' flex flex-col justify-between text-white'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam harum ab reiciendis! </p>
        <div className=' mt-10 flex justify-between mb-4'>
          <button className='bg-green-500 px-2 py-2 w-fit rounded-2xl font-bold'>Satisfied</button>
          <i class="ri-arrow-right-long-fill px-4 py-3 bg-green-800 rounded-2xl text-2xl"></i>
        </div>
        </div>
        </div>
         
        
      </div>
 
  )
}

export default Right