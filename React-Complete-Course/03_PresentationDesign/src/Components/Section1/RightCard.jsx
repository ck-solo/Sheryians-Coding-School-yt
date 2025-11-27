 import React from 'react'
import RightCardContent from './RightCardContent'
 
 const RightCard = (props) => {
   console.log(props.users)

   return (
     <div className='w-65 bg-amber-800 relative overflow-hidden rounded-4xl h-full shrink-0'>
      <img className='h-full w-full object-cover' src={props.img}alt="" />

    <RightCardContent tag={props.tag} intro={props.intro} id={props.id} color={props.color}/> 
     </div>
   )
 }
 
 export default RightCard