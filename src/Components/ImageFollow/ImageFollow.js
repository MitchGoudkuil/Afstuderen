import React, { useState, useRef, useEffect } from "react";

const ImageFollow = (props) => {
    let image = useRef(null);
    let [popUp, setPopUp] = useState(false);
    let [imageHeight, setImageHeight] = useState(null);

    const getHeight = () => {
        let halfHeight = image.current.height / 2;
        console.log(image.current.height / 2);
        setImageHeight(halfHeight);
    };

    useEffect(() => {
        setPopUp(props.active);
    }, [props.active]);

    return (<img onLoad={getHeight} ref={image} style={{transform: `translate(${props.x - 400}px, ${props.y - imageHeight}px)`}} className={`image-follow ${popUp ? "popup" : ""}`} src={props.background} alt="" />)
};

export default ImageFollow