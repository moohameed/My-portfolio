import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiActivity} from 'react-icons/fi'


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/medtrabelsi/" target="_blank" rel="noreferrer"  > <BsLinkedin /></a>
        <a href="https://github.com/moohameed" target="_blank" rel="noreferrer" > <FaGithub /></a>
        <a href="https://dribble.com" target="_blank" rel="noreferrer" > <FiActivity /></a>
        


    </div>
  )
}

export default HeaderSocial