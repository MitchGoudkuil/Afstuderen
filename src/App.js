import React,{Component} from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import MainNav from './Components/Nav/Mainnav';
import Router from "./Components/Nav/Router";
import Scroller from "./Components/Scroller/Scroller";

class App extends Component {
    constructor() {
        super();
        this.state = {
            x: 0,
            y: 0
        }
    }

    followCursor = (e) => {
        this.setState({x: e.pageX + "px" , y: e.pageY + "px"})
    };

    render() {
        return (
            <BrowserRouter>
                <div className="App" onMouseMove={this.followCursor.bind(this)}>
                    <Scroller/>
                    <div id={"cursor"} style={{left: this.state.x, top: this.state.y}}></div>
                    <MainNav/>
                    <Router/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
