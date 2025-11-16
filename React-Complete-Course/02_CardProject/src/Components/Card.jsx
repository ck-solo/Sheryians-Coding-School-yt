import React from 'react'

const Card = () => {
  return (
    <div className='h-screen w-full bg-black p-10'>
        <div className="card h-[55%] w-[25%] bg-gray-500 text-white border border-white rounded-2xl flex flex-col justify-center items-center ">
            <div className="top flex w-full justify-between px-10">
                <img src="" alt="" />
                <button>Save</button>
            </div>
            <div className="middle flex ">
                <h1>Amazon</h1>
                <h3>Senior Software Engineer</h3>
                <button>
                    <button className="left-btn p-2 bg-gray-300">Part-Time</button>
                    <button className="right-btn  p-2 bg-gray-300">Senior Level</button>
                </button>
            </div>
            <div className="bottom flex ">
                <div className="left">
                    <div className="price font-bold ">$120/hr</div>
                    <div className="location text-gray-300">Mumbai, India</div>
                </div>
                <div className="right">
                    <button className='bg-black text-white p-2 '>Apply now</button>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Card

