import React from 'react'
import {Link} from "react-router-dom"
import { SiLinkedin } from "react-icons/si"
import { AiOutlineGithub } from "react-icons/ai"
import {RiInstagramFill } from "react-icons/ri"

const Navbar = () => {
    return (
        <div>
              <div className="proj-menu">
              <Link className="drop-links" to="/">TASNIM ALOM</Link>
        <Link className="drop-links" to="/Projects">RESUME</Link>
          <Link className="contact-link" to="/Contact">CONTACT</Link>

                        
                   <a className="icon3" href="https://www.linkedin.com/in/tasnim-a-58739a137"rel="noreferrer" target="_blank" > 
                       <SiLinkedin/>
                       </a>
                       <a className="icon3" href="https://github.com/TasnimzAlom"rel="noreferrer" target="_blank" > 
                       <AiOutlineGithub/>
                       </a>
                       <a className="icon3" href="https://www.instagram.com/delliriouss/"rel="noreferrer" target="_blank" > 
                       <RiInstagramFill/>
                       </a>    
           
            </div>
        </div>
    )
}

export default Navbar
