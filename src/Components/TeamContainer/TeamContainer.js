import React, {Component} from "react";
import DragScrollProvider from 'drag-scroll-provider';
import {NavLink} from "react-router-dom";
import TeamCard from "./TeamCard";
import Lisa from '../../Images/test-image1.jpg';
import Rick from '../../Images/test-image2.jpg';
import Ricardo from '../../Images/test-image3.jpg';
import Anouk from '../../Images/test-image4.jpg';
import Jesse from '../../Images/test-image5.jpg';

let teamArray = [
    {id: 1, name: "Lisa Doe", image: Lisa, service: "Film editor"},
    {id: 2, name: "Rick Vlesen", image: Rick, service: "Front-end developer"},
    {id: 3, name: "Ricardo Krat", image: Ricardo, service: "UX Designer"},
    {id: 4, name: "Anouk Poulsen", image: Anouk, service: "Marketing"},
    {id: 5, name: "Jesse Spenkelink", image: Jesse, service: "Office clown"},
    {id: 6, name: "Rick", image: Rick, service: "Front-end developer"},
    {id: 7, name: "Ricardo", image: Ricardo, service: "UX Designer"},
    {id: 8, name: "Anouk", image: Anouk, service: "Marketing"},
];

class TeamContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDown: false,
            startX: null,
            scrollLeft: null
        }
    }

    render() {
        return <div className={"team-container"}>
            <div className="team-container__heading">
                <h2>Het team</h2>
                <div>
                    <h5><strong>Hier ook tussen staan?</strong></h5>
                    <NavLink className={"button"} to={"/contact"}>
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
                        {teamArray.map(person => {
                            return <TeamCard image={person.image} name={person.name} key={person.id} service={person.service} />
                        })}
                    </div>
                )}
            </DragScrollProvider>

        </div>
    }
}

export default TeamContainer