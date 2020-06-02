import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";

let timeout;
let timeoutInTimeout;
const BottomLoader = props => {
    const [loading, setLoading] = useState(false);
    const [slide, setSlide] = useState(false);
    const [loader, setLoader] = useState(false);
    const [loadTimeOut, setLoadTimeOut] = useState(1600);

    useEffect(() => {
        if(!props.bottom) {
            if (timeout) {
                clearTimeout(timeout);
                setLoading(false);
                setLoader(false);
            }
            if (timeoutInTimeout) {
                clearTimeout(timeoutInTimeout);

            }
        }

        if(props.bottom && props.page === 'about') {
            setLoading(true);
            setLoader(true);
            timeout = setTimeout(() => {
                setSlide(true);
                timeoutInTimeout = setTimeout(() => {
                    setSlide(false);
                    setLoader(false);
                    window.scrollTo(0, 0);
                    props.history.push(`/${props.page}`);

                },1000);
            },loadTimeOut);
        }

        if(props.bottom && props.page === 'projecten') {
            setLoading(true);
            setLoader(true)
            timeout = setTimeout(() => {
                setSlide(true);
                timeoutInTimeout = setTimeout(() => {
                    setSlide(false);
                    setLoader(false);
                    window.scrollTo(0, 0)
                    props.history.push(`/${props.page}`);

                },1000);
            },loadTimeOut);
        }

        if(props.bottom && props.page === 'contact') {
            setLoading(true);
            setLoader(true)
            timeout = setTimeout(() => {
                setSlide(true)
                timeoutInTimeout = setTimeout(() => {
                    setSlide(false);
                    setLoader(false);
                    window.scrollTo(0, 0)
                    props.history.push(`/${props.page}`);
                },1000);
            },loadTimeOut);
        }

    }, [props.bottom, props.page, props.history, loadTimeOut]);



    return (
        <>
            <div className={'loader-container'}>
                {loading ? (<div className={"loading-bar"}>
                    <div className={`loading-bar__inner`}></div>
                </div>) : null}
                    <div className={'loader__absolute'}>
                                <div className={`loader__inner ${setSlide ? "pop" : "" }`}>
                                    <p>Volgende pagina</p>
                                    <h1 className={`loader__title ${loading ? "animate" : "" }`} data-content={props.nl}>{props.nl}</h1>
                                </div>
                        {/*{props.children}*/}
                    </div>
            </div>
            <div className={`loader__overlay  ${slide ? "slide-in" : null}`}></div>
        </>
    )

};

export default withRouter(BottomLoader)