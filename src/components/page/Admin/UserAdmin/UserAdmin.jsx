import React from "react";
import { useSelector } from "react-redux";
import HeaderAdmin from "../../../layout/HeaderAdmin/HeaderAdmin";
import "./style.scss";

export default function UserAdmin() {
  const users = useSelector((state) => state.users.users);
  console.log(users);
  return (
    <>
      <HeaderAdmin />
      <div className="user-page-table">
        <div>
          {" "}
          <div className="user-page-form">
            <h1>Users</h1>
            <form>
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
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className="user-page-table-btn">
                      <button>Sort</button>
                      <button>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <img src="src/assets/png/banner2.png" width={800} height={700} />
      </div>
    </>
  );
}
