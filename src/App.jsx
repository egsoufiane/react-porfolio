import React from 'react'
import './index.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



const App = () => {
    return (
        <div className="container">
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/> 
        </div>
    
    );
}

export default App;
