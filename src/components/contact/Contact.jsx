import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef() ; 
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ujikj1i', 'template_psqt6ph', form.current, 'Dr5pO0OwsDjbMWAx5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset() ;
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mohamed.trabelsi@esen.tn</h5>
            <a href="mailto:mohamed.trabelsi@esen.tn" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>Mohamed Trabelsi</h5>
            <a href="https://m.me/hama.p.st" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Mohamed Trabelsi</h5>
            <a href="https://api.whatsapp.com/send?phone=21629333141" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END of contact options,*/}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type ='submit'className="btn btn-primary">Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact