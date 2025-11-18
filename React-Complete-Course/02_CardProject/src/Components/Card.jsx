import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    console.log(props.companyName)

  return (
   
        <div className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-100 border-4 bg-white text-black rounded-4xl p-4 flex flex-col justify-between">
            <div className="top flex justify-between items-center">
                <img className='h-12 sm:h-14 rounded-4xl border p-2 mt-3 object-contain' src={props.companyLogo} alt="" />
                <div>
                    <h3 className='flex justify-center text-gray-400 items-center border p-1 rounded text-[10px] sm:text-xs'>Save <Bookmark size={16} /></h3>
                </div>
            </div>
            <div className="middle">
                <h3 className='text-lg sm:text-xl'>{props.companyName} <span className='text-gray-500 text-[13px] sm:text-[15px] tracking-tighter '>{props.postTime}</span></h3>
                <h2 className='text-lg sm:text-xl font-bold'>{props.post}</h2>
                <div className='flex gap-3 mt-2 flex-wrap'>
                    <h2 className='border p-2 rounded-xl w-fit text-[13px] sm:text-[15px] font-semibold bg-gray-200'>{props.jobType}</h2>
                    <h2 className='border p-2 rounded-xl w-fit text-[13px] sm:text-[15px] font-semibold bg-gray-200'>{props.position}</h2>
                </div>
            </div>
            <hr />
            <div className="bottom flex justify-between items-center">
                <div>
                    <h3 className='font-extrabold text-lg'>{props.salary}</h3>
                    <h5 className='text-sm'>{props.location}</h5>
                 </div> 
                <h5 className='bg-gray-900 p-2 text-white rounded-xl'>Apply Now</h5>

            </div>
        </div>
         
        
  
  )
}

export default Card