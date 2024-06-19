import React from 'react'
import "./Portfolio.css";
import IMG1 from "../../assets/instafornoobs.png";
import IMG2 from "../../assets/Nemesis-2.png";
import IMG3 from "../../assets/RedHope.png";
import IMG4 from "../../assets/musica.png";
import IMG5 from "../../assets/dragon_emperor.png";
import IMG6 from "../../assets/zinger.png";
import IMG7 from "../../assets/netflix.png";

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
    title: "Nemesis - Online Realtime Chatting App",
    github: "https://github.com/Tamoziit/Nemesis",
    demo: "https://nemesis-owrb.onrender.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "RedHope - Blood Donation, Blood Bank & Awareness Platform",
    github: "https://github.com/Tamoziit/BloodBank",
    demo: "https://redhope.onrender.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Musica - listen review & practice songs",
    github: "https://github.com/Tamoziit/Musica-app",
    demo: "https://musica-music-app-reviews-practice.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Dragon Emperor - Javascript RPG Game",
    github: "https://github.com/Tamoziit/Dragon-Emperor",
    demo: "https://dragon-emperor.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Zinger - Recipe App",
    github: "https://github.com/Tamoziit/Recipe-App",
    demo: "https://zinger-lake.vercel.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Netflix Landing Page UI Clone",
    github: "https://github.com/Tamoziit/Netflix-Clone",
    demo: "https://flixy-frontend.vercel.app/",
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
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