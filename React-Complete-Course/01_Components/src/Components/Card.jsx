import React from 'react'

const Card = (props , age) => {
    console.log(props.username)

  return (
    <>
      <div className="h-screen w-full bg-black p-20 flex ">
        <div className="card h-[85%] w-full bg-gray-500 text-white border border-white rounded-2xl flex flex-col justify-center items-center ">
          <img className="w-[100px] h-[100px] object-cover rounded-full "src={props.img} alt="" /> 
          <h1 className='text-center text-6xl  font-bold'>{props.username}</h1>
          <p className='w-[80%] text-center font-semibold pt-6 pb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quis dolore.</p>
          <button className='rounded-2xl border-black border-2 bg-gray-900 p-5 text-center'>View Profile</button>
        </div>
      </div>
    </>
  )
}

export default Card