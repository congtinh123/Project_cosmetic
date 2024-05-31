import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../../../store/slices/products.slice";
import HeaderAdmin from "../../../layout/HeaderAdmin/HeaderAdmin";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import CloseIcon from "@mui/icons-material/Close";

export default function ProductAdmin() {
  const products = useSelector((state) => state.products.products);
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [openText, setOpenText] = useState(false);
  const [openBtn, setOpenBtn] = useState(false);
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  // phan trang
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  //phan trang

  const handleOpenAddProduct = () => {
    if (!openAddProduct) {
      setOpenAddProduct(!openAddProduct);
    }
    setOpenText(false);
    setOpenBtn(false);
    setImage("");
    setProductName("");
    setPrice("");
  };
  const handleOpenEditProduct = (id) => {
    if (!openAddProduct) {
      setOpenAddProduct(!openAddProduct);
    }
    setOpenText(true);
    setOpenBtn(true);

    const product = products.find((product) => product.id === id);
    setImage(product.image);
    setProductName(product.productname);
    setPrice(product.price);
    setEditId(id);
  };
  const handleCloseForm = () => {
    setOpenAddProduct(false);
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
        alert("Add success");
        setImage("");
        setProductName("");
        setPrice("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDeleteProduct = (id) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then((response) => {
        dispatch(productAction.deleteProduct(id));
        alert("Delete success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleEditProduct = (event) => {
    event.preventDefault();
    const editProduct = {
      image: image,
      productname: productName,
      price: price,
    };
    axios
      .patch(`http://localhost:3000/products/${editId}`, editProduct)
      .then((response) => {
        dispatch(productAction.editProduct(response.data));
        alert("Edit success");
        setImage("");
        setProductName("");
        setPrice("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSearchProduct = (event) => {
    event.preventDefault();
    if (searchProduct === "") {
      alert("Please enter product name");
      window.location.reload();
    } else {
      axios
        .get(`http://localhost:3000/products?productname=${searchProduct}`)
        .then((response) => {
          if (response.data.length === 0) {
            alert("Product not found");
            window.location.reload();
          }
          dispatch(productAction.getProductList(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // phan trang
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
  return (
    <>
      <HeaderAdmin />
      <div className="product-container">
        <div className="product-table">
          <div className="product-table-form">
            <h1>Products</h1>
            <form onSubmit={handleSearchProduct}>
              <input
                type="text"
                placeholder="Search product"
                onChange={(e) => setSearchProduct(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((product, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <img src={product.image} width={100} height={70} />
                  </td>

                  <td>{product.productname}</td>
                  <td>${product.price}</td>
                  <td>
                    <div className="product-table-btn">
                      <button onClick={handleOpenAddProduct}>Add</button>
                      <button onClick={() => handleOpenEditProduct(product.id)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteProduct(product.id)}>
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
        {openAddProduct ? (
          <div className="product-container-form-add">
            <div className="flax-close-icon">
              {openText ? <h2>Edit Product</h2> : <h2>Add Product</h2>}
              <CloseIcon className="close-icon" onClick={handleCloseForm} />
            </div>
            <form>
              <input
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                type="text"
                placeholder="URL IMAGE"
              />
              <br />
              <input
                value={productName}
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
                type="text"
                placeholder="PRODUCT NAME"
              />
              <br />
              <input
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="text"
                placeholder="PRICE"
              />
              <br />
              {openBtn ? (
                <button onClick={handleEditProduct}>EDIT</button>
              ) : (
                <button onClick={handleAddProduct}>ADD</button>
              )}
            </form>
            <img src="src/assets/png/banner2.png" width={560} height={300} />
          </div>
        ) : (
          <div className="product-container-form-add">
            <img src="src/assets/png/banner2.png" width={560} height={500} />
          </div>
        )}
      </div>
    </>
  );
}
