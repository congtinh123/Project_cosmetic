import React from "react";
import HeaderAdmin from "../layout/HeaderAdmin";
import { useSelector } from "react-redux";

export default function UsersPage() {
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
        <img src="src/assets/image/regimg 1.png" width={800} height={700} />
      </div>
    </>
  );
}
