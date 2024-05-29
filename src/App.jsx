import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/page/HomePage";
import LoginPage from "./components/page/LoginPage";
import SignUpPage from "./components/page/SignUpPage";
import { useEffect } from "react";
import { getUserList } from "./store/slices/users.slice";
import { useDispatch } from "react-redux";
import AdminPage from "./components/page/AdminPage";
import LoginAdminPage from "./components/page/LoginAdminPage";
import UsersPage from "./components/page/UsersPage";
import ProductPage from "./components/page/ProductPage";
import { getProductList } from "./store/slices/products.slice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup-page" element={<SignUpPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/admin-page" element={<AdminPage />} />
        <Route path="/login-admin-page" element={<LoginAdminPage />} />
        <Route path="user-page" element={<UsersPage />} />
        <Route path="product-page" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
