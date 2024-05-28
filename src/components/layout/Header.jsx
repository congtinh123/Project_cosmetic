import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate("/signup-page");
  };
  const navigateToLogin = () => {
    navigate("/login-page");
  };
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <>
      <header>
        <div>
          <h2>Logo</h2>
        </div>
        <ul>
          <li onClick={navigateToHome}>Trang Chủ</li>
          <li>Thông Tin</li>
          <li>Liên Hệ</li>
          <li>Sản Phẩm</li>
        </ul>
        <div className="header_btn">
          <SearchIcon className="header_btn--icon-search" />
          <button className="header_btn--signup" onClick={navigateToSignup}>
            Đăng Ký
          </button>

          <button className="header_btn--login" onClick={navigateToLogin}>
            Đăng Nhập
          </button>
        </div>
      </header>
      <hr className="header_hr" />
    </>
  );
}
