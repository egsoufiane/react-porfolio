import './projects.css'
import PI from '../../assets/project-image.png';

const Projects = () => {
    return(
        <section id='projects'>
            <h5>Check out</h5>
            <h2>Projects I've worked on</h2>
            <div className="container container_projects">
                <div className="container_project">
                    <div className="project_name_container">
                        <h2 className="project_name">Project 1</h2>
                    </div>
                    <div className="container_image">
                        <img src={PI} alt='project-image' className="project_image"/>
                    </div>
                    <article className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi non repellendus culpa esse totam, aliquid quod rem beatae nam sequi explicabo temporibus minus accusantium laudantium ipsam, quidem eveniet! Itaque!</article>
                    <h1>Technologies</h1>
                    <ul className="technologies_list">
                        <li>ReactJS</li>
                        <li>ReactJS</li>
                        <li>CSS</li>
                    </ul>
                    <a href="" className="btn ">Github</a>
                    <a href="" className="btn btn-primary">Live Demo</a>
                </div>
                <div className="container_project">
                    <h2 className="project_name">Project 1</h2>
                    <div className="container_image">
                        <img  src={PI} alt='project-image' className="project_image"/>
                    </div>
                    <article className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi non repellendus culpa esse totam, aliquid quod rem beatae nam sequi explicabo temporibus minus accusantium laudantium ipsam, quidem eveniet! Itaque!</article>
                    <h1>Technologies</h1>
                    <ul className="technologies_list">
                        <li>ReactJS</li>
                        <li>ReactJS</li>
                        <li>CSS</li>
                    </ul>
                    <a href="" className="btn ">Github</a>
                    <a href="" className="btn btn-primary">Live Demo</a>
                </div>
                <div className="container_project">
                    <h2 className="project_name">Project 1</h2>
                    <div className="container_image">
                        <img src={PI} alt='project-image' className="project_image"/>
                    </div>
                    <article className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi non repellendus culpa esse totam, aliquid quod rem beatae nam sequi explicabo temporibus minus accusantium laudantium ipsam, quidem eveniet! Itaque!</article>
                    <h1>Technologies</h1>
                    <ul className="technologies_list">
                        <li>ReactJS</li>
                        <li>ReactJS</li>
                        <li>CSS</li>
                    </ul>
                    <a href="https://www.github.com" className="btn ">Github</a>
                    <a href="" className="btn btn-primary">Live Demo</a>
                </div>
            </div>
        </section>
        
    );
}

export default Projects;