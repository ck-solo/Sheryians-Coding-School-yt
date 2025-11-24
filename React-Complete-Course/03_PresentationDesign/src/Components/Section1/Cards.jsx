import React from 'react'
import Left from './Left'
import Right from './Right'

const Cards = () => {
  return (
    <div className=' h-[80vh]  flex  gap-10 items-center'>
      <Left />
      <Right />
    </div>
  )
}

export default Cards