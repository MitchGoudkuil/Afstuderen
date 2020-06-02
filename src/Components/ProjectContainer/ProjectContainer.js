import React, {Component} from "react";
import ProjectCard from "./ProjectCard";
import DragScrollProvider from 'drag-scroll-provider';
import Clock from '../../Images/icons/clock.svg';
import Blocks from '../../Images/icons/blocks.svg';
import Search from '../../Images/icons/search.svg';
import Guus from '../../Images/projects/guus.png';
import Ololai from '../../Images/projects/ollolai.jpg';
import pti from '../../Images/projects/pti.jpg';
import henneke from '../../Images/projects/henneke-1.jpg'
import arrow from "../../Images/icons/right-arrow.svg";

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
            loaded: false,
            background: false,
            hovering: false,
            toggle: false
        };
    }

    componentDidMount() {
        if(!this.state.loaded) {
            setTimeout(() => {
                this.setState({loaded: true})
            }, 300)
        }
    }

    handleToggle = () => {
        if(!this.state.toggle) {
            this.setState({toggle: true})
        }
        if(this.state.toggle) {
            this.setState({toggle: false})
        }
    };

    handleBackground = (e) => {
        e.target.classList.add("selected");
        this.setState({background: true, hovering: true})
    };

    handleRemoveBackground = (e) => {
        e.target.classList.remove("selected");
        this.setState({background: false, hovering: false})
    };


    render() {
        return <DragScrollProvider>
            {({ onMouseDown, ref }) => (
                <div className={"project-container scrollable"} ref={ref} onMouseDown={onMouseDown}>
                    <div className={`projects__container--left ${this.state.toggle ? "hides" : "" }`} >
                        <div onClick={this.handleToggle} className={`projects__container__toggle ${this.state.loaded ? "visible" : "" }`}>
                            <img src={arrow} alt=""/>
                        </div>
                        <div className={"base-center anim-w--top"}>
                            <h2>Wat we nog meer doen.</h2>
                            <p>We pride ourselves on pushing the boundaries of digital design and development. We combine relevant trends and best practices to build platforms with longevity.</p>
                        </div>
                        <div className="project__filter">
                            <div className="project__search"><input type="text"/><img src={Search} alt=""/></div>
                            <div className="project__time"><img src={Clock} alt=""/></div>
                            <div className="project__square"><img src={Blocks} alt=""/></div>

                        </div>
                    </div>

                    {projectArray.map(item => {
                        return <ProjectCard toggle={this.state.toggle} hovering={(e) => this.state.hovering(e)} hover={(e) => this.handleBackground(e)} leave={this.handleRemoveBackground} image={item.image} key={item.id} />
                    })}

                </div>
            )}
        </DragScrollProvider>
    }
};

export default ProjectContainer;