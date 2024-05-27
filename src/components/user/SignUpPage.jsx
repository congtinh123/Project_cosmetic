import React from "react";
import Footer from "../product/Footer";
import Header from "../product/Header";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import GoogleIcon from "@mui/icons-material/Google";

export default function SignUpPage() {
  return (
    <>
      <Header />
      <div className="signup_container">
        <div className="signup_container-img">
          <img src="src/assets/image/regimg 1.png" alt="" />
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
            <form>
              <div className="signup_container--form--icon--input">
                <PersonIcon />
                <input
                  className="signup_container--form--input"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="signup_container--form--icon--input">
                <EmailIcon />
                <input
                  className="signup_container--form--input"
                  type="text"
                  placeholder="E-mail"
                />
              </div>
              <div className="signup_container--form--icon--input">
                <HttpsIcon />
                <input
                  className="signup_container--form--input"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="signup_container--form--icon--input">
                <HttpsIcon />
                <input
                  className="signup_container--form--input"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
              <button className="signup_container--form--btn">
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
              <a className="signup_container--link" href="">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
