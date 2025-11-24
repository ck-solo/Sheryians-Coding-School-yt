import React from 'react'
import Left from './Left'
import Right from './Right'

const Cards = () => {
  return (
    <div className=' h-[80vh]  flex bg-red-700 justify-between items-center'>
      <Left />
      <Right />
    </div>
  )
}

export default Cards