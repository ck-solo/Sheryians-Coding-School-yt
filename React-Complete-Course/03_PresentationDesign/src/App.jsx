 import React from 'react'
import Section2 from './Components/Section2/Section2'
import Section1 from './Components/Section1/Section1'
 
 const App = () => {
   return (
     <div>
      <div className='h-full flex flex-col'>
      <Section1 />
      <Section2 />
      </div>

     </div>
   )
 }
 
 export default App