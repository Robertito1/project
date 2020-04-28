import React from "react";
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

function Login() {
  return (
    <div>
      <p>sign as a student</p>
      <GoogleLogin
        clientId="1054835722865-0ti2g7c1vp12j7f7idlch6du1ujkho95.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <p>sign as a teacher</p>
      <GoogleLogin
        clientId="1054835722865-0ti2g7c1vp12j7f7idlch6du1ujkho95.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
