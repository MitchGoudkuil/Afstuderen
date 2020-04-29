import React from "react";

let TeamCard = (props) => {
    return (<div className={"person__card card"}>
        <div className={"person__image person__image--inverted"}>
            <img src={props.image} alt=""/>
        </div>
        <div className={"person__title"}>
            <h5>{props.name}</h5>
            <small>{props.service}</small>
        </div>
    </div>)
};

export default TeamCard