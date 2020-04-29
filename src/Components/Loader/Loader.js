import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";

const BottomLoader = props => {
    const [loading, setLoading] = useState(false);
    const [slide, setSlide] = useState(false);

    useEffect(() => {
        if(props.bottom && props.page === 'about') {
            console.log('het lukt naar about');
            setLoading(true);
            setTimeout(() => {
                setSlide(true)
                setTimeout(() => {
                    props.history.push(`/${props.page}`);
                    setSlide(false);
                    window.scrollTo(0, 0)
                },1000);
            },1000);
        }

        if(props.bottom && props.page === 'projecten') {
            console.log('het lukt naar projecten');
            setLoading(true);
            setTimeout(() => {
                setSlide(true)
                setTimeout(() => {
                    setSlide(false)
                    props.history.push(`/${props.page}`);
                    window.scrollTo(0, 0)
                },1000);
            },1000);
        }

        if(props.bottom && props.page === 'contact') {
            console.log('het lukt naar contact');
            setLoading(true);
            setTimeout(() => {
                setSlide(true)
                setTimeout(() => {
                    setSlide(false)
                    props.history.push(`/${props.page}`);
                    window.scrollTo(0, 0)
                },1000);
            },1000);
        }

    }, [props.bottom, props.page, props.history]);

    return (
        <>
            <div className={'loader-container'}>
                <div className={'loader__absolute'}>
                    {props.children}

                </div>
            </div>
            <div className={`loader__overlay  ${slide ? "slide-in" : null}`}>l</div>
        </>
    )

};

export default withRouter(BottomLoader)