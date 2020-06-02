import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import UpArrow from '../../Images/icons/up-arrow.svg';

const BackButton = (props) => {
    let [show, setShow] = useState(props.show);
    let [before, setBefore] = useState("");

    useEffect(() => {
        setBefore(props.link.substring(1));
    });


    return <div className={`back-button ${props.black ? "back-button--black" : "" }`}>
        <NavLink onClick={() => {window.scrollTo(0, 0)}} to={props.link}>
            <div className={`back-button__icon ${show ? "show" : "" }`}><img  src={UpArrow} alt=""/>{before}</div>

        </NavLink>
    </div>

};

export default BackButton