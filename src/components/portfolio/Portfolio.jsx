import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Pressbook Agency</h3>
          <div className="portfolio__item-cta">
          <a href="" className='btn' target='_blank'>Github</a>
          <a href="https://pressbookagency.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Agence de Voyage </h3>
          <div className="portfolio__item-cta">
          <a href="" className='btn' target='_blank'>Github</a>
          <a href="https://goldexperiences.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Centre d'Affaires</h3>
          <div className="portfolio__item-cta">
          <a href="" className='btn' target='_blank'>Github</a>
          <a href="https://ca-mahdia.shifti.co/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Pâtisserie Masmoudi</h3>
          <div className="portfolio__item-cta">
          <a href="" className='btn' target='_blank'>Github</a>
          <a href="https://masmoudi.tn/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Google Clone</h3>
          <div className="portfolio__item-cta">
          <a href="" className='btn' target='_blank'>Github</a>
          <a href="https://lnkd.in/ee_BrUeR" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>LinkedIn Clone</h3>
          <div className="portfolio__item-cta">
          <a href="" className='btn' target='_blank'>Github</a>
          <a href="https://lnkd.in/ezesXQET" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

   
      </div>

    </section>
  )
}

export default Portfolio



