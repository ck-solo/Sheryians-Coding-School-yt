 import React from 'react'
import Section2 from './Components/Section2/Section2'
import Section1 from './Components/Section1/Section1'
 
 const App = () => {

  const users = [
    {
      img:"https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:"lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, doloremque.",
      tag:"unsatsified"
    },
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:"lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, doloremque.",
      tag:"satisfied"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1757332342259-c0335d133463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTczfHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      intro:"lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, doloremque.",
      tag:"Underserved"
    },
  ] 
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