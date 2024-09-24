import React from "react";
import './about.css';
import PP from '../../assets/profile-picture1.png'
import Avatar from '../../assets/2206.jpg'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know </h5>
            <h2>More about me</h2>

            <div className="container about_container">
                <div className="about_pp">
                <img className="about_pp-image" src={Avatar} alt="about-pp"/>
                </div> 

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon"/>
                            <h5>Experiences</h5>
                            <small>3 Years Working</small>
                        </article> 
                        <article className="about_card">
                            <FiUsers className="about_icon"/>
                            <h5>Clients</h5>
                            <small>200+ clients</small>
                        </article> 
                        <article className="about_card">
                            <VscFolderLibrary className="about_icon"/>
                            <h5>Projects</h5>
                            <small>80 completed</small>
                        </article> 
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facere eum, aliquam omnis, repellat perspiciatis nam asperiores laudantium dolores quibusdam qui sunt soluta blanditiis minima quas eligendi harum, ipsa maxime!</p>
                    <a href='#contact' className="btn btn-primary">Let's talk</a>
                </div>

            </div>
        </section>
    );
}

export default About;
