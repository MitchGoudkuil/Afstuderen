import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import MainNav from './Components/Nav/Mainnav';
import Router from "./Components/Nav/Router";
import Scroller from "./Components/Scroller/Scroller";

function App() {
  return (
      <BrowserRouter>
              <div className="App">
                {/*<Scroller/>*/}
                <MainNav/>
                <Router/>
              </div>
      </BrowserRouter>
  );
}

export default App;
