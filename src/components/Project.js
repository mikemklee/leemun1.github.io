import React from 'react'

const Project = ({ project }) => {
  return (
    <div className="project">
      <a href={project.link} target="_blank">
        <img
          className="project__image"
          src={`/static/img/${project.img}`}
          alt=""
        />
      </a>
      <div className="project__title">
        <a
          href={project.link}
          target="_blank"
          className="project__title--title"
        >
          <span>{project.title}</span>
        </a>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            className="project__title--live"
          >
            Live Preview
          </a>
        ) : (
          <div className="project__title--nolive">No Preview</div>
        )}
      </div>
      <div className="project__description">{project.description}</div>
      {project.tools.map(tool => (
        <div key={tool} className="project__tools">
          <span>&#183;</span>
          <span>{tool}</span>
        </div>
      ))}
    </div>
  )
}

export default Project
