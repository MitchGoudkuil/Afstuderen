import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

class Scroller extends Component {
    constructor() {
        super();
        this.state = {
          scroll: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({scroll: true});
        }, 1000)
    };

    render() {
        return  <div className={`scroller__scroll`}>
            <div className={`scroller__inner ${this.state.scroll ? "" : "noscroll" }`}>
                <svg width="34px" height="37px" viewBox="0 0 34 37" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="1.0-copy" transform="translate(-703.000000, -725.000000)">
                            <g id="Top" transform="translate(0.000000, -1.000000)">
                                <g id="Scroll-down" transform="translate(704.000000, 726.000000)">
                                    <circle className="ball" id="Oval" fill="#FFFFFF" cx="16" cy="20"
                                            r="2"></circle>
                                    <circle className="ball" id="Oval-Copy" fill="#FFFFFF" cx="16" cy="11"
                                            r="2"></circle>
                                    <circle className="ball" id="Oval-Copy-2" fill="#FFFFFF" cx="16" cy="2"
                                            r="2"></circle>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    }
};

export default withRouter(Scroller)