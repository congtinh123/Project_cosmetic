import React from "react";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import "./style.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();

  const addToCart = (id) => {
    navigate(`/detail-page/${id}`);
  };
  return (
    <>
      <Header />
      <div className="home-page">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div className="col-4" key={product.id}>
                <div className="product">
                  <img src={product.image} alt="product" />
                  <div className="product-content">
                    <h4>{product.productname}</h4>
                    <div className="price">${product.price}</div>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="btn"
                    >
                      By Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
