import React from 'react'
import './header.css'
import Cta from './Cta'
import ME from '../../assets/my-image.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am </h5>
        <h2>Mohamed Trabelsi</h2>
        <h5 className='text-light'>Web Developer</h5>
        <Cta />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="mohamed" />
          
        </div>
        <a href='#contact' className='scroll__down'> Scroll Down</a>
        
     
      </div>
    </header>
  )
}

export default Header