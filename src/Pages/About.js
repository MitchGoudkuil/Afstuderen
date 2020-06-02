import React,{Component} from "react";
import CountUp from 'react-countup';
import BottomLoader from "../Components/Loader/Loader";
import TeamContainer from "../Components/TeamContainer/TeamContainer";
import Parallax from 'react-rellax';
import iqTeam from '../../src/Images/team.png';

let interval;
const target = 50;
class About extends Component {
    constructor() {
        super();
        this.stickyBar = React.createRef();
        this.state = {
            loaded: false,
            nextLoaded: false,
            nextPage: "projecten",
            sticky: false,
            x: 0,
            y: 0,
            pop: false,
            number: 0,
            start: "",
            redraw: false
        }
    }

    componentDidMount() {
        document.title = 'IQ-Media | Over ons';
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
        const barOffset = this.stickyBar.current.getBoundingClientRect();
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = winScroll / height;

        if (!(barOffset.y > 0)) {
            this.setState({sticky: true, redraw: true})
        } else {
            this.setState({sticky: false})

        }

        if(scrolled === 1) {
            this.setState({nextLoaded: true});
        } else {
            this.setState({nextLoaded: false});
        }
    };

    handleBackground = (e) => {
        this.setState({x: e.pageX - 250 + "px" , y: e.pageY + "px", pop: true})
    };

    handleRemoveBackground = (e) => {
        this.setState({x: e.pageX - 250 + "px" , y: e.pageY + "px", pop: false})
    };

    render() {
        return (
            <div className={'about bottom-fix'}>
                <div className="about__wrap">
                    <div className={'row about__introduction'} onMouseMove={this.handleBackground.bind(this)} onMouseLeave={this.handleRemoveBackground}>
                        <div className={`about__follow ${this.state.pop ? "pop" : ""}`} style={{left: this.state.x, top: this.state.y}}>
                            <img className={""}  src={iqTeam} alt="Team foto"/>
                        </div>
                        <div className={`about__title`} >
                            <Parallax speed={-1.5} percentage={.5}>
                            <p>Over ons</p>
                            <h1 className={"anim-w--top"}>Maar wie zijn wij nou eigenlijk?</h1>
                            </Parallax>
                        </div>
                        <div className={`about__info ${this.state.loaded ? "visible" : "invisible" }`}>
                            <Parallax speed={-1.5} percentage={.5}>
                            <p>IQ-Media: een full-service marketing-, media- & reclamebureau vol energie. Gespecialiseerd in de strategische inzet en productie van hedendaagse marketing- en <a href="/"> communicatiemiddelen.</a> <br />De ideale partner in productie van al uw media.<br /><br /> Dagelijks werken 40 vakspecialisten aan de realisatie van uiteenlopende producties. Alle technologie en creativiteit samen onder één dak.  </p>
                            </Parallax>
                        </div>
                    </div>
                </div>
                <div className={`about__specialty ${this.state.loaded ? "reveal" : "" }`}>

                        <div ref={this.stickyBar} className={"about__specialty--left"}>
                            <div className={`about__specialty--inner ${this.state.sticky ? "sticky" : null }`}>
                                {/*<h2 className={`nmber`}>{this.state.number}</h2>*/}
                                {this.state.sticky ? (
                                    <div>
                                        <h2 className={`nmber`}>
                                    <CountUp
                                        end={356}
                                        duration={7}
                                    >

                                    </CountUp>
                                    </h2>
                                    <h2 className={`word ${this.state.sticky ? "animate" : ""}`}></h2>
                                    </div>
                                ) : null}

                            </div>
                        </div>
                        <div className={"about__specialty--right"}>
                            <div className="content-block anim-w">
                                <h3>We Creëren</h3>
                                <p>We bedenken ideeën en oplossingen voor onze klanten en ontwikkelen en produceren content, techniek en functionaliteit in alle vormen en maten. </p>
                            </div>

                            <div className="content-block">
                                <h3>We Distribueren</h3>
                                <p>We ontwikkelen complete communicatieplatforms en -campagnes. Van e-commerce websites, live streaming cursusomgevingen tot mobiele apps en diensten. </p>
                            </div>

                            <div className="content-block">
                                <h3>We Beoordelen</h3>
                                <p>We vinden dat resultaat het beste bewijs is van succes en dat strategie gericht moet zijn op aantoonbare resultaten. Resultaten meten we met slimme tools of gefundeerde doelgroeponderzoeken.</p>
                            </div>
                        </div>

                </div>
                <TeamContainer />
                <BottomLoader nl={this.state.nextPage} page={this.state.nextPage} bottom={this.state.nextLoaded}/>
            </div>

        )
    }
}


export default About