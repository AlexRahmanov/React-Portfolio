import React from 'react';
import Project from '../Project';

function Portfolio() {
  const projectItems = [
    {
      title: 'Note Taker',
      image: 'NoteTaker.png',
      deployedLink: 'https://morning-sea-39779.herokuapp.com/',
      repo: 'https://github.com/AlexRahmanov/Note-Taker',
    },
    {
      title: 'Drinkaholics Project',
      image: 'Drinkaholics.png',
      deployedLink: 'https://alexrahmanov.github.io/Project-One-Drinkaholics/',
      repo: 'https://github.com/AlexRahmanov/Project-One-Drinkaholics',
    },
    {
      title: 'Weather Dashboard',
      image: 'Weather Dashboard.png',
      deployedLink: 'https://alexrahmanov.github.io/Weather-Dashboard/',
      repo: 'https://github.com/AlexRahmanov/Weather-Dashboard',
    },
    {
      title: 'Work Day Scheduler',
      image: 'Work Day Scheduler.png',
      deployedLink: 'https://alexrahmanov.github.io/Work-Day-Scheduler/',
      repo: 'https://github.com/AlexRahmanov/Work-Day-Scheduler',
    },
    {
      title: 'Coding Quiz',
      image: 'Coding Quiz.png',
      deployedLink: 'https://alexrahmanov.github.io/Code-Quiz/',
      repo: 'https://github.com/AlexRahmanov/Code-Quiz',
    },
    {
      title: 'Lazy Plant Caretaker',
      image: 'lazy-plant-caretaker.png',
      deployedLink: 'https://lazy-plant-caretaker.herokuapp.com/',
      repo: 'https://github.com/project02group12/lazy-plant-caretaker',
    },
  ];
  return (
    <section
      id='project-section'
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {projectItems.map((project) => {
        return (
          <Project
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repo={project.repo}
            key={project.title}
          />
        );
      })}
    </section>
  );
}
export default Portfolio;
