import React, {useEffect} from "react";

const ProjectCard = (props) => {

    useEffect(() => {
        console.log(props.toggle)
    });

    return <img onMouseEnter={props.hover} onMouseLeave={props.leave} src={props.image} className={`project-card ${props.toggle ? "fourth" : "" }`} />
};

export default ProjectCard