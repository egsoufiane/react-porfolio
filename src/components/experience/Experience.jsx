import React from "react";
import './experience.css';
import {AiOutlineCheckCircle} from 'react-icons/ai';

const Experience = () => {
    return (
        <section id='experience'>
            <h1>Skills</h1>
            <div className="skewed_container">
            <div className="container container_experience">
            
                <div className="card front_end_card">
                    <h1>Front End</h1>
                    <div className="skill_card">
                        <AiOutlineCheckCircle className="skill_icon"/>
                        <h2>ReactJS</h2>
                        <small>Experienced</small>
                    </div>
                    <div className="skill_card">
                        <AiOutlineCheckCircle className="skill_icon"/>
                        <h2>CSS3</h2>
                        <small>Experienced</small>
                    </div>
                    <div className="skill_card">
                        <AiOutlineCheckCircle className="skill_icon"/>
                        <h2>HTML</h2>
                        <small>Experienced</small>
                    </div>
                    <div className="skill_card">
                        <AiOutlineCheckCircle className="skill_icon"/>
                        <h2>HTML</h2>
                        <small>Experienced</small>
                    </div>
                    <div className="skill_card">
                        <AiOutlineCheckCircle className="skill_icon"/>
                        <h2>HTML</h2>
                        <small>Experienced</small>
                    </div>
                </div>
                <div className="card back_end_card">
                    <h1>Back End</h1>
                    <div className="skill_card">
                        <AiOutlineCheckCircle className="skill_icon"/>
                        <h2>PHP</h2>
                        <small>Experienced</small>
                    </div>
                    <div className="skill_card">
                        <AiOutlineCheckCircle className="skill_icon"/>
                        <h2>PYTHON</h2>
                        <small>Experienced</small>
                    </div>
                    <div className="skill_card">
                        <AiOutlineCheckCircle className="skill_icon"/>
                        <h2>MySQL</h2>
                        <small>Experienced</small>
                    </div>
                    <div className="skill_card">
                        <AiOutlineCheckCircle className="skill_icon"/>
                        <h2>JAVA</h2>
                        <small>Experienced</small>
                    </div>
                    <div className="skill_card">
                        <AiOutlineCheckCircle className="skill_icon"/>
                        <h2>JAVA</h2>
                        <small>Experienced</small>
                    </div>
                    <div className="skill_card">
                        <AiOutlineCheckCircle className="skill_icon"/>
                        <h2>JAVA</h2>
                        <small>Experienced</small>
                    </div>
                    <div className="skill_card">
                        <AiOutlineCheckCircle className="skill_icon"/>
                        <h2>NodeJS</h2>
                        <small>Experienced</small>
                    </div>
                    <div className="skill_card">
                        <AiOutlineCheckCircle className="skill_icon"/>
                        <h2>JAVA</h2>
                        <small>Experienced</small>
                    </div>
                    <div className="skill_card">
                        <AiOutlineCheckCircle className="skill_icon"/>
                        <h2>JAVA</h2>
                        <small>Experienced</small>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Experience;