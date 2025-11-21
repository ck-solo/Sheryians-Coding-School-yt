import React from 'react' 
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {
  const users = [
    {
      img:"https://img.freepik.com/free-photo/woman-holding-statistics-front-view_23-2149636315.jpg",
      intro: "A modern and visually engaging presentation design crafted to simplify complex ideas, enhance clarity, and create a lasting impact. Built with clean layouts, bold typography, and a focus on storytelling.",
      tags:"Satisfied"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro:"A sleek and minimal presentation template designed to highlight key insights with clarity. Perfect for professional pitches, creative showcases, and impactful storytelling",
      tags:"Underserved"

    },{
      img:"https://images.pexels.com/photos/7255372/pexels-photo-7255372.jpeg",
      intro:"A polished and dynamic slide design that blends modern aesthetics with thoughtful layout structure. Ideal for business overviews, brand concepts, and project summaries.",
      tags:"Underbanked"
    }
  ]
  return (
    <div className='h-screen w-full  '>
   
      <Section1  />
      <Section2 />

      
    </div>
  )
}

export default App