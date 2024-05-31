import React from "react";
import "./style.scss";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import Banner from "../../../../assets/png/banner2.png";
import axios from "axios";
import { useState } from "react";
export default function DetailPage() {
  const { id } = useParams();
  axios
    .get(`http://localhost:3000/products/${id}`)
    .then((res) => {
      setProduct(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  const accessToken = JSON.parse(localStorage.getItem("access_token"));
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const productQuantity = {
    img: product.image,
    productname: product.productname,
    price: product.price,
    quantity: quantity,
  };
  const productCart = JSON.parse(localStorage.getItem("productCart")) || [];
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleReduce = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const index = productCart.findIndex(
      (item) => item.productname === product.productname
    );
    if (accessToken == null) {
      alert("Please login to continue");
      navigate("/login-page");
    } else {
      if (index !== -1) {
        productCart[index].quantity += quantity;
        localStorage.setItem("productCart", JSON.stringify(productCart));
        alert("Add to cart success");
        navigate("/");
        window.location.reload();
      } else {
        productCart.push(productQuantity);
        localStorage.setItem("productCart", JSON.stringify(productCart));
        alert("Add to cart success");
        navigate("/");
        window.location.reload();
      }
    }
  };

  return (
    <>
      <Header />
      <div className="detail">
        <img className="detail-background-img" src={product.image} />
        <div className="detail-text-btn">
          <h2>{product.productname}</h2>
          <h3>${product.price}</h3>
          <div>
            <button onClick={handleReduce}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
          <button onClick={addToCart}>Add To Cart</button>
        </div>

        <img src={Banner} className="detail-banner-right" />
      </div>
      <Footer />
    </>
  );
}
