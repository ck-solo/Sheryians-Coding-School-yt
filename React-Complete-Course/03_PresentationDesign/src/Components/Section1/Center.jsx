import React from 'react'
import Left from './Left'
import Right from './Right'

const Center = () => {
  return (
    <div className='h-90vh flex'>
        <Left />
        <Right />
    </div>
  )
}

export default Center