import React, {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { SiLinkedin } from "react-icons/si"
import { AiOutlineGithub } from "react-icons/ai"
import {RiInstagramFill } from "react-icons/ri"
import {HashLink as Link} from "react-router-hash-link";
// import { CgMenu } from 'react-icons/cg';
import {FaHamburger} from 'react-icons/fa';
import styled from "styled-components";


const Navbar = (props) => {
    const [isOpen, setIsOpen]=useState(false)


    const { Projects } = useLocation();

    useEffect(() => {
      window.scrollTo(10, 0);
    }, [Projects]);

   
    return ( 
    <div className="proj-menu">

        
                <Box1>
               
           
             <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger> 
                </Box1>
                   <Nav >  
                     
                    <Menu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                        <Link href="">RESUME</Link>
                        <Link smooth to="#skills-section" href="">SKILLS</Link>
                        <Link smooth to= "#project-section">MY WORK</Link>
                        <Link smooth to="#about-section" >ABOUT ME</Link>
                        <Link smooth to="#contact-section"href="">CONTACT ME</Link>
                 

              
 

            
                            <a href="https://www.linkedin.com/in/tasnim-a-58739a137"rel="noreferrer" target="_blank" > 
                            <SiLinkedin/>
                            </a>
                            <a href="https://github.com/TasnimzAlom"rel="noreferrer" target="_blank" > 
                                    <AiOutlineGithub/>
                            </a>
                            <a href="https://www.instagram.com/delliriouss/"rel="noreferrer"target="_blank"> 
                                    <RiInstagramFill/>
                            </a>    
            
          </Menu>
                            </Nav>

  
        </div>
    )
}

const Box1 = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
align-items:center;
background:black;
width:100vw;

`;

const Nav = styled.div`
    padding:0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction:column;
    flex-wrap: wrap;
    color:white;
    background:black;
    z-index:12;


    // hello
    a{
        margin-left:2rem;
    }

    a:hover{
        color:red;
        text-decoration:none;
    }
`;


const Hamburger = styled.div`
    display:flex;  
    flex-direction:column;
    cursor: pointer;
    margin:10px;
 

    span {
        height:3px;
        width:25px;
        background:red;
       
        margin-bottom:5px;
        border-radius:5px;

    }

        @media (min-width: 800px){
            display:none;
            
        }
`;



const Menu = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
position:relative;
background:black;
padding:1rem;



@media screen and (min-width:800px){
  
    justify-content:flex-start;
    
}

@media screen and (max-width:800px){
flex-direction:column;

display:${({isOpen}) => (isOpen ? "":"none" )};
transition:display:0.1s

line-height:2rem;
padding:2rem;

 


    
}

`;



export default Navbar
