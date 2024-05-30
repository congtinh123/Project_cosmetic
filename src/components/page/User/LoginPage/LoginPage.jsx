import HttpsIcon from "@mui/icons-material/Https";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../layout/Footer/Footer";
import Header from "../../../layout/Header/Header";
import "./style.scss";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const user = useSelector((state) => state.users.users);
  const handldeSubmit = (e) => {
    e.preventDefault();
    const index = user.findIndex((user) => user.username === username);
    if (index !== -1) {
      setErrorName("");
      if (user[index].password === password) {
        setErrorPassword("");
        const access_token = {
          username: user[index].username,
          access_token: true,
        };
        localStorage.setItem("access_token", JSON.stringify(access_token));
        navigate("/");
      } else {
        setErrorPassword("password is incorrect");
      }
    } else {
      setErrorName("username is incorrect");
    }
  };
  return (
    <>
      <Header />
      <div className="signin_container">
        <div>
          <div>
            <h2 className="signin_container_form--logo">Logo</h2>
          </div>
          <div className="signin_container_form">
            <h1>Hi,Welcome Back</h1>
            <form onSubmit={handldeSubmit}>
              <div className="signin_container--form--icon--input">
                <PersonIcon />
                <input
                  className="signin_container--form--input"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <span>{errorName}</span>
              <div className="signin_container--form--icon--input">
                <HttpsIcon />
                <input
                  className="signin_container--form--input"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <span>{errorPassword}</span>
              <button className="signin_container--form--btn">Login</button>
            </form>

            <div className="signin_container--already">
              <p>Don't have an account?</p>
              <Link to="/signup-page" className="signin_container--link">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="signin_container-img">
          <img src="src/assets/png/banner.png" width={900} height={900} />
        </div>
      </div>
      <Footer />
    </>
  );
}
