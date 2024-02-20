import React from 'react'
import "./Footer.css";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Tamojit Das</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/tamojit-das-b77b62293" target="_blank"><SiLinkedin /></a>
        <a href="https://www.instagram.com/tamoziit18/" target="_blank"><SiInstagram /></a>
        <a href="https://twitter.com/Tamojit181007" target="_blank"><BsTwitterX /></a>
      </div>
    </footer>
  )
}

export default Footer