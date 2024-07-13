import React from 'react';
import CV from "../../assets/Tamojit Das_CV_13-07-24.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Connect</a>
    </div>
  )
}

export default CTA