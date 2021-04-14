import React from 'react'
import Typewriter from"typewriter-effect"
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Skills from './Skills';


const Home = () => {


    return (
       <div className="sizer"> 
           <Navbar/>
        <div className="bg-img" >
      
         <div classname="line">
            </div>
          
         
            <div className="home">
            <div>
         
            <img className="taz-kill-bill" src="https://i.ibb.co/8PSjgct/ec0889e0-b927-4f00-8ba3-8d350dec6f8a.png" alt="taz-kill-bill"/></div>
          
            
            </div>
            <div >

               </div>
                <div className="title">
                <h1 className="name">TASNIM <span className="text-secondary">ALOM</span></h1>
                <div className="change-text">
                    <div className="red-text">
               <Typewriter 
                onInit={(typewriter)=>{
                    typewriter
                    .typeString("FRONT END DEVELOPER")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("DESIGNER")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("ARTIST")
                    .deleteAll()
                    .typeString("FRONT END DEVELOPER")
                    .start();
                }}
               />
           
               </div>
               
      </div>
  
        </div>
     
        </div> 
      <About/>
      <Projects/>
      <Skills/>
        </div>
    )
}

export default Home
