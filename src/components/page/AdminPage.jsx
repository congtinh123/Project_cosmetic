import React from "react";
import HeaderAdmin from "../layout/HeaderAdmin";

export default function AdminPage() {
  return (
    <>
      <HeaderAdmin />
      <div className="admin-page-img">
        <img
          src="src/assets/image/regimg 1.png"
          alt=""
          width={800}
          height={650}
        />
        <img
          src="src/assets/image/footer 1.png"
          alt=""
          width={800}
          height={650}
        />
      </div>
    </>
  );
}
