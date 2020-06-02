import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const VacancyItem = (props) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
       if(props.loaded) {
           setLoaded(true);
       } else {
           setLoaded(false);
       }
    }, [props.loaded]);

 return <div className={`vacancy__item`}>
     <div className={`vacancy__item--left`}>
         <p className={`anim-w ${loaded ? "appear-w" : "" }`}>{props.date}</p>

     </div>
     <div className={`vacancy__item--right anim-w ${loaded ? "appear-w" : "" }`}>
         <div className="vacancy__title">
             <p>{props.time}</p>
             <h3>{props.title}</h3>
         </div>

         <NavLink to={"/#"}>Lees meer</NavLink>
     </div>
 </div>
};

export default VacancyItem