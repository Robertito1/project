import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Videos from "./Videos";
import UpdatePic from "../student/UpdatePic";

class Teacher extends Component {
  state = {};
  render() {
    return (
      <div className="teacher">
        <Videos />
        <div>
          <p> add a cover pic</p>
          <UpdatePic />
        </div>

        {/* <Router>
          <div>
            <Link to="/teacher/videos">videos</Link>|{" "}
            <Link to="/teacher/logout">ahome</Link>
            <Link to="/teacher/passwordUpdate">ahome</Link>
            <Route path="/teacher/videos" component={Videos} />
            <Route path="/teacher/logout" component={Logout} />
            <Route path="/teacher/passwordUpdate" component={Password} />
          </div>
        </Router> */}
      </div>
    );
  }
}

export default Teacher;
