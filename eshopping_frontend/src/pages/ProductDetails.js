import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product,setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if(!product) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-success">${product.price}</p>
      <p><strong>Available Quantity:</strong> {product.quantity}</p>
    </div>
  );
}

export default ProductDetails;
