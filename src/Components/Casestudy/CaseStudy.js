import React, {Component} from "react";
import Card from "../Cards/Card";
import {NavLink} from "react-router-dom";
import Project from '../../Images/project.jpg';
import Uitgekookt from '../../Images/projects/Uitgekookt2.png';
import Ololai from '../../Images/projects/ollolai.jpg';
import meiland from '../../Images/projects/chateau_meiland.jpg';
import henneke from '../../Images/projects/henneke-1.jpg';
import Loafies from '../../Images/projects/loav1-360x270.jpg';

let studyArray = [
    {id: 1, title:"Uitgekookt", link: "/item", image: Uitgekookt},
    {id: 2, title:"Globaland", link: "/item", image: Project},
    {id: 3, title:"Loavies", link: "/item", image: Loafies},
    {id: 4, title:"Chateau Meiland", link: "/item", image: meiland},
    {id: 5, title:"Ololai", link: "/item", image: Ololai},
    {id: 6, title:"Henneke", link: "/item", image: henneke}
];

class CaseStudy extends Component {
    constructor() {
        super();
        this.state = {
            backgroundImage: "",
            show: false,
            rightImage: false
        }
    }

    handleImageChange = (props) => {
        this.isEven(props.number);
        this.setState({backgroundImage: props.image, show: true})
    };

    handleRemove = () => {
        this.setState({show: false})
    };

    isEven = (num) => {
        if (num % 2 === 0) {
            this.setState({rightImage: true});
        } else {
            this.setState({rightImage: false});
        }
    };

    render() {
        return (
            <div className={"case-study container full-height black"}>
                <div className="row">
                    <div className={"card-container"}>
                        {studyArray.map(item => {
                            return <Card hover={this.handleImageChange} leave={this.handleRemove} number={item.id} link={item.link} name={item.title} image={item.image} key={item.id}  />
                        })}
                        <div className="card-container__mention">
                            <h5>We hebben 4 nieuwe projecten toegevoegd aan ons archief</h5>
                            <NavLink onClick={() => window.scrollTo(0, 0)} to={"/projecten"} className={"button"}>Naar projecten</NavLink>
                        </div>
                    </div>
                </div>

                <div className={`card-container__back-container ${this.state.rightImage ? "right" : "left" }`}>
                    <img className={`card-container__image ${this.state.show ? "show" : "" }`} src={this.state.backgroundImage} alt=""/>

                </div>
            </div>
        )
    }
}

export default CaseStudy;