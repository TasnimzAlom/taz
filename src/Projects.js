import React, {useState, useEffect} from 'react'
import {firestore} from "./firebase"
import { AiOutlineGithub } from "react-icons/ai"
// import { HiArrowNarrowRight  } from "react-icons/hi"


export const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() }
  }

const Projects = () => {
    const [projects, setProjects]= useState([]); 

    useEffect( ()=> {  
            firestore.collection("projects")
            .onSnapshot((snapshot)=>{
            const newProjects = snapshot.docs.map(collectIdsAndDocs)
           setProjects(newProjects)
           

           })
     
    },[]);
    console.log(projects)
    return (
        <section  className="project-section" id="project-section">
                      <h1 className="skills">MY WORK</h1>

        <div className="container-1">
             { 
                projects.map(project =>(   
                  
                    <div className="projects">
                      <div className="proj-content">

                    <h1>{project.title}</h1>
                    <a  className="proj-arrow" href={project.site} rel="noreferrer" target="_blank"> 
                    <img src={project.image} alt="project"/>
                    </a>
                    <p>{project.description}</p>
                 <div className="proj-icons">
                    <a className="icon4" href={project.github} rel="noreferrer" target="_blank" > 
                       <AiOutlineGithub/>
                    </a>
                   
                  </div>
                </div>
                </div>
               
                ))
            }  
             </div>        


    </section>
      
  
    )
}

export default Projects
