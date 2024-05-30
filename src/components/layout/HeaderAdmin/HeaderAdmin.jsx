import LogoutIcon from "@mui/icons-material/Logout";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export default function HeaderAdmin() {
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [AdminUserName, setAdminUserName] = useState(
    JSON.parse(localStorage.getItem("AdminUserName")) || ""
  );
  const navigate = useNavigate();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const navigateToLoginAdmin = () => {
    navigate("/admin-page-login");
  };
  const navigateToUser = () => {
    if (AdminUserName === "") {
      navigate("/admin-page-login");
    } else {
      navigate("/user-admin");
    }
  };
  const navigateToAdminPage = () => {
    navigate("/admin-page");
  };
  const navigateToProduct = () => {
    if (AdminUserName === "") {
      navigate("/admin-page-login");
    } else {
      navigate("/product-page");
    }
  };
  const logOutAdminUser = () => {
    localStorage.removeItem("AdminUserName");
    setAdminUserName("");
    navigate("/admin-page-login");
  };

  return (
    <>
      <div className="header-admin">
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={age}
              label="Age"
              onChange={handleChange}
            >
              {AdminUserName === "" ? (
                <MenuItem onClick={navigateToLoginAdmin} value={10}>
                  Login
                </MenuItem>
              ) : (
                ""
              )}

              <MenuItem onClick={navigateToUser} value={20}>
                Users
              </MenuItem>
              <MenuItem onClick={navigateToProduct} value={30}>
                Product
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <b>ADMIN PAGE</b>
        <div>
          {AdminUserName !== "" ? (
            <h2 className="header-admin--name">Xin Chào {AdminUserName}</h2>
          ) : (
            ""
          )}
          {AdminUserName !== "" ? (
            <LogoutIcon
              onClick={logOutAdminUser}
              className="header-admin--logout-icon"
            />
          ) : (
            <h2 className="header-admin--name">Bạn Cần Đăng Nhập</h2>
          )}
        </div>
      </div>
    </>
  );
}
