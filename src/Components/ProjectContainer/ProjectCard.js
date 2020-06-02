import React from "react";

const ProjectCard = (props) => {
    return <img alt={"Card with a visual representation of a project"} onMouseEnter={props.hover} onMouseLeave={props.leave} src={props.image} className={`project-card`} />
};

export default ProjectCard