
import './header.css';
import CTA from './CTA';
import PP from '../../assets/profile-picture2.png';
import Socials from './Socials';
import React, { useState } from "react";


/*
import React, { useState } from "react";

function App() {
  const [link, setLink] = useState("https://www.example.com");

  const handleClick = () => {
    setLink("https://www.updatedlink.com");
  };

  return (
    <div>
      <a href={link}>Link</a>
      <button onClick={handleClick}>Update Link</button>
    </div>
  );
}*/

/* onClick ={() => setActiveNav("about")} className={activeNav === 'about'? 'active': ''} */


// const [link, setLink] = useState(currentlink);

//   const handleClick = () => {
//     if(currentlink === "about")
//     setLink("experience");
//     if(currentlink === "experience")
//     setLink("projects");
//   };

//   return (
//     <div>
//       <a href={link1}>Link</a>
//       <button onClick={handleClick}>Update Link</button>
//     </div>
//   );


// <Header/>
//         <Nav/>
//         <About/>
//         <Experience/>
//         <Projects/>
//         <Contact/>
//         <Footer/> 

const Header = () => {
    const [link, setLink] = useState("#header");
    const handleClick = () => {
      
        if(link ==="#header")
        setLink("#about")
        if(link === "#about")
        setLink("#experience");
        if(link === "#experience")
        setLink("#projects");
        if(link === "#projects")
        setLink("#contact");
       
      };

    return (
        <header id='header'>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Soufiane EL GAAMOUSS</h1>
                <h5 className="text-dark">FullStack Developper</h5>
                <CTA/>
                <div className="container-header-pp">
                    <img className="header_pp" src={PP} alt='profile picture'/>
                </div>
                <Socials/>
                <a href={link} onClick={handleClick} className="scroll_down">Scroll down</a>   

                
            </div>
        </header>
    );
}





// old code

// const Header = () => {

//     return (
//         <header id='header'>
//             <div className="container header_container">
//                 <h5>Hello I'm</h5>
//                 <h1>Soufiane EL GAAMOUSS</h1>
//                 <h5 className="text-dark">FullStack Developper</h5>
//                 <CTA/>
//                 <div className="container-header-pp">
//                     <img className="header_pp" src={PP} alt='profile picture'/>
//                 </div>
//                 <Socials/>
//                 <a href="#about" className="scroll_down">Scroll down</a>   

                
//             </div>
//         </header>
//     );
// }

export default Header;