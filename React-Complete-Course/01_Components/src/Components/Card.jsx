import React from 'react'

function App() {
  return (
    <>
      <div className="h-screen w-full bg-black p-20">
        <div className="card h-[85%] w-1/3 bg-gray-500 text-white border border-white rounded-2xl flex flex-col justify-center items-center ">
          <img className="w-[100px] h-[100px] object-cover rounded-full "src="https://images.unsplash.com/photo-1761838816945-021a4ebd67bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D" alt="" /> 
          <h1 className='text-center text-6xl  font-bold'>Lucy-Solo</h1>
          <p className='w-[80%] text-center font-semibold pt-6 pb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quis dolore.</p>
          <button className='rounded-2xl border-black border-2 bg-gray-900 p-5 text-center'>View Profile</button>
        </div>
      </div>
    </>
  )
}

export default App
