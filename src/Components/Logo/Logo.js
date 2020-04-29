import React, {useEffect, useState} from "react";
import IqLogo from '../../Images/logo.png';

let Logo = (props) => {
    let logoStyle = {
        maxWidth: props.width,
        width: "100%"
    };

    let [show, setShow] = useState(false);

    useEffect(() => {
        if(!show) {
            setTimeout(() => {
                setShow(true);
            }, 1000);
        }

    }, [show]);


    return <img className={`logo ${show ? "visible" : "" }`} src={IqLogo} style={logoStyle} alt=""/>
};

export default Logo