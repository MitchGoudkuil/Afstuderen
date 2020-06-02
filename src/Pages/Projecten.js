import React,{Component} from "react";
import BottomLoader from "../Components/Loader/Loader";
import ProjectContainer from "../Components/ProjectContainer/ProjectContainer";

class Projecten extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            nextLoaded: false,
            nextPage: "contact",
            toggle: false
        };
        this.scrollContainer = React.createRef();
    }

    componentDidMount() {
        document.title = 'IQ-Media | Projecten';
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


    handleScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = winScroll / height;
        if(scrolled === 1) {
            console.log("Push contact");
            this.setState({nextLoaded: true});
        } else {
            this.setState({nextLoaded: false});
        }
    };


    render() {
        return (
            <div className={"projects bottom-fix"}>
                <div className={"container projects__container"}>
                    <div ref={this.scrollContainer}  className={`projects__container--right ${this.state.loaded ? "reveal" : ""} ${this.state.toggle ? "expands" : ""}`} >
                        <ProjectContainer toggle={this.state.toggle}/>
                    </div>
                </div>
                <BottomLoader nl={this.state.nextPage} page={this.state.nextPage} bottom={this.state.nextLoaded}/>

            </div>
        )
    }
}


export default Projecten