import React, {useEffect} from 'react'
import {Link} from "react-router-dom"
import { AiOutlineGithub } from "react-icons/ai"
import { HiArrowNarrowRight  } from "react-icons/hi"
import 'aos/dist/aos.css';
import Aos from 'aos';


const Projects = () => {
    useEffect(()=> {
Aos.init({ duration:2000 });
    },[])
    return (
        <div className="bg-proj-page">

        <h1 className="work">MY WORK</h1>

        <div className="bg-projects">
            <div data-aos="slide-down" className="card">
                <div className="img-box">
                    <img className="proj-img" src="https://i.ibb.co/TrmtV03/Screenshot-13.png" alt="todo-list"/>
                </div>
               <div className="content-box">
                    <h2>A simple To-do List</h2>
                    <p>Warm up to a nice, hot cup of coffee as you plan your day! p.s. dont forget to sharpen your pencil!</p>
                <div className="proj-icons">
                    <a className="icon4" href="https://github.com/TasnimzAlom/todo" rel="noreferrer" target="_blank" > 
                       <AiOutlineGithub/>
                    </a>
                      <Link className="proj-site">VIEW SITE <HiArrowNarrowRight className="proj-arrow"/> 
                      </Link>
                </div>
                 </div>      
                      
            </div>
        
        
            <div data-aos="flip-up" className="card">   
                    <div className="img-box">
                    <img className="proj-img" src="https://i.ibb.co/G5T2mGh/Screenshot-11.png" alt="amazon-clone"/>
                    </div>
                        <div className="content-box">
                                <h2>Amazon clone</h2>
                                 <p>Just call me the Congo-Basin, because I'm the second biggest rainforest themed shopping site!</p>
                                 <div className="proj-icons">
                                        <a className="icon4" href="https://github.com/TasnimzAlom/todo" rel="noreferrer" target="_blank" > 
                       <AiOutlineGithub/>
                       </a>
                      <Link className="proj-site">VIEW SITE <HiArrowNarrowRight className="proj-arrow"/> </Link>
                                 </div>
                              
                            </div>
                </div>
           
       
          
                <div data-aos="fade-right" className="card">
                    <div className="img-box">
                        <img className="proj-img" src="https://i.ibb.co/Gt1YZbR/Screenshot-12.png" alt="amazon-clone"/>
                    </div>
                    <div className="content-box">
                        <h2>Instagram clone</h2>
                            <p>I have nothing witty to say about this one, but look! Who is that on the homepage of Instagram! Oh my, how wonderfully employable they look!</p>
                    <div className="proj-icons">
                            <a className="icon4" href="https://github.com/TasnimzAlom/todo" rel="noreferrer" target="_blank" > 
                                <AiOutlineGithub/>
                            </a>
                        <Link className="proj-site">VIEW SITE <HiArrowNarrowRight           className="proj-arrow"/> 
                        </Link>
                    </div>
                </div>    
                
            </div>
        </div>
    </div>

      
  
    )
}

export default Projects
