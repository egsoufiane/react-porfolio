import React from 'react'
import './index.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Projects2 from './components/projects2/Projects2'
// import ParticlesBg from 'particles-bg'
import StarryNight from './Particle'








const App = () => {
    return (
        

         <div className="container">
            {/* <ParticlesBg type="cobweb"
                bg={{ position: "fixed",
                zIndex: -1 }} /> */}
            <StarryNight />
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            {/* <Projects/> */}
            <Projects2/>
            <Contact/>
            
            <Footer/> 
       </div>


    
     
        
    
    );
}

export default App;
