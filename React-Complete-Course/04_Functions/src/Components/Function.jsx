import React from 'react'

const Function = () => {
    function inputChange(val){
    console.log(val)
  }
  return (
   <div className='p-10 border-white '>
     <input 
     className='border-white bg-blue-400 text-black font-bold'
     onChange={function(elem){
      inputChange(elem.target.value)
     }}
     type="text"
     placeholder='Enter your name' />
    </div>
  )
}

export default Function