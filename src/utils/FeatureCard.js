import React from "react";

function FeaturedCard({ project, index }) {
  return (
    <div className="feature-card">
      <div
        className={`column-1`}
        style={{ order: `${index % 2 === 0 ? 1 : 2}` }}
      >
        <div className="feature-image-wrapper">
            <a href={project.link} target='_blank' rel="noopener noreferrer">
              <img  src={project.photo} alt="project" />  
            </a>
        </div>
      </div>
      <div
        className={`column-2`}
        style={{
          order: `${index % 2 === 0 ? 2 : 1}`,
          textAlign: `${index % 2 === 0 ? "right" : "left"}`,
        }}
      >
        <div className="feature-card-content">
          <div className="project-name">{project.name}</div>
          <div className="project-summary">{project.summary}</div>
          <div className="project-tech">{project.tech}</div>
          
        </div>
      </div>
    </div>
  );
}
export default FeaturedCard;