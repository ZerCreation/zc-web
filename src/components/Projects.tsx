import React from 'react'
import { DataSource } from '../data/projects-details';
import ProjectsSet from './ProjectsSet';

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <div style={{margin: '0 200px 0 200px'}}>
        <ProjectsSet projectsSource={DataSource.getBusinessApps()} nameOfSet="Business" />
        <ProjectsSet projectsSource={DataSource.getMultimediaApps()} nameOfSet="Multimedia" />
      </div>
    </>
  );
}
