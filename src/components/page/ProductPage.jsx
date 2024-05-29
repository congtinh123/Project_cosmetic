import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderAdmin from "../layout/HeaderAdmin";
import { useState } from "react";
import axios from "axios";
import { productAction } from "../../store/slices/products.slice";

export default function ProductPage() {
  const products = useSelector((state) => state.products.products);
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [openText, setOpenText] = useState(false);
  const [openBtn, setOpenBtn] = useState(false);
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const handleOpenAddProduct = () => {
    setOpenAddProduct(!openAddProduct);
    setOpenText(false);
    setOpenBtn(false);
  };
  const handleOpenEditProduct = () => {
    setOpenAddProduct(!openAddProduct);
    setOpenText(true);
    setOpenBtn(true);
  };
  const handleAddProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      image: image,
      productname: productName,
      price: price,
    };
    axios
      .post("http://localhost:3000/products", newProduct)
      .then((response) => {
        dispatch(productAction.addProduct(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <HeaderAdmin />
      <div className="product-container">
        <div className="product-table">
          <div className="product-table-form">
            <h1>Products</h1>
            <form>
              <input type="text" placeholder="Search product" />
              <button>Search</button>
            </form>
          </div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>
                    <img src={product.image} width={100} height={70} />
                  </td>

                  <td>{product.productname}</td>
                  <td>{product.price}</td>
                  <td>
                    <div className="product-table-btn">
                      <button onClick={handleOpenAddProduct}>Add</button>
                      <button onClick={handleOpenEditProduct}>Edit</button>
                      <button>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {openAddProduct ? (
          <div className="product-container-form-add">
            {openText ? <h2>Edit Product</h2> : <h2>Add Product</h2>}
            <form>
              <input
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                type="text"
                placeholder="URL IMAGE"
              />
              <br />
              <input
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
                type="text"
                placeholder="PRODUCT NAME"
              />
              <br />
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="text"
                placeholder="PRICE"
              />
              <br />
              {openBtn ? (
                <button>EDIT</button>
              ) : (
                <button onClick={handleAddProduct}>ADD</button>
              )}
            </form>
            <img src="src/assets/image/regimg 1.png" width={560} height={300} />
          </div>
        ) : (
          <div className="product-container-form-add">
            <img src="src/assets/image/regimg 1.png" width={560} height={500} />
          </div>
        )}
      </div>
    </>
  );
}
