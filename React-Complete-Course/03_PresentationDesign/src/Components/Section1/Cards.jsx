import React from 'react'
import Left from './Left'
import Right from './Right'

const Cards = (props) => {
  return (
    <div className=' h-[80vh]  flex  gap-10 items-center mt-10 '>
      <Left />
      <Right users={props.users} />
    </div>
  )
}

export default Cards