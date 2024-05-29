import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import HttpsIcon from "@mui/icons-material/Https";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userAction } from "../../../../store/slices/users.slice";
import Footer from "../../../layout/Footer/Footer";
import Header from "../../../layout/Header/Header";

export default function SignUpPage() {
  const users = useSelector((state) => state.users.users);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      setErrorName("Username is required");
    } else {
      setErrorName("");
    }

    if (!email) {
      setErrorEmail("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorEmail("Invalid email format");
    } else {
      setErrorEmail("");
    }

    if (!password) {
      setErrorPassword("Password is required");
    } else {
      setErrorPassword("");
    }

    if (!confirmPassword) {
      setErrorConfirmPassword("Confirm Password is required");
    } else if (password !== confirmPassword) {
      setErrorConfirmPassword("Passwords do not match");
    } else {
      setErrorConfirmPassword("");
    }
    if (
      username &&
      email &&
      password &&
      confirmPassword != "" &&
      password == confirmPassword &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      const indexUser = users.findIndex((user) => user.username === username);
      if (indexUser === -1) {
        let newUser = {
          username: username,
          email: email,
          password: password,
        };
        axios
          .post("http://localhost:3000/users", newUser)
          .then((res) => {
            console.log(res);
            // dispatch(addUser(newUser));
            dispatch(userAction.addUser(res.data));
            alert("Account created successfully");
            navigate("/login-page");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setErrorName("Username already exists");
      }
    }
  };
  return (
    <>
      <Header />
      <div className="signup_container">
        <div className="signup_container-img">
          <img src="src/assets/png/banner2.png" />
        </div>
        <div>
          <div>
            <h2 className="signup_container_form--logo">Logo</h2>
          </div>
          <div className="signup_container_form">
            <h1>Welcome</h1>
            <p className="signup_container_form--text">
              create your account and start changing your life
            </p>
            <form onSubmit={handleSubmit}>
              <div className="signup_container--form--icon--input">
                <PersonIcon />
                <input
                  className="signup_container--form--input"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <span>{errorName}</span>
              <div className="signup_container--form--icon--input">
                <EmailIcon />
                <input
                  className="signup_container--form--input"
                  type="text"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <span>{errorEmail}</span>
              <div className="signup_container--form--icon--input">
                <HttpsIcon />
                <input
                  className="signup_container--form--input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <span>{errorPassword}</span>
              <div className="signup_container--form--icon--input">
                <HttpsIcon />
                <input
                  className="signup_container--form--input"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <p>{errorConfirmPassword}</p>
              <button className="signup_container--form--btn" type="submit">
                Create Account
              </button>
              <div className="signup_container--form--btn--google--icon">
                <GoogleIcon />
                <button className="signup_container--form--btn--google">
                  Create Account
                </button>
              </div>
            </form>
            <div className="signup_container--already">
              <p>Already have an account?</p>
              <Link to="/login-page" className="signup_container--link">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
