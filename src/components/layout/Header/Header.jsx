import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
export default function Header() {
  const [quantity, setQuantity] = useState(0);
  const productCart = JSON.parse(localStorage.getItem("productCart")) || [];
  useEffect(() => {
    for (let i = 0; i < productCart.length; i++) {
      setQuantity((prev) => prev + productCart[i].quantity);
    }
  }, []);

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
  const handleChangeCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <header>
        <h2>Hasaki cosmetic</h2>
        <ul>
          <li onClick={navigateToHome}>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cosmetic</li>
        </ul>
        {isCheck ? (
          <div className="header_btn">
            <h3 className="header_user-name">{user.username}</h3>
            <LogoutIcon className="header_icon-logout" onClick={handleLogOut} />
            <div className="header_icon-cart">
              <ShoppingCartIcon onClick={handleChangeCart} />
              <span>{quantity}</span>
            </div>
          </div>
        ) : (
          <div className="header_btn">
            <button className="header_btn--signup" onClick={navigateToSignup}>
              Sign Up
            </button>

            <button className="header_btn--login" onClick={navigateToLogin}>
              Login
            </button>
          </div>
        )}
      </header>
      <hr className="header_hr" />
    </>
  );
}
