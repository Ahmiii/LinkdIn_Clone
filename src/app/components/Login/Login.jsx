import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <img src="http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Free-PNG-Image.png" />
      <form>
        <input placeholder="Enter Your Username" type="text"></input>
        <input placeholder="Enter Your Email" type="text"></input>
        <input placeholder="Enter Your Password" type="password"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
