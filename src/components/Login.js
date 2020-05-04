import React from "react";
import GoogleLogin from "react-google-login";
// import { useGoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

function Login() {
  return (
    <div classname="login">
      <div style={{ marginTop: "30px", borderRadius: "7px", height: "30px" }}>
        <b>Sign in as a student</b>
        <br />
        <GoogleLogin
          clientId="1054835722865-0ti2g7c1vp12j7f7idlch6du1ujkho95.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <br />
      </div>
      <div style={{ marginTop: "69px" }}>
        <b>Sign in as a teacher</b>
        <br />
        <GoogleLogin
          clientId="1054835722865-0ti2g7c1vp12j7f7idlch6du1ujkho95.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <br />
      </div>
    </div>
  );
}

export default Login;
