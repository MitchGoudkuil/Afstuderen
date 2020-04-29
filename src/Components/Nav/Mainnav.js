import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import Logo from "../Logo/Logo";
import menuItem from "../../Images/icons/menu-icon.svg";
import Menu from "./Menu";
import { CSSTransition } from 'react-transition-group';


class Mainnav extends Component {
    constructor() {
        super();
        this.state = {
            menuToggle: false,
            show: false
        }
    }

    handleMenuClick = () => {
        if(!this.state.menuToggle){
            this.setState({menuToggle: true})
        } else {this.setState({menuToggle: false})}

    };

    componentDidMount() {
        this.props.history.listen((location, action) => {
            this.setState({menuToggle: false});
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
                    <img className={`nav__hamburger ${this.state.show ? "visible" : "" }`} onClick={this.handleMenuClick} src={menuItem} alt=""/>
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