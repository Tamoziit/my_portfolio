import React from 'react'
import './About.css';
import ME from '../../assets/Me2.jpg';
import { FaAward } from 'react-icons/fa';
import { FaTrophy } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="aboutMe" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>5+ Years Coding Experience</small>
            </article>

            <article className='about_card'>
              <FaTrophy className='about_icon' />
              <h5>Major Achievement</h5>
              <small>SIF - Space hackathon 2023 (IISF 2023) Finalist</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nisi non quam voluptates repellat dolorem ab aut rem? Praesentium iste a voluptates libero saepe asperiores reiciendis quaerat facere ullam sit.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About