import React,{Component} from "react";
import Splash from "../Components/Splash/Splash";
import CaseStudy from "../Components/Casestudy/CaseStudy";
import BottomLoader from "../Components/Loader/Loader";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            Loaded: false,
            smallLoader: false,
            nextPage: "about",
            timer: 0
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);

    }

    timer = () => {
        this.setState({timer: this.state.timer + 1});
        console.log(this.state.timer);
        if(this.state.timer >= 5) {
        }
    };

    handleScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = winScroll / height;
        console.log(this.timer);
        if(scrolled === 1) {
            this.setState({smallLoader: true});
            console.log("Push ABOUT PAGE");
            this.setState({Loaded: true});
        } else {
            this.setState({Loaded: false, smallLoader: false, timer: 0});
        }
    };

    render() {
        return (
            <div className={"home bottom-fix"}>
                <Splash />
                <CaseStudy/>
                <BottomLoader page={this.state.nextPage} bottom={this.state.Loaded}>
                    {this.state.smallLoader ? (
                        <div className="lds-ellipsis">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> ) : null}
                    <div className={'row about__introduction'}>
                        <div className={"about__title"}>
                            <p>Over ons</p>
                            <h1>Maar wie zijn wij nou eigenlijk?</h1>
                        </div>
                        <div>
                            <p>IQ-Media: een full-service marketing-, media- & reclamebureau vol energie. Gespecialiseerd in de strategische inzet en productie van hedendaagse marketing- en <a href="/"> communicatiemiddelen.</a> De ideale partner in productie van al uw media.<br /><br /> Dagelijks werken 40 vakspecialisten aan de realisatie van uiteenlopende producties. Alle technologie en creativiteit samen onder één dak.  </p>
                        </div>
                    </div>
                </BottomLoader>
            </div>
        )
    }
}


export default Home