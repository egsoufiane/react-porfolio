
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Socials = () => {
    return (
        <div className="header_socials">
            <a href="https://www.github.com"><BsLinkedin className="social_icon"/></a>
            <a href="https://twitter.com"><BsTwitter className="social_icon"/></a>
            <a href="https://www.github.com"><BsGithub className="social_icon"/></a>
        </div>
    );
}

export default Socials;
