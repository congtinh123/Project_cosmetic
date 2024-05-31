import React from "react";
import "./style.scss";
import Header from "./../../../layout/Header/Header";
import Footer from "./../../../layout/Footer/Footer";

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("productCart") || null);
  const handleDelete = (productname) => {
    const newCart = cart.filter((item) => item.productname !== productname);
    localStorage.setItem("productCart", JSON.stringify(newCart));
    window.location.reload();
  };
  const handleCheckOut = () => {
    localStorage.removeItem("productCart");
    alert("Thank you for your purchase");
    window.location.reload();
    window.location.href = "/";
  };
  const handleChangeShop = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Header />
      {cart === null || cart.length === 0 ? (
        <div className="empty-cart">
          <h1>Your cart is empty</h1>
          <button onClick={handleChangeShop}>Go to shop</button>
        </div>
      ) : (
        <div className="cart">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => (
                <tr key={i}>
                  <td>
                    <img src={item.img} alt="" />
                  </td>
                  <td>{item.productname}</td>
                  <td>{item.price}</td>
                  <td className="quantity">{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                  <td className="delete-cell">
                    <button onClick={() => handleDelete(item.productname)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total">
            <h2>
              Total:{" "}
              {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}$
            </h2>
          </div>
          <div className="checkout">
            <button onClick={handleCheckOut}>Checkout</button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
