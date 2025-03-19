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
    <FaLinkedin/>
    <FaGithub/>
    <FaInstagram/>
    <FaEnvelope/>
</div>
    </nav>
    </>
  )
}

export default Navbar
