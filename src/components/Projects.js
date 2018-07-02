import React, { Component } from 'react'
import seed from '../seed/'

import Project from './Project'

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="projects__header">Selected Projects</div>
        {seed.projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    )
  }
}

export default Projects
