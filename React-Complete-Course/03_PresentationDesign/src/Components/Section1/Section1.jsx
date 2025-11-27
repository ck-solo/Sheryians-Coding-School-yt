import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards'

const Section1 = (props) => {
  console.log(props.users)
  return (
    <div className='h-screen w-full p-10 '>
        <Navbar />
        <Cards  users={props.users} />
    </div>
  )
}

export default Section1