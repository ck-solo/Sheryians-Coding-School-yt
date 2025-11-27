 import React from 'react'
import RightCardContent from './RightCardContent'
 
 const RightCard = () => {
   return (
     <div className='w-70 bg-amber-800 relative overflow-hidden rounded-4xl h-full shrink-0'>
      <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />

    <RightCardContent />
    <RightCardContent /> 
     </div>
   )
 }
 
 export default RightCard