import React from 'react'
import "./Portfolio.css";
import IMG1 from "../../assets/instafornoobs.png";
import IMG2 from "../../assets/netflix.png";
import IMG3 from "../../assets/musica.png";
import IMG4 from "../../assets/dragon_emperor.png";
import IMG5 from "../../assets/zinger.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "InstaForNoobs",
    github: "https://github.com/Tamoziit/InstaForNoobs",
    demo: "https://insta-for-noobs.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Netflix Landing Page UI Clone",
    github: "https://github.com/Tamoziit/Netflix-Clone",
    demo: "https://flixy-frontend.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Musica - listen review & practice songs",
    github: "https://github.com/Tamoziit/Musica-app",
    demo: "https://musica-music-app-reviews-practice.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Dragon Emperor - Javascript RPG Game",
    github: "https://github.com/Tamoziit/Dragon-Emperor",
    demo: "https://dragon-emperor.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Zinger - Recipe App",
    github: "https://github.com/Tamoziit/Recipe-App",
    demo: "https://zinger-lake.vercel.app/",
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo, details }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio