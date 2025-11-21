import React, { useEffect, useRef } from "react";

import Typed from "typed.js"

import "./Contact.css";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




const Contact = () => {
     const el = useRef(null); // span element reference

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [  "Facebook <i class='fa-brands fa-facebook-square'></i>",
  "Instagram <i class='fa-brands fa-instagram'></i>",
  "LinkedIn <i class='fa-brands fa-linkedin'></i>", "Mail <i class='fa-solid fa-mail-bulk'></i>"],
      typeSpeed: 30,
      backSpeed: 50,
      loop: true,
      html: true
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

    
    
    return (
        <>
        <div className="contact-container-header">
            <h1>Reach Out to Us</h1>
        </div>

        




    <div className="contact-bottom">

        <div className="contact-form-container">
            <div className="type-container">
                <h1>
                    <span className="auto-type" ref={el}></span>
                </h1>
            </div>


        </div>



        <div className="contact-form-container">
            <form className="contact-form">
                <div className="contact-box">
                    <label >Email:</label>
                    <input type="email" placeholder="email@example.com" />
                </div>

                                    <hr></hr>

                <div className="contact-box">
                    <label>Message:</label>
                    <textarea placeholder='Your message here'></textarea>
                </div>

                <button type="submit">Send Mail</button>
            </form>
        </div>


    </div>
        
    </>
    );
};


export default Contact;