import React, { useEffect, useState } from "react";
import axios from "axios";

const SellerDashboard = ({ sellerId }) => {
  const currentUser = sellerId | JSON.parse(localStorage.getItem("user")); // Seller info
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: ""
  });

  const fetchProducts = () => {
    axios.get(`http://localhost:8080/api/products/seller/${currentUser.id}`)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
    // axios.get(`http://localhost:8080/api/products/seller/${sellerId}`)
    //   .then(res => setProducts(res.data))
    //   .catch(err => console.error(err));
//   }, [sellerId]);
  },[]);

  const handleChange = (e) => {
    setNewProduct({...newProduct, [e.target.name]: e.target.value});
  };

  const addProduct = () => {
    const productData = {...newProduct, sellerId: currentUser.id};
    console.log(productData)
    axios.post("http://localhost:8080/api/products/add", productData)
      .then(res => {
        alert("Product added!");
        setNewProduct({name:"", description:"", price:"", quantity:""});
        fetchProducts();
      }).catch(err => console.log(err));
  };

  // Delete product
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8080/api/products/delete/${id}`)
      .then(res => fetchProducts())
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h2>Seller Dashboard</h2>

      {/* Add Product Form */}
      <div className="card p-3 mb-4">
        <h4>Add New Product</h4>
        <input type="text" name="name" placeholder="Name" className="form-control my-2" value={newProduct.name} onChange={handleChange}/>
        <textarea name="description" placeholder="Description" className="form-control my-2" value={newProduct.description} onChange={handleChange}></textarea>
        <input type="number" name="price" placeholder="Price" className="form-control my-2" value={newProduct.price} onChange={handleChange}/>
        <input type="number" name="quantity" placeholder="Quantity" className="form-control my-2" value={newProduct.quantity} onChange={handleChange}/>
        <button className="btn btn-success" onClick={addProduct}>Add Product</button>
      </div>

      {/* Seller Products */}
      <h4>Your Products</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>${p.price}</td>
              <td>{p.quantity}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerDashboard;
