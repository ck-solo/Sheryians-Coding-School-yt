 import React from 'react'
import Card from './Components/Card'
 
 const App = () => {
  const Jobs = 
   [
  {
    "companyLogo": "https://cdn-icons-png.flaticon.com/512/6715/6715880.png",
    "companyName": "Meta",
    "post": "Frontend Engineer",
    "jobType": "Full-time",
    "position": "Senior",
    "salary": "$150/hr",
    "location": "Delhi, India",
    "postTime": "2 days ago"
  },
  {
    "companyLogo": "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    "companyName": "Google",
    "post": "Cloud Architect",
    "jobType": "Contract",
    "position": "Mid-level",
    "salary": "$160/hr",
    "location": "Bangalore, India",
    "postTime": "5 days ago"
  },
  {
    "companyLogo": "https://cdn-icons-png.flaticon.com/512/5968/5968990.png",
    "companyName": "Amazon",
    "post": "Backend Developer",
    "jobType": "Part-time",
    "position": "Junior",
    "salary": "$110/hr",
    "location": "Hyderabad, India",
    "postTime": "1 day ago"
  },
  {
    "companyLogo": "https://cdn-icons-png.flaticon.com/512/11814/11814686.png",
    "companyName": "Apple",
    "post": "iOS Engineer",
    "jobType": "Full-time",
    "position": "Mid-level",
    "salary": "$180/hr",
    "location": "Mumbai, India",
    "postTime": "3 days ago"
  },
  {
    "companyLogo": "https://cdn-icons-png.flaticon.com/512/5968/5968871.png",
    "companyName": "Netflix",
    "post": "Machine Learning Engineer",
    "jobType": "Remote",
    "position": "Senior",
    "salary": "$200/hr",
    "location": "Remote",
    "postTime": "4 days ago"
  },
  {
    "companyLogo": "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    "companyName": "Microsoft",
    "post": "DevOps Engineer",
    "jobType": "Internship",
    "position": "Intern",
    "salary": "$40/hr",
    "location": "Pune, India",
    "postTime": "6 hours ago"
  },
  {
    "companyLogo": "https://cdn-icons-png.flaticon.com/512/11235/11235816.png",
    "companyName": "Tesla",
    "post": "Automation Engineer",
    "jobType": "Full-time",
    "position": "Senior",
    "salary": "$175/hr",
    "location": "Delhi, India",
    "postTime": "7 days ago"
  },
  {
    "companyLogo": "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    "companyName": "NVIDIA",
    "post": "AI Research Engineer",
    "jobType": "Remote",
    "position": "Mid-level",
    "salary": "$190/hr",
    "location": "Remote",
    "postTime": "2 hours ago"
  },
  {
    "companyLogo": "https://cdn-icons-png.flaticon.com/512/888/888841.png",
    "companyName": "IBM",
    "post": "Cybersecurity Analyst",
    "jobType": "Contract",
    "position": "Junior",
    "salary": "$120/hr",
    "location": "Noida, India",
    "postTime": "8 days ago"
  },
  {
    "companyLogo": "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
    "companyName": "Adobe",
    "post": "UI/UX Designer",
    "jobType": "Freelance",
    "position": "Senior",
    "salary": "$130/hr",
    "location": "Gurgaon, India",
    "postTime": "12 hours ago"
  },
  {
    "companyLogo": "https://cdn-icons-png.flaticon.com/512/5968/5968866.png",
    "companyName": "Intel",
    "post": "Chip Design Engineer",
    "jobType": "Full-time",
    "position": "Senior",
    "salary": "$170/hr",
    "location": "Chennai, India",
    "postTime": "3 days ago"
  },
  {
    "companyLogo": "https://cdn-icons-png.flaticon.com/512/888/888837.png",
    "companyName": "Oracle",
    "post": "Database Administrator",
    "jobType": "Contract",
    "position": "Mid-level",
    "salary": "$140/hr",
    "location": "Delhi, India",
    "postTime": "1 day ago"
  }
]


console.log(Jobs)

  
   return (
     <div className= 'parent flex justify-between items-center flex-wrap gap-10 p-10 w-{100%}'>
       {Jobs.map(function(elem){

        return <Card companyLogo={elem.companyLogo} companyName={elem.companyName} post={elem.post} jobType={elem.jobType} position={elem.position} salary={elem.salary} location={elem.location} postTime={elem.postTime}/>
       })} 
     </div>
   )
 }
 
 export default App