import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginAdmin from "./components/page/Admin/LoginAdmin/LoginAdmin";
import ProductAdmin from "./components/page/Admin/ProductAdmin/ProductAdmin";
import UserAdmin from "./components/page/Admin/UserAdmin/UserAdmin";
import HomePage from "./components/page/User/HomePage/HomePage";
import LoginPage from "./components/page/User/LoginPage/LoginPage";
import SignUpPage from "./components/page/User/SignUpPage/SignUpPage";
import "./global.scss";
import { getProductList } from "./store/slices/products.slice";
import { getUserList } from "./store/slices/users.slice";
import DetailPage from "./components/page/User/ProductDetailPage/DetailPage";
import Cart from "./components/page/User/Cart/Cart";

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
        <Route path="/admin-page-login" element={<LoginAdmin />} />
        <Route path="/user-admin" element={<UserAdmin />} />
        <Route path="product-page" element={<ProductAdmin />} />
        <Route path="/detail-page/:id" element={<DetailPage />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
