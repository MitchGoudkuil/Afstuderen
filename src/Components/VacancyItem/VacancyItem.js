import React from "react";
import {NavLink} from "react-router-dom";

const VacancyItem = (props) => {
 return <div className={"vacancy__item"}>
     <div className={"vacancy__item--left"}>
         {props.date}
     </div>
     <div className={"vacancy__item--right"}>
         <div className="vacancy__title">
             <p>{props.time}</p>
             <h3>{props.title}</h3>
         </div>

         <NavLink to={"/#"}>Lees meer</NavLink>
     </div>
 </div>
};

export default VacancyItem