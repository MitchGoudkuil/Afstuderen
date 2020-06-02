import React from "react";
import {NavLink} from "react-router-dom";
import Tilt from 'react-tilt'


const Card = (props) => {
    return (

            <div className={"card case-card"} onMouseLeave={props.leave} onMouseEnter={() => props.hover({image: props.image, number: props.number})}>
                    <NavLink to={props.link} onClick={() => window.scrollTo(0, 0)}>
                        <Tilt className="Tilt" options={{ max : 15, reverse: false, perspective: 3000, easing: "cubic-bezier(.03,.98,.52,.99)" }}  >
                        <div className={"case-card__image"} style={{backgroundImage: `url(${props.image ? props.image : "none"})`}}>
                            <h3 className="case-card__number"> {props.number}.0</h3>
                        </div>
                        <h5 className={"case-card__title"}>{props.name}</h5>
                        </Tilt>
                    </NavLink>
            </div>


    )
};

export default Card