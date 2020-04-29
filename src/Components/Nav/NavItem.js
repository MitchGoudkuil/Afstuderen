import React from 'react';
import {NavLink} from "react-router-dom";


const NavItem = (props) => {
    return ( <NavLink onClick={() => {window.scrollTo(0, 0)}} onMouseLeave={props.leave} onMouseEnter={props.hover} to={`/${props.page}`}><h1 className={`anim-w ${props.loaded ? "appear-w" : ""}`}>{props.page}</h1></NavLink>)
};

export default NavItem