import React from "react";
import {NavLink} from "react-router-dom";

const Card = (props) => {
    return (

            <div className={"card case-card"}>
                <NavLink to={props.link}>
                    <div className={"card__image"} style={{backgroundImage: `url(${props.image ? props.image : "none"})`}}></div>
                    <h4 className={"card__title"}>{props.name}</h4>
                </NavLink>
            </div>

    )
};

export default Card