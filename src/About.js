import React, {useEffect} from 'react'
import { SiLinkedin } from "react-icons/si"
import { AiOutlineGithub } from "react-icons/ai"
import {RiInstagramFill } from "react-icons/ri"
import 'aos/dist/aos.css';
import Aos from 'aos';

const Menu = () => {
    useEffect(()=> {
        Aos.init({ duration:5000 });
            },[])
            
    return (
        <div className="menu-div">

       <div className="red-half">
           <div className="about-boxes">
       <img data-aos="flip-up" className="taz" src="https://i.ibb.co/DY886QT/OVZI1411.png"  alt="taz"/>
            <div className="icons">                
                   <a className="icon2" href="https://www.linkedin.com/in/tasnim-a-58739a137"rel="noreferrer" target="_blank" > 
                       <SiLinkedin/>
                       </a>
                       <a className="icon2" href="https://github.com/TasnimzAlom"rel="noreferrer" target="_blank" > 
                       <AiOutlineGithub/>
                       </a>
                       <a className="icon2" href="https://www.instagram.com/delliriouss/"rel="noreferrer" target="_blank" > 
                       <RiInstagramFill/>
                       </a>    
                </div>
                </div>
       </div>

                <div className="black-half">
                <div className="about-boxes">
                    <div className="about">
                <img className="slash-text" src="https://i.ibb.co/QYf6xXN/RJKP9169.png" alt="words with slash through them" />
                    <p>I am a design driven front end developer with a close eye for details. I am passionate about designing and creating fully functional, accessible and secure webpages that will make users never want to leave! I am eager and quick to learn and have a wide variety of skills. </p>
                    </div>
          </div>
 </div>
        </div>
    )
}

export default Menu
