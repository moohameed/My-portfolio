import React from 'react'
import './about.css'
import ME from '../../assets/my-image.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
            <div className="about__me-image">
                <img src={ME} alt="About image" className='test' />
            </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className="about__card slide-fwd-center">
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>3+ Years Working</small>
              </article>
              <article className="about__card">
                  <FiUsers className='about__icon'/>
                  <h5>Clients</h5>
                  <small>200+ Worldwide</small>
              </article>
              <article className="about__card">
                  <VscFolderActive className='about__icon'/>
                  <h5>Projects</h5>
                  <small>20+ Completed Projects</small>
              </article>
            </div>

            <p>
            So, I’m interested in meeting people
with similar
backgrounds, and I’m curious to learn
about the
work environments in different
companies
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>





      </div>

    </section>
  )
}

export default About