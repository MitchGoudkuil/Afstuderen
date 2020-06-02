import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

class Scroller extends Component {
    constructor() {
        super();
        this.state = {
            scroll: false,
            showMention: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({scroll: true});
        }, 1000);
        setTimeout(() => {
            this.setState({showMention: false})
        }, 6000)
    };


    render() {
        return  <div className={`scroller__scroll`}>
            {this.state.showMention ? (
                <small className={`scroller__notion`}>Ervaar de website door te scrollen</small>
            ) : null }
            <div className={`scroller__inner ${this.state.scroll ? "" : "noscroll" }`}>

                <svg id="scroll-icon" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 51.47" style={{overflow: "visible"}}>
                    <path className="scroll-icon__item"
                          d="M12 37.4a12 12 0 01-12-12V12a12 12 0 0124 0v13.4a12 12 0 01-12 12zM12 2A10 10 0 002 12v13.4a10 10 0 0020 0V12A10 10 0 0012 2z"/>
                    <rect className="scroll-icon__item" x="11.05" y="9.3" width="1.91" height="7.18" rx=".95"/>
                    <path className="scroll-icon__item arrow"
                          d="M11.38 45.54l-5.29-4.13A1 1 0 015.92 40a1 1 0 011.4-.17L11.39 43a1 1 0 001.22 0l4.07-3.17a1 1 0 011.4.17 1 1 0 01-.17 1.41l-5.29 4.13a1 1 0 01-1.24 0z"/>
                    <path className="scroll-icon__item arrow"
                          d="M11.38 51.26l-5.29-4.13a1 1 0 01-.17-1.41 1 1 0 011.4-.17l4.07 3.17a1 1 0 001.22 0l4.07-3.17a1 1 0 011.4.17 1 1 0 01-.17 1.41l-5.29 4.13a1 1 0 01-1.24 0z"/>
                </svg>
            </div>
        </div>
    }
};

export default withRouter(Scroller)