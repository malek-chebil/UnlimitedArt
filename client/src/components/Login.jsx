import React from "react";

//////React-router/////

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//////Client/////
import ClientLogin from "./Client/ClientLogin.jsx";

//////FreeLancer/////
import FreelancerLogin from "./Freelancer/FreelancerLogin.jsx";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/ClientLogin" component={ClientLogin} />
          <Route path="/FreelancerLogin" component={FreelancerLogin} />
        </Switch>
      </div>
    );
  }
}
export default Login;
