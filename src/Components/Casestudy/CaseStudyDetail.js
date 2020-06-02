import React, {Component} from "react";
import GlobaImg from '../../Images/project-dark.jpg'
import globaLogo from '../../Images/globaland-logo.png';
import Parallax from "react-rellax/lib/index";
import backArrowImg from "../../Images/icons/back-arrow.svg";
import {NavLink} from "react-router-dom";
import ReactPlayer from "react-player";
import Ololai from '../../Images/projects/ollolai.jpg';
import pti from '../../Images/projects/pti.jpg';
import henneke from '../../Images/projects/henneke-1.jpg'

class CaseDetail extends Component {
    render() {
        return <div className={"casestudy-detail"}>
            <div className="detail__head" style={{backgroundImage: `url(${GlobaImg})`}}>
                <div className="detail__back-button">
                    <NavLink to={"/home"}>
                    <img src={backArrowImg} alt=""/>
                    <p>Terug</p>
                    </NavLink>

                </div>
                <Parallax speed={-4} percentage={.5} >
                    <div className="detail__cat">
                        <h1>Globaland XXL</h1>
                        <div className="tag">Educatief spel</div>
                    </div>
                </Parallax>
            </div>
            <div className="detail__text">
                <div>
                    <img src={globaLogo} alt=""/>
                </div>
                    <div>
                        <h2>Het project</h2>
                        <p>We pride ourselves on pushing the boundaries of digital design and development. We combine relevant trends and best practices to build platforms with longevity.</p>
                        <p>Website:</p>
                        <a href="#">globalandxl.nl</a>
                    </div>
            </div>
            <div className="detail__text-white">
                <div>
                    <h3>Conceptualisatie</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et orci ultricies, tempus justo molestie, laoreet magna. Nam ullamcorper dolor eu dui congue varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin eget ante vestibulum urna pulvinar ultrices.</p>
                </div>
                <div>
                    <h3>Uitwerking</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et orci ultricies, tempus justo molestie, laoreet magna. Nam ullamcorper dolor eu dui congue varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin eget ante vestibulum urna pulvinar ultrices.</p>
                </div>
                <div>
                    <h3>Marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et orci ultricies, tempus justo molestie, laoreet magna. Nam ullamcorper dolor eu dui congue varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin eget ante vestibulum urna pulvinar ultrices.</p>
                </div>
            </div>
            <div className={"detail__video"}>
                <h3>Product video</h3>
                <ReactPlayer className={"detail__player"} width={"60%"} height={"500px"} url={"https://www.youtube.com/watch?v=ql_sZ169AX0"} volume={0} muted={true} />
            </div>
            <div className="detail__footer">
                <h2>Volgende cases</h2>
                <div className={"detail__footer-links"}>
                    <div style={{backgroundImage: `url(${Ololai})`}}>hey</div>
                    <div style={{backgroundImage: `url(${pti})`}}>hey</div>
                    <div style={{backgroundImage: `url(${henneke})`}}>hey</div>
                </div>
            </div>

        </div>
    }
}

export default CaseDetail