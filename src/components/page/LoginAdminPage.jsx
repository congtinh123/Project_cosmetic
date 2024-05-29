import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginAdminPage() {
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
    <div>
      <div className="signup_container">
        <div>
          <div>
            <h2 className="signup_container_form--logo">Logo</h2>
          </div>
          <div className="signup_container_form">
            <h1>Hi,Welcome Back</h1>
            <form onSubmit={handleSubmit}>
              <div className="signup_container--form--icon--input">
                <PersonIcon />
                <input
                  className="signup_container--form--input"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <span>{errorName}</span>
              <div className="signup_container--form--icon--input">
                <HttpsIcon />
                <input
                  className="signup_container--form--input"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <span>{errorPassword}</span>
              <button className="signup_container--form--btn">Login</button>
            </form>
            <div className="signup_container--already"></div>
          </div>
        </div>
        <div className="signup_container-img">
          <img src="src/assets/image/footer 1.png" width={900} height={900} />
        </div>
      </div>
    </div>
  );
}
