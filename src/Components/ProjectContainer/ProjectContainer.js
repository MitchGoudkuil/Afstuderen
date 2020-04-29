import React, {Component} from "react";
import ProjectCard from "./ProjectCard";
import Guus from '../../Images/projects/guus.png';
import Ololai from '../../Images/projects/ollolai.jpg';
import pti from '../../Images/projects/pti.jpg';
import henneke from '../../Images/projects/henneke-1.jpg'

let projectArray = [{id: 1, image: Guus, name: "Guus meeuwis"},
    {id: 2, image: Ololai, name: "Ololai"},
    {id: 3, image: pti, name: "Pti"},
    {id: 4, image: henneke, name: "Henneke"},
    {id: 6, image: Ololai, name: "Ololai"},
    {id: 5, image: Guus, name: "Guus meeuwis"},
    {id: 7, image: pti, name: "Pti"},
    {id: 8, image: henneke, name: "Henneke"},
    {id: 9, image: Guus, name: "Guus meeuwis"},
    {id: 10, image: Ololai, name: "Ololai"},
    {id: 11, image: pti, name: "Pti"},
    {id: 12, image: henneke, name: "Henneke"},
    {id: 13, image: Ololai, name: "Ololai"},
    {id: 14, image: Guus, name: "Guus meeuwis"},
    {id: 15, image: pti, name: "Pti"},
    {id: 16, image: henneke, name: "Henneke"},
    {id: 17, image: Guus, name: "Guus meeuwis"},
    {id: 18, image: Ololai, name: "Ololai"},
    {id: 19, image: pti, name: "Pti"},
    {id: 20, image: henneke, name: "Henneke"},
    {id: 21, image: Ololai, name: "Ololai"},
    {id: 22, image: Guus, name: "Guus meeuwis"},
    {id: 23, image: pti, name: "Pti"},
    {id: 24, image: henneke, name: "Henneke"},
    {id: 25, image: Guus, name: "Guus meeuwis"}];

class ProjectContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: false,
            hovering: false,
            toggle: this.props.toggle
        };
    }

    handleBackground = (e) => {
        e.target.classList.add("selected");
        this.setState({background: true, hovering: true})
    };

    handleRemoveBackground = (e) => {
        e.target.classList.remove("selected");
        this.setState({background: false, hovering: false})
    };


    render() {
        return <div className={"project-container"}>
            <div className={`project-container__background ${this.state.background ? "show" : "" }`}></div>
            {projectArray.map(item => {
                return <ProjectCard toggle={this.state.toggle} hovering={(e) => this.state.hovering(e)} hover={(e) => this.handleBackground(e)} leave={this.handleRemoveBackground} image={item.image} key={item.id} />
            })}
        </div>
    }
};

export default ProjectContainer;