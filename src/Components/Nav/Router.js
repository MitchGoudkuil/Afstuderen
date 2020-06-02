import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Projecten from "../../Pages/Projecten";
import Contact from "../../Pages/Contact";
import CaseDetail from "../Casestudy/CaseStudyDetail";


const Router = () => {
  return (
    <>
        <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projecten" component={Projecten} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/project/globaland" component={CaseDetail} />
    </>
  )
}

export default withRouter(Router)