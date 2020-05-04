import React from "react";
import Login from "./Login";
// import Teacher from "./teacher/Teacher";
// import Student from "./student/Student";
import Header from "./Header";

function Home() {
  // const [login, setLogin] = useState([
  //   {
  //     loggedIn: true,
  //   },
  // ]);

  return (
    <div className="home">
      <Header />
      <Login />
    </div>
  );
}

export default Home;
