import React, { useContext, useState } from 'react'
import logo from "../assets/logo.png"
import "./NavBar.css"
import { Link } from 'react-scroll'
import { ScreenContext } from '../context/ScreenContextProvider'
import { slide as Menu } from 'react-burger-menu'
import SideBar from './SideBar'

const NavBar = () => {
      
      const { isMobile, isActive, isAbout, isSkills, isProjects, setActive, setAbout, setSkills, setProjects} = useContext(ScreenContext)
  return (
    <div className='navbar' id='nav'>
        <img src={logo} alt='logo' />
        {isMobile?<SideBar pageWrapId={"App"} outerContainerId={"nav"} />:<div className='navChild'>
        
            <Link 
            className={`links ${isActive}`} 
      to="home" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={800}
      onSetActive={()=>{setActive("bg")}}
      onSetInactive={()=>{setActive("")}}
       >Home</Link>
      
            <Link 
            className={`links ${isAbout}`}
      to="about" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={800}
      onSetActive={()=>{setAbout("bg")}}
      onSetInactive={()=>{setAbout("")}}
       >About</Link>
      
      
            <Link 
            className={`links ${isSkills}`}
      to="skills" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      
      duration={1500}
      onSetActive={()=>{setSkills("bg")}}
      onSetInactive={()=>{setSkills("")}} 
      >Skills</Link>
      
      
            <Link 
            className={`links ${isProjects}`}
      to="projects" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={1500}
      onSetActive={()=>{setProjects("bg")}}
      onSetInactive={()=>{setProjects("")}}
       >Projects</Link>
      
      
            <Link  
            className={`links`}
      to="contact" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={1500} 
      >Contact</Link>
      
          </div>}
    </div>
  )
}

export default NavBar