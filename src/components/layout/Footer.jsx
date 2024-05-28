import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li>Trang Chủ</li>
          <li>Thông Tin</li>
          <li>Liên Hệ</li>
          <li>Sản Phẩm</li>
        </ul>
        <hr className="footer_hr" />
        <div className="footer_icon">
          <h2>Logo</h2>
          <div className="footer_4icon ">
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
