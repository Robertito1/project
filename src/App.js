import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Teacher from "./components/teacher/Teacher";
import Student from "./components/student/Student";
import { Link } from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "yellow",
          }}
        >
          <b>HOME</b>
        </Link>
        |{" "}
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "yellow",
          }}
        >
          <b>ABOUT</b>
        </Link>
        |{" "}
        <Link
          to="/teacher"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "yellow",
          }}
        >
          <b>TUTOR</b>
        </Link>
        |{" "}
        <Link
          to="/student"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "yellow",
          }}
        >
          <b>LEARNER</b>
        </Link>
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/teacher" component={Teacher} />
        <Route path="/student" component={Student} />
      </div>
    </Router>
  );
}

export default App;
