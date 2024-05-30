import React from "react";
import { useSelector } from "react-redux";
import HeaderAdmin from "../../../layout/HeaderAdmin/HeaderAdmin";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userAction } from "./../../../../store/slices/users.slice";
export default function UserAdmin() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  // phan trang
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const npage = Math.ceil(users.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  // phan trang
  function handleDelete(id) {
    alert("Delete success");
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then((res) => {
        dispatch(userAction.deleteUser(id));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleSortUser() {
    alert("Sort success");
    axios
      .get("http://localhost:3000/users?_sort=username")
      .then((res) => {
        dispatch(userAction.sortUser(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleSearch(event) {
    event.preventDefault();
    const searchUser = event.target[0].value;
    if (searchUser === "") {
      alert("Please enter user name or gmail");
      window.location.reload();
    } else {
      console.log(searchUser);
      axios
        .get(`http://localhost:3000/users?username=${searchUser}`)
        .then((response) => {
          if (response.data.length === 0) {
            alert("User not found");
            window.location.reload();
          }
          dispatch(userAction.getUserList(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <>
      <HeaderAdmin />
      <div className="user-page-table">
        <div>
          {" "}
          <div className="user-page-form">
            <h1>Users</h1>
            <form onSubmit={handleSearch}>
              <input type="text" placeholder="Search user" />
              <button>Search</button>
            </form>
          </div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((user, i) => (
                <tr key={i}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className="user-page-table-btn">
                      <button onClick={handleSortUser}>Sort</button>
                      <button onClick={() => handleDelete(user.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <a href="#" className="page-link" onClick={prePage}>
                  Prev
                </a>
              </li>
              {numbers.map((n, i) => (
                <li
                  className={`page-item ${currentPage === n ? `active` : ""}`}
                  key={i}
                >
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => changeCPage(n)}
                  >
                    {n}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a href="#" className="page-link" onClick={nextPage}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <img src="src/assets/png/banner2.png" width={800} height={700} />
      </div>
    </>
  );
}
