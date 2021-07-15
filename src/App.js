import React from 'react';
import './App.scss';
import Home from "./Home";
// import {Route} from "react-router-dom"
import Navbar from "./Navbar"
import Skills from "./Skills"
import About from './About'
import Projects from './Projects'
import Contact from './Contact';
import AboutText from './AboutText';


function App() {
  return (
          <div >
            <Navbar/>
            <Home />  
            <Skills/>
            <Projects/>
            <About/>
            <AboutText/>
            <Contact/>
       </div>
  );
}

export default App;
