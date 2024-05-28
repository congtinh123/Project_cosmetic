import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/page/HomePage";
import LoginPage from "./components/page/LoginPage";
import SignUpPage from "./components/page/SignUpPage";
import { useEffect } from "react";
import { getUserList } from "./store/slices/users.slice";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup-page" element={<SignUpPage />} />
        <Route path="/login-page" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
