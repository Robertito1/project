import React, { Component } from "react";
import Login from "./Login";
import Teacher from "./teacher/Teacher";
import Student from "./student/Student";

let option = null;
let required = "tea";

if (required === "teacher") {
  option = <Teacher />;
} else if (required === "student") {
  option = <Student />;
} else option = <Login />;

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>this is home</p>
        {option}
      </div>
    );
  }
}

export default Home;
