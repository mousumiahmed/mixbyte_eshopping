import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post("http://localhost:8080/api/auth/login",{email,password})
      .then(res => {
        if(res.data){
          localStorage.setItem("user", JSON.stringify(res.data));
          if(res.data.role === "SELLER") navigate(`/seller/${res.data.id}`);
          else navigate(`/buyer/${res.data.id}`);
        }else alert("Invalid credentials");
      }).catch(err=>console.log(err));
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <input type="email" placeholder="Email" className="form-control my-2"
        value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="form-control my-2"
        value={password} onChange={e=>setPassword(e.target.value)} />
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
