import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import Header from "../product/Header";
import Footer from "../product/Footer";

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="signup_container">
        <div>
          <div>
            <h2 className="signup_container_form--logo">Logo</h2>
          </div>
          <div className="signup_container_form">
            <h1>Hi,Welcome Back</h1>
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
                <HttpsIcon />
                <input
                  className="signup_container--form--input"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <button className="signup_container--form--btn">Login</button>
            </form>

            <div className="signup_container--already">
              <p>Don't have an account?</p>
              <a className="signup_container--link" href="">
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div className="signup_container-img">
          <img src="src/assets/image/footer 1.png" width={900} height={900} />
        </div>
      </div>
      <Footer />
    </>
  );
}
