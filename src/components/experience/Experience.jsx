import React from 'react';
import './Experience.css';
import { SiChakraui } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <SiHtml5 className='experience_details-icon' />
              <div>
                <h4>HTML5</h4>
              </div>
            </article>

            <article className='experience_details'>
              <SiCss3 className='experience_details-icon' />
              <div>
                <h4>CSS3</h4>
              </div>
            </article>

            <article className='experience_details'>
              <SiJavascript className='experience_details-icon' />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>

            <article className='experience_details'>
              <SiReact className='experience_details-icon' />
              <div>
                <h4>React.js</h4>
              </div>
            </article>

            <article className='experience_details'>
              <SiChakraui className='experience_details-icon' />
              <div>
                <h4>Chakra UI</h4>
              </div>
            </article>

            <article className='experience_details'>
              <SiTailwindcss className='experience_details-icon' />
              <div>
                <h4>Tailwind CSS</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <SiJavascript className='experience_details-icon' />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>

            <article className='experience_details'>
              <IoLogoNodejs className='experience_details-icon' />
              <div>
                <h4>Node.js</h4>
              </div>
            </article>

            <article className='experience_details'>
              <SiMongodb className='experience_details-icon' />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>

            <article className='experience_details'>
              <SiFirebase className='experience_details-icon' />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_misc">
          <h3>Miscellaneous Skills</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <FaJava  className='experience_details-icon' />
              <div>
                <h4>Java (OOP)</h4>
              </div>
            </article>

            <article className='experience_details'>
              <SiGithub className='experience_details-icon' />
              <div>
                <h4>GitHub</h4>
              </div>
            </article>

            <article className='experience_details'>
              <SiVercel className='experience_details-icon' />
              <div>
                <h4>Vercel</h4>
              </div>
            </article>

            <article className='experience_details'>
              <SiAmazonaws className='experience_details-icon' />
              <div>
                <h4>AWS Hosting</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Experience