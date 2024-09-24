import React from "react";
import './footer.css';
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'



const Footer = () => {
    return (
        <section id='footer'>
        <div className="footer-container"> 
            <div className="socials-container">           
               <a href="https://www.linkedin.com"><BsGithub size={30} className="icon-footer"/></a>
                <a href="https://www.github.com"><BsLinkedin size={30}  className="icon-footer"/></a>
                <a href="https://www.twitter.com"><BsTwitter  size={30} className="icon-footer"/></a>
                <a href="https://www.instagram.com"><AiFillInstagram size={30} className="icon-footer"/></a>
            </div>
            <div className="back-up">
                <h2>Back to the top</h2>
                <a href="#header"><BsFillArrowUpCircleFill size={50} className="icon-up"/></a>
            </div>
        </div>
   
        </section>
    );
}

export default Footer;