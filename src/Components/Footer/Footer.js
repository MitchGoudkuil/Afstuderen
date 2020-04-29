import React from "react";

const Footer = (props) => {
    return <div className={`footer ${props.loaded ? "visible" : "" }`}><p>© 2001 – 2020 IQ-Media BV</p> <p>Algemene VoorwaardenDisclaimer</p></div>
};

export default Footer