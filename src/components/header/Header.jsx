import React from 'react';
import "./Header.css";
import CTA from "./CTA";
import ME from '../../assets/Me1.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Tamojit Das</h1>
        <h5 className="text-light">An aspiring Full Stack Developer</h5>
        <CTA /> {/*Call to actions*/}
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="myself" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header