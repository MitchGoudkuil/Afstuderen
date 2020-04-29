import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import UpArrow from '../../Images/icons/up-arrow.svg';

const BackButton = (props) => {
    let [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true)
    });


    return <div className={"back-button"}>
        <NavLink onClick={() => {window.scrollTo(0, 0)}} to={props.link}>
            <img className={`back-button__icon ${show ? "show" : "" }`} src={UpArrow} alt=""/>
        </NavLink>
    </div>

};

export default BackButton