import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Projecten from "../../Pages/Projecten";
import Contact from "../../Pages/Contact";


const Router = () => {
  return (
    <>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projecten" component={Projecten} />
        <Route path="/contact" component={Contact} />
    </>
  )
}

export default withRouter(Router)