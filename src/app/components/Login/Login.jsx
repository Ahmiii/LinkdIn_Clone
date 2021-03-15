import React, { useState } from "react";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState({ username: "", email: "", password: "" });

  const onChangeHandler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(info.email, info.password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: info.name,
            photoURL: "",
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uuid: userAuth.uuid,
                displayName: info.name,
                photoURL: "",
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <img src="http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Free-PNG-Image.png" />
      <form>
        <input
          name="username"
          placeholder="Enter Your Username"
          type="text"
          onChange={onChangeHandler}
        ></input>
        <input
          name="email"
          placeholder="Enter Your Email"
          type="text"
          onChange={onChangeHandler}
        ></input>
        <input
          name="password"
          placeholder="Enter Your Password"
          type="password"
          onChange={onChangeHandler}
        ></input>
        <button type="submit" onClick={onSubmitHandler}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
