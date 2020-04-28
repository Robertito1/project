import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Videos from "./Videos";
import Logout from "./Logout";
import Password from "./Password";

class Teacher extends Component {
  state = {};
  render() {
    return (
      <header>
        <Router>
          <div>
            <Link to="/teacher/videos">videos</Link>|{" "}
            <Link to="/teacher/logout">ahome</Link>
            <Link to="/teacher/passwordUpdate">ahome</Link>
            <Route path="/teacher/videos" component={Videos} />
            <Route path="/teacher/logout" component={Logout} />
            <Route path="/teacher/passwordUpdate" component={Password} />
          </div>
        </Router>
      </header>
    );
  }
}

export default Teacher;
