import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";
import "./style.scss";
export default function Footer() {
  return (
    <>
      <footer>
        <ul className="footer-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cosmetic</li>
        </ul>
        <hr
          style={{
            width: "1310px",
            margin: "auto",
            border: "1px solid #181616",
          }}
        />
        <div className="footer_icon">
          <h2>Hasaki cosmetic</h2>
          <div className="footer_icon--list ">
            <YouTubeIcon className="footer_icon--item" />
            <FacebookIcon className="footer_icon--item" />
            <TwitterIcon className="footer_icon--item" />
            <InstagramIcon className="footer_icon--item" />
          </div>
        </div>
      </footer>
    </>
  );
}
