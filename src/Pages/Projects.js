import React from "react";
import Constants from "../Constants";
import FeaturedCard from "../utils/FeatureCard";
function Projects(props){
    const featureProjects = Constants.projects;

    const renderFeatureProject = () => (
        <div className="feature-project-list-wrapper">
          {featureProjects &&
            featureProjects.map((project, index) => (
              <FeaturedCard key={index} project={project} index={index} />
            ))}
        </div>
      );

      return (
        <>
          <div>{renderFeatureProject()}</div>
        </>
      );
}

export default Projects;