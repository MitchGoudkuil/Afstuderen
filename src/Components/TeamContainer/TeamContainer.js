import React, {Component} from "react";
import DragScrollProvider from 'drag-scroll-provider';
import {NavLink} from "react-router-dom";
import TeamCard from "./TeamCard";
import Lisa from '../../Images/test-image1.jpg';
import Rick from '../../Images/test-image2.jpg';
import Ricardo from '../../Images/test-image3.jpg';
import Anouk from '../../Images/test-image4.jpg';
import Jesse from '../../Images/test-image5.jpg';
import Surf from '../../Images/surf.png';
import Skate from '../../Images/skate.jpg';
import Cats from '../../Images/catlady.jpg';
import Books from '../../Images/books.jpg';
import Game from '../../Images/game.jpeg';


let teamArray = [
    {id: 1, name: "Lisa Doe", image: Lisa, service: "Film editor", backPic: Cats},
    {id: 2, name: "Rick Vlesen", image: Rick, service: "Front-end developer", backPic: Surf},
    {id: 3, name: "Ricardo Krat", image: Ricardo, service: "UX Designer", backPic: Skate},
    {id: 4, name: "Anouk Poulsen", image: Anouk, service: "Marketing", backPic: Books},
    {id: 5, name: "Jesse Spenkelink", image: Jesse, service: "Office clown", backPic: Game},
    {id: 6, name: "Rick", image: Rick, service: "Front-end developer", backPic: Surf},
    {id: 7, name: "Ricardo", image: Ricardo, service: "UX Designer", backPic: Skate},
    {id: 8, name: "Anouk", image: Anouk, service: "Marketing", backPic: Books},
];

class TeamContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDown: false,
            startX: null,
            scrollLeft: null,
            currentPic: "",
            xImg: 0,
            yImg: 0,
        }
    }

    handleMouse = (e) => {
        this.setState({xImg: e.pageX + "px"})
    };

    handleImageChange = (e) => {
        console.log(e);
        this.setState({currentPic: e})
    };

    render() {
        return <div className={"team-container"} onMouseMove={this.handleMouse.bind(this)}>
            <div className="team-container__heading">
                <h2>Het team</h2>
                <div>
                    <h5><strong>Hier ook tussen staan?</strong></h5>
                    <NavLink onClick={() => window.scrollTo(0, 1200)} className={"button"} to={"/contact"}>
                        Bekijk onze vacatures
                    </NavLink>
                </div>
            </div>
            <DragScrollProvider>
                {({ onMouseDown, ref }) => (
                    <div
                        className="scrollable team-container__inner"
                        ref={ref}
                        onMouseDown={onMouseDown}>
                        <div className={"person__back"} style={{left: this.state.xImg}}>
                            <div className="person__back-inner" style={{backgroundImage: `url(${ this.state.currentPic })`}}></div>
                        </div>
                        {teamArray.map(person => {
                            return <TeamCard onMouseOver={this.handleImageChange} backPic={person.backPic} image={person.image} name={person.name} key={person.id} service={person.service} />
                        })}
                    </div>
                )}
            </DragScrollProvider>

        </div>
    }
}

export default TeamContainer