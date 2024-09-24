import React  from "react";
import "./contact.css";
import {AiFillPhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'






const Contact = () => {
    return(
        <section id='contact' >
            <h1>Contact me!</h1>
            <div className="contact-container">
                <h3>Feel free to contact me!</h3>
                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, sequi ducimus doloremque sed natus magnam ipsa magni perferendis vero facere ad impedit cupiditate minus voluptates, cum veniam exercitationem qui nemo?</h5>
                <div className="contact-subcontainer">
              
                <div className="contact-other"> 
                    <div className="contact-info">
                        <AiFillPhone className="icon"/>
                        <h5>+21269796070</h5>
                    
                    </div>
                    <div className="contact-info">
                    
                        <AiOutlineMail className="icon"/>
                        <h5>eg.soufian@gmail.com</h5>
                   
                    </div>
                    <div className="contact-info">
                    
                        <AiFillTwitterSquare className="icon"/>
                        <h5>@egsoufiane</h5>
                    </div>
                    
                </div>
                  <form>
                    <input type="text" name='fullname' placeholder="Enter your fullname"/>
                    <input type="text" name='email' placeholder="Enter a valid email address"/>
                    <input type="" name='message' placeholder="Type your message" />
                    <textarea name="message" cols="40" rows="10"  placeholder="Type your message"/>
                    <input type="submit" value="Send" className="btn btn-secondary" />
                </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;