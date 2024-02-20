import React from 'react'
import './Contacts.css';
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from '@emailjs/browser'; 

const Contacts = () => {
  const form = useRef();
  //Email sending via emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_weodz6r', 'template_afb25qy', form.current, {
        publicKey: 'vJiMmS1Ni7neOKu8V',
      })
      .then((result) => {
        alert("Thanks for reaching out to me! Looking forward to connect with you.");
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Connect with Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>tamojitdas181007@gmail.com</h5>
            <a href="mailto:tamojitdas181007@gmail.com" target="_blank">Send an Email</a>
          </article>

          <article className="contact_option">
            <BsLinkedin className='contact_option-icon' />
            <h4>Linkedin</h4>
            <h5>Tamojit Das</h5>
            <a href="https://www.linkedin.com/in/tamojit-das-b77b62293" target="_blank">Lets Connect</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91 7439010664</h5>
            <a href="https://api.whatsapp.com/send?phone=917439010664" target="_blank">Send an message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name="name" placeholder="Your Full Name..." required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts