import React,{Component} from "react";
import Splash from "../Components/Splash/Splash";
import CaseStudy from "../Components/Casestudy/CaseStudy";
import BottomLoader from "../Components/Loader/Loader";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            nextPage: "about",
            pagenl: "Over ons",
            timer: 0
        };
    }

    componentDidMount() {
        document.title = 'IQ-Media | Home';
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);

    }

    timer = () => {
        this.setState({timer: this.state.timer + 1});
        if(this.state.timer >= 5) {
        }
    };

    handleScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = winScroll / height;
        if(scrolled === 1) {
            this.setState({loaded: true});
        } else {
            this.setState({loaded: false, timer: 0});
        }
    };

    render() {
        return (
            <div className={"home bottom-fix"}>
                <Splash />
                <CaseStudy/>
                <BottomLoader nl={this.state.pagenl} page={this.state.nextPage} bottom={this.state.loaded}>
                </BottomLoader>
            </div>
        )
    }
}

// <div className="lds-ellipsis">
//     <div></div>
//     <div></div>
//     <div></div>
//     <div></div>
// </div>

export default Home