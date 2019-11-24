import React from 'react';
import ProjectInfo from './ProjectInfo';
import software from '../data/software.json';

export default function Software() {
  const softwareSorted = software.sort((a, b) => (a.id < b.id ? 1 : -1));

  return (
    <>
      <div className='section-container software'>
        <h1 className='lg-heading'>
          Software <span className='text-secondary'>projects</span>
        </h1>
        <div className='project-grid'>
          {softwareSorted.map(project => (
            <ProjectInfo
              key={project.id}
              title={project.title}
              year={project.year}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
      <footer className='about-footer'>Bogdan Moroz &copy; 2019</footer>
    </>
  );
}
