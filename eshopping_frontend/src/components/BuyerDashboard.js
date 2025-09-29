import React, { useEffect, useState } from "react";
import axios from "axios";

const BuyerDashboard = ({ buyerId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/orders/buyer/${buyerId}`)
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, [buyerId]);

  return (
    <div>
      <h2 className="text-xl font-bold">Buyer Dashboard</h2>
      <ul>
        {orders.map(o => (
          <li key={o.id}>Product ID: {o.productId} | Quantity: {o.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default BuyerDashboard;
