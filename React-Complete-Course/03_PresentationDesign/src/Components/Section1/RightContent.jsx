import React from 'react'

const RightContent = () => {
  return (
    <div>
         <div className='bg-[url("https://img.freepik.com/free-photo/woman-holding-statistics-front-view_23-2149636315.jpg")] bg-cover bg-center h-[80vh]  px-10 flex flex-col justify-between rounded-2xl'>
        <h6 className='border w-fit py-1 px-3 rounded-full mt-10 text-black'>1</h6>
      <div className=' flex flex-col justify-between text-white'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam harum ab reiciendis! </p>
        <div className=' mt-10 flex justify-between mb-2'>
          <button className='bg-blue-500 px-2 py-2 w-fit rounded-2xl font-bold'>Satisfied</button>
          <i class="ri-arrow-right-long-fill px-2 py-1 bg-blue-500 rounded-full text-2xl"></i>
        </div>
        </div>
        </div>
    </div>
  )
}

export default RightContent