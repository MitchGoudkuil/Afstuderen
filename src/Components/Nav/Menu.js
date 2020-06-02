import React, {Component} from "react";
import NavItem from "./NavItem";
import Footer from "../Footer/Footer";
import ProGif from "../../Images/projecten-gif.gif";
import ImageFollow from "../ImageFollow/ImageFollow";
import iqOffice from '../../Images/0.jpeg';
import ContactGif from '../../Images/contact.gif';
import AboutGif from '../../Images/about.gif';
import HomeGif from '../../Images/home.gif';


const menuArray = [
    {page: "home", id: 1, image: HomeGif },
    {page: "about", id: 2, image: AboutGif},
    {page: "projecten", id: 3, image: ProGif},
    {page: "contact", id: 4, image: ContactGif}];

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            toggle: props.toggle,
            imageY: "",
            imageX: "",
            background: HomeGif,
            active: false
        }
    }

    handleMouseMove = (e) => {
        let y = e.nativeEvent.clientY;
        let x = e.nativeEvent.clientX;
        this.setState({imageY: y, imageX: x })
    };

    handleImage = (image) => {
        this.setState({background: image, active: true})
    };

    handleMouseLeave = () => {
        this.setState({active: false})
    };

    componentDidMount() {
        if(!this.state.loaded) {
            setTimeout(() => {
                this.setState({loaded: true});
            }, 600)

        }
    }

    render() {
        return   (
            <div onMouseMove={this.handleMouseMove} className={`main-menu`}>
                <div className="base-center">
                    <div className={`main-menu__links`}>
                        {menuArray.map(item => {
                            return <NavItem loaded={this.state.loaded} leave={() => this.handleMouseLeave()} hover={() => this.handleImage(item.image)} key={item.id} page={item.page}/>
                        })}
                    </div>
                    <div className={"main-menu__contact"}>
                        <div onMouseLeave={this.handleMouseLeave} onMouseEnter={() => this.handleImage(iqOffice)} className="main-menu__contact--top">
                            <div className={`content-block anim-w ${this.state.loaded ? "appear-w" : "" }`}>
                                <h5>Contact</h5>
                                <p>Tel: <a href={"tel:0384549555"}>+31(0)384549555</a></p>
                                <p>info@iqmedia.nl</p>
                            </div>
                            <div className={`content-block anim-w ${this.state.loaded ? "appear-w" : "" }`}>
                                <h5>Adres</h5>
                                <p>Luttekestraat 68</p>
                                <p>8011 LS Zwolle</p>
                            </div>
                        </div>
                        <div className={`main-menu__contact--bottom anim-w ${this.state.loaded ? "appear-w" : "" }`}>
                            <p>BTW nummer: NL 819549678 B01</p>
                            <p>KvK - Chamber of Commerce: 05067588</p>
                        </div>
                    </div>
                </div>
                <ImageFollow active={this.state.active} y={this.state.imageY} x={this.state.imageX} background={this.state.background}/>
                <Footer loaded={this.state.loaded} />
            </div>
        )
    }
}

export default Menu