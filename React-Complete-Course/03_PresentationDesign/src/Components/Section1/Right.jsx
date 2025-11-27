import React from 'react'
import RightCard from '../../../../03_PresentationDesign/src/Components/Section1/RightCard'

const Right = (props ) => {
 
  return (
    <div id="card" className=' w-3/4 h-full flex flex-nowrap overflow-x-auto p-4 gap-10 '>
       {props.users.map(function(elem , idx){
        return <RightCard img={elem.img} key={idx} color={elem.color} id={idx} tag={elem.tag} intro={elem.intro} />
       })}
         
    </div>
  )
}

export default Right