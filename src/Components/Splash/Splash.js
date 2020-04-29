import React, {Component} from "react";
import ReactPlayer from 'react-player'
import BackgroundDark from "../../Images/project-dark.jpg";
import video from "../../Images/film.mp4";
import coding from "../../Images/coding.mp4";
import anim from "../../Images/anim.mp4";

let sliderArray = [
    { title: "We filmen", id: 1,  videoLink: video },
    { title: "We Animeren", id: 2, videoLink: anim },
    { title: "We Coderen", id: 3, videoLink: coding },
    { title: "We Bouwen ervaringen", id: 4,  videoLink: video },
    { title: "Wij zijn IQ-Media", id: 5,  videoLink: video }
];

class Splash extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            playing: true,
            current: 1,
            slide: false,
            volume: 0,
            timer: null,
            muted: true,
            videoLink: sliderArray[0].videoLink
        }
    }

    handlePlayed = () => {
        this.setState({playing: false, slide: true});
        if(this.state.current === sliderArray.length) {
            this.setState({current: 1, videoLink: sliderArray[0].videoLink})
        }
        setTimeout(() => {
            this.setState({slide: false, videoLink: sliderArray[this.state.current].videoLink, current: this.state.current + 1, playing: true});

        }, 600)
    };

    handleSlideClick = (id, link) => {
        this.setState({slide: true, playing: false});
        setTimeout(() => {
            this.setState({slide: false, current: id, videoLink: link, playing: true});

        }, 600)
    };

    handleTimer = (time) => {
        let calcTime = Math.ceil(time);
        this.setState({
            timer: calcTime
        });

    };

    componentDidMount() {

    }

    render() {
        return (
            <div className={"container full-height home__top"} style={{backgroundImage: `url(${BackgroundDark})`}}>
                <div className={`splash__slide ${this.state.slide ? "slide-active" : "" }`}></div>
                <ReactPlayer className={"splash__player"} onEnded={this.handlePlayed} width={"100%"} height={"100vh"} url={this.state.videoLink} volume={0} muted={this.state.muted} playing={this.state.playing} onDuration={this.handleTimer}  />
                <div className={'splash__title-block'}>
                    {sliderArray.map(item => {
                        return <h1 key={item.id} onClick={() => this.handleSlideClick(item.id, item.videoLink)} className={`${item.id === this.state.current ? "active" : ""}`}>{item.title} <span>{item.id + ".0"}</span></h1>
                    })}
                </div>
                <div className="splash__timer">
                    <svg width="11" height="62" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(-.5)" fill="none" fillRule="evenodd">
                            <path d="M6 .5v61" stroke="#FFF" strokeLinecap="square"/>
                            <circle className={`loader-bullet ${this.state.playing ? "timing" : ""}`} style={{animationDuration: this.state.playing ? this.state.timer + "s" : ""}} fill="#FFF" cx="6" cy="7.5" r="5.5"/>
                        </g>
                    </svg>
                </div>
            </div>
        )
    }
}

export default Splash