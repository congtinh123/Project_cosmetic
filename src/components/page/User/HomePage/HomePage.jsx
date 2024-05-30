import React from "react";
import Header from "../../../layout/Header/Header";
import Footer from "../../../layout/Footer/Footer";
import "./style.scss";
import { useSelector } from "react-redux";

export default function HomePage() {
  const products = useSelector((state) => state.products.products);
  console.log(products);
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
                  <h4>{product.productname}</h4>
                  <div className="price">${product.price}</div>
                  <button className="btn">Add to cart</button>
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
