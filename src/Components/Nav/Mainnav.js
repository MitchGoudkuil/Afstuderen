import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import Logo from "../Logo/Logo";
import Menu from "./Menu";
import { CSSTransition } from 'react-transition-group';
import BackButton from "../BackButton/BackButton";


class Mainnav extends Component {
    constructor() {
        super();
        this.state = {
            menuToggle: false,
            show: false,
            backButtonLink: "",
            backArrowShow: "",
            black: false,
            pageName: "home"
        }
    }

    handleMenuClick = () => {
        if(!this.state.menuToggle){
            this.setState({menuToggle: true, backArrowShow: false})
        } else {
            this.setState({menuToggle: false})
            if(this.state.pageName === "home") {
                this.setState({backArrowShow: false})
            } else {
                this.setState({backArrowShow: true})
            }
        }

    };

    componentDidMount() {
        this.props.history.listen((location, action) => {
            this.setState({menuToggle: false, show: true});
            let pageName = this.props.history.location.pathname.substr(1);

            if(pageName === "home") {
                this.setState({backArrowShow: false, pageName: pageName})
            }

            if(pageName === "about") {
                this.setState({backButtonLink: "/home", backArrowShow: true, pageName: pageName})
            }

            if(pageName === "projecten") {
                this.setState({backButtonLink: "/about", backArrowShow: true, pageName: pageName})
            }

            if(pageName === "contact") {
                this.setState({backButtonLink: "/projecten", backArrowShow: true, pageName: pageName})
            }
        });


        if(!this.state.show) {
            setTimeout(() => {
                this.setState({show: true});
            }, 500)

        }
    }


    render() {

        return (
            <>
                <div className={"nav"}>
                    <NavLink to={"/home"}>
                    <Logo width={"60px"}/>
                    </NavLink>
                    {this.state.backArrowShow ? (
                        <BackButton show={this.state.backArrowShow} black={this.state.black} link={this.state.backButtonLink}/>
                    ) : null }
                    <div className={`nav__hamburger ${this.state.show ? "visible" : "" } ${this.state.menuToggle ? "active" : "" }`} onClick={this.handleMenuClick}>
                        <div className="nav__hamburger-icon"></div>
                    </div>
                </div>
                {this.state.menuToggle ?
                    <CSSTransition in={this.state.menuToggle} appear={true} timeout={300} classNames={'slide'}>
                        <Menu toggle={this.state.menuToggle} />
                    </CSSTransition>
                    : ""}
            </>
        )
    }
}

export default withRouter(Mainnav);