import React, {Component} from "react";
import Card from "../Cards/Card";
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
]

class CaseStudy extends Component {
    render() {
        return (
            <div className={"container full-height black"}>
                <div className="row">
                    <div className={"card-container"}>
                        {studyArray.map(item => {
                            return <Card link={item.link} name={item.title} image={item.image} key={item.id}  />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default CaseStudy;