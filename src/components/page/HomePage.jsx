import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getUserList } from "../../store/slices/users.slice";
// import CircularProgress from "@mui/material/CircularProgress";

export default function HomePage() {
  // useSelector get API data users from store
  // const users = useSelector((state) => state.users.users);
  // const loading = useSelector((state) => state.users.loading);
  // console.log(loading, "loading");
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(getUserList());
  //   }, 1000);
  // }, [dispatch]);
  return (
    <>
      {/* {loading ? (
        <CircularProgress />
      ) : (
        <ul>
          {users?.map((user) => (
            <li key={user.id}>
              <span>{user.username}</span>
              <span>{user.username}</span>
            </li>
          ))}
        </ul>
      )} */}
      <Header />
      <Footer />
    </>
  );
}
