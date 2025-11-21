import React from 'react'
import Left from './Left'
import Right from './Right'

const Center = () => {
  return (
    <div className='h-100vh flex gap-10 '>
        <Left />
        <Right />
    </div>
  )
}

export default Center