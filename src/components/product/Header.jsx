import React from "react";
import SearchIcon from "@mui/icons-material/Search";
export default function Header() {
  return (
    <>
      <header>
        <div>
          <h2>Logo</h2>
        </div>
        <ul>
          <li>Trang Chủ</li>
          <li>Thông Tin</li>
          <li>Liên Hệ</li>
          <li>Sản Phẩm</li>
        </ul>
        <div className="header_btn">
          <SearchIcon className="header_btn--icon-search" />
          <button className="header_btn--signup">Đăng Ký</button>
          <button className="header_btn--login">Đăng Nhập</button>
        </div>
      </header>
      <hr className="header_hr" />
    </>
  );
}
