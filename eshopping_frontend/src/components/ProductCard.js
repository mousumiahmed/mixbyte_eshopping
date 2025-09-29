import React from "react";

const ProductCard = ({ product }) => (
  <div className="card p-3 m-2">
    <h5>{product.name}</h5>
    <p>{product.description}</p>
    <p className="text-success">${product.price}</p>
  </div>
);

export default ProductCard;
