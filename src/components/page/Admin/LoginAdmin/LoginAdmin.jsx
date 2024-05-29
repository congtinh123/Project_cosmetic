import HttpsIcon from "@mui/icons-material/Https";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export default function LoginAdmin() {
  const AdminUserName = "admin";
  const AdminPassword = 123456;
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      setErrorName("Username is required");
    } else {
      setErrorName("");
    }
    if (!password) {
      setErrorPassword("Password is required");
    } else {
      setErrorPassword("");
    }
    if (username && password != "") {
      if (username == AdminUserName && password == AdminPassword) {
        alert("Login Success");
        localStorage.setItem("AdminUserName", JSON.stringify(AdminUserName));
        navigate("/admin-page");
      } else {
        alert("Login Failed");
      }
    }
  };

  return (
    <>
      <div className="signin_container">
        <div>
          <div className="signin_container_form">
            <h1>Hi,Welcome Back</h1>
            <form onSubmit={handleSubmit}>
              <div className="signin_container--form--icon--input">
                <PersonIcon />
                <input
                  className="signin_container--form--input"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <span>{errorName}</span>
              <div className="signin_container--form--icon--input">
                <HttpsIcon />
                <input
                  className="signin_container--form--input"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <span>{errorPassword}</span>
              <button className="signin_container--form--btn">Login</button>
            </form>
            <div className="signin_container--already"></div>
          </div>
        </div>
        <div className="signin_container-img">
          <img src="src/assets/png/banner.png" />
        </div>
      </div>
    </>
  );
}
