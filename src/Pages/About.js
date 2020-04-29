import React,{Component} from "react";
import BackButton from "../Components/BackButton/BackButton";
import BottomLoader from "../Components/Loader/Loader";
import TeamContainer from "../Components/TeamContainer/TeamContainer";
import projectImg from '../Images/projects.png';


class About extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            nextLoaded: false,
            nextPage: "projecten"
        }
    }

    componentDidMount() {
        if(!this.state.loaded) {
            setTimeout(() => {
                this.setState({loaded: true})
            }, 300)
        }
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = winScroll / height;

        if(scrolled === 1) {
            console.log("Push ABOUT PAGE");
            this.setState({nextLoaded: true});
        }
        console.log(scrolled)
    };

    render() {
        return (
            <div className={'about bottom-fix'}>
                <BackButton link={"/home"}/>
                <div className={'row about__introduction'}>
                    <div className={`about__title`}>
                        <p>Over ons</p>
                        <h1 className={"anim-w--top"}>Maar wie zijn wij nou eigenlijk?</h1>
                    </div>
                    <div className={`${this.state.loaded ? "visible" : "invisible" }`}>
                        <p>IQ-Media: een full-service marketing-, media- & reclamebureau vol energie. Gespecialiseerd in de strategische inzet en productie van hedendaagse marketing- en <a href="/"> communicatiemiddelen.</a> <br />De ideale partner in productie van al uw media.<br /><br /> Dagelijks werken 40 vakspecialisten aan de realisatie van uiteenlopende producties. Alle technologie en creativiteit samen onder één dak.  </p>
                    </div>
                </div>
                <div className={`about__specialty ${this.state.loaded ? "reveal" : "" }`}>
                    <div className={"row"}>
                        <div className={"about__specialty--left"}>
                            <h2>Awards</h2>
                            <h2>0</h2>
                            <p>We zien liever tevreden klanten!</p>
                        </div>
                        <div className={"about__specialty--right"}>
                            <div className="content-block anim-w">
                                <h3>Communicatie</h3>
                                <p>We pride ourselves on pushing the boundaries of digital design and development. We combine relevant trends and best practices to build platforms with longevity.</p>
                            </div>

                            <div className="content-block">
                                <h3>Samenwerking</h3>
                                <p>We pride ourselves on pushing the boundaries of digital design and development. We combine relevant trends and best practices to build platforms with longevity.</p>
                            </div>

                            <div className="content-block">
                                <h3>Creatie</h3>
                                <p>We pride ourselves on pushing the boundaries of digital design and development. We combine relevant trends and best practices to build platforms with longevity.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <TeamContainer />
                <BottomLoader page={this.state.nextPage} bottom={this.state.nextLoaded}>
                    <img style={{width: "100%"}} src={projectImg} alt=""/>
                </BottomLoader>
            </div>

        )
    }
}


export default About