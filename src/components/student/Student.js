import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import UpdatePic from "./UpdatePic";
import Favorites from "./Favorites";
import ResponsivePlayer from "../player";

class Student extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <div style={{ marginTop: "30px" }}>
            <Link
              to="/student/favorites"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "yellow",
              }}
            >
              favorites
            </Link>
            |{"  "}
            <Link
              to="/student/Updatepic "
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "yellow",
              }}
            >
              Update Profile Picture
            </Link>
            <Link
              to="/student/Updatepic "
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "yellow",
              }}
            >
              Update Profile Picture
            </Link>
            <Route path="/student/favorites" component={Favorites} />
            <Route path="/student/Updatepic" component={UpdatePic} />
            <Route path="/student/Updatepic" component={UpdatePic} />
          </div>
        </Router>
        <ResponsivePlayer />
      </div>
    );
  }
}

export default Student;
