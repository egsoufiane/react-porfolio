import React from 'react';
import './projects2.css';

const projects = [
  {
    title: 'Project One',
    description: 'This is a description of Project One. ',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project Two',
    description: 'This is a description of Project Two.  ',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project Three',
    description: 'This is a description of Project Three.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project Four',
    description: 'This is a description of Project Four.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project Five',
    description: 'This is a description of Project Five.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project Six',
    description: 'This is a description of Project Six.',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const Projects2 = () => {
  return (
    <div className='projects-container'> 
      <h2 className='projects-intro'>Here are some projects I've worked on:</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="card-project">
            <div>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>   
            </div>
            <div className='buttons'>
              <button className='btn btn-primary'>Demo</button>
              <button className='btn'>Github</button>
            </div>
      
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Projects2;