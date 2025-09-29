import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("BUYER");
  const navigate = useNavigate();

  const handleRegister = () => {
    // ✅ create the object first
    const userData = {
      name: name,
      email: email,
      password: password,
      role: role
    };

    // then call the API
    axios.post("http://localhost:8080/api/auth/register", userData,{ withCredentials: true })
      .then(res => {
        console.log(res.data)
        // alert("Registration successful!",res.data);
        navigate("/login");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        className="form-control my-2"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="form-control my-2"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="form-control my-2"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <select
        className="form-control my-2"
        value={role}
        onChange={e => setRole(e.target.value)}
      >
        <option value="BUYER">Buyer</option>
        <option value="SELLER">Seller</option>
      </select>
      <button className="btn btn-success" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
