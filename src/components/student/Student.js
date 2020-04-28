import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";
import Logout from "./Logout";
import Password from "./Password";

class Student extends Component {
  state = {};
  render() {
    return (
      <header>
        <Router>
          <div>
            <Link to="/student/favorites">favorites</Link>|
            <Link to="/student/logout">logout</Link>
            <Link to="/student/passwordUpdate">password</Link>
            <Route path="/student/favorites" component={Favorites} />
            <Route path="/student/logout" component={Logout} />
            <Route path="/student/passwordUpdate" component={Password} />
          </div>
        </Router>
      </header>
    );
  }
}

export default Student;
