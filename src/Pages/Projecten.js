import React,{Component} from "react";
import BottomLoader from "../Components/Loader/Loader";
import BackButton from "../Components/BackButton/BackButton";
import ProjectContainer from "../Components/ProjectContainer/ProjectContainer";
import arrow from '../Images/icons/arrow.svg';


class Projecten extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            nextLoaded: false,
            nextPage: "contact",
            toggle: false
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        if(!this.state.loaded) {
            setTimeout(() => {
                this.setState({loaded: true})
            }, 300)
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleToggle = () => {
        if(!this.state.toggle) {
            this.setState({toggle: true})
        }
        if(this.state.toggle) {
            this.setState({toggle: false})
        }
    };

    handleScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = winScroll / height;

        if(scrolled === 1) {
            console.log("Push contact");
            this.setState({nextLoaded: true});
        }
        console.log(scrolled)
    };

    render() {
        return (
            <div className={"projects bottom-fix"}>
                <BackButton link={"/about"}/>
                <div className={"container projects__container"}>
                    <div className={`projects__container--left ${this.state.toggle ? "hides" : "" }`} >
                        <div onClick={this.handleToggle} className={`projects__container__toggle ${this.state.loaded ? "visible" : "" }`}>
                            <img src={arrow} alt=""/>
                        </div>
                        <div className={"base-center anim-w--top"}>
                            <h2>Wat we nog meer doen.</h2>
                            <p>We pride ourselves on pushing the boundaries of digital design and development. We combine relevant trends and best practices to build platforms with longevity.</p>
                        </div>
                    </div>
                    <div className={`projects__container--right ${this.state.loaded ? "reveal" : ""} ${this.state.toggle ? "expands" : ""}`} >
                        <ProjectContainer toggle={this.state.toggle}/>
                    </div>
                </div>
                <BottomLoader page={this.state.nextPage} bottom={this.state.nextLoaded}>
                    <div className={'full-height contact'}>
                        <div className={'base-center'}>
                            <h3>Waar kunnen wij jou mee helpen?</h3>
                            <div className={"flex"}>
                                <label htmlFor="name">Ik ben</label>
                                <input className={"form__field"} id={"name"} type="text"/>
                            </div>
                        </div>
                    </div>
                </BottomLoader>
            </div>
        )
    }
}


export default Projecten