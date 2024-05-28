import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("access_token")) || []
  );
  const [isCheck, setIsCheck] = useState(false);
  useEffect(() => {
    if (user.access_token === true) {
      setIsCheck(true);
    }
  }, [user]);
  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    setUser([]);
    setIsCheck(false);
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
        {isCheck ? (
          <div className="header_btn">
            <SearchIcon className="header_btn--icon-search" />
            <h3 className="header_user-name">{user.username}</h3>
            <LogoutIcon className="header_icon-logout" onClick={handleLogOut} />
            <div className="header_icon-cart">
              <ShoppingCartIcon />
              <span>2</span>
            </div>
          </div>
        ) : (
          <div className="header_btn">
            <SearchIcon className="header_btn--icon-search" />
            <button className="header_btn--signup" onClick={navigateToSignup}>
              Đăng Ký
            </button>

            <button className="header_btn--login" onClick={navigateToLogin}>
              Đăng Nhập
            </button>
          </div>
        )}
      </header>
      <hr className="header_hr" />
    </>
  );
}
