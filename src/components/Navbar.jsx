import React from 'react'
import logo from "../assets/SooD.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import { FaEnvelope} from "react-icons/fa"
const Navbar = () => {
  return ( 
    <>
    <nav className='mb-20 flex items-center justify-between'>
        <div className='flex flex-shrink-0 items-center'>
        <img className='mx-10 w-10' src={logo} alt="LOGO"/>
        </div>
<div className='m-8 flex items-center justify-center gap-4 text-2xl'>
   <a href="https://www.linkedin.com/in/swayam-sood-b76855252/" target="_blank" rel="Linkedin-Swayam Sood"> <FaLinkedin /> </a>
   <a href="https://github.com/SwayamS112" target='_blank' rel='GitHub-Swayam Sood'> <FaGithub/> </a>
   <a href="https://www.instagram.com/swayam_sood__/" target='_blank' rel='Instagram- Swayam Sood'> <FaInstagram/></a>
   <a href="mailto:soodswayam41@gmail.com" target='_blank' rel='Mail-Swayam Sood'> <FaEnvelope/></a> 
</div>
    </nav>
    </>
  )
}

export default Navbar
