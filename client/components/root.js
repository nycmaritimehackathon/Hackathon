import React from "react";
import '../../public/stylesheet.css';
import "./src/assets/scss/material-kit-react.scss?v=1.4.0";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages for this product
import Components from "./src/views/Components/Components.jsx";
import LandingPage from "./src/views/LandingPage/LandingPage.jsx";
import ProfilePage from "./src/views/ProfilePage/ProfilePage.jsx";
import LoginPage from "./src/views/LoginPage/LoginPage.jsx";

const root = () => (
  <div>
        <Router history={hist}>
          <Switch>
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/login-page" component={LoginPage} />
            <Route path="/" component={Components} />
          </Switch>
        </Router> 
  </div>
)

export default root;
