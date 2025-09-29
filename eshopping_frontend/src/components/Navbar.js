import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
    <Link className="navbar-brand" to="/">E-Shop</Link>
    <div className="navbar-nav">
      <Link className="nav-link" to="/login">Login</Link>
      <Link className="nav-link" to="/register">Register</Link>
    </div>
  </nav>
);

export default Navbar;
