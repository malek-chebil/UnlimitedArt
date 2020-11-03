import React from "react";
import ReactDOM from "react-dom";
///////////Redux///////////

import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../Redux/redux";

///////////Components///////////

import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import NavbarUA from "./components/navbar.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
///////////Routes///////////

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavbarUA />
        <Route path="/" exact={true}>
          {" "}
          <Home />
        </Route>
        <Signup />
        <Login />
        <Footer />
      </div>
    );
  }
}

const store = createStore(rootReducer);
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>{" "}
  </Router>,
  document.getElementById("app")
);
