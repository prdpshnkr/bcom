import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`, {
        params: {
          cors: true,
        },
      })
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
  }, []);

  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <NavLink
        className="navbar-brand"
        style={{ textDecoration: "none", color: "gray" }}
        to="/home"
      >
        App
      </NavLink>
      <form className="form-inline">
        <select className="form-control mr-sm-2" name="cars" id="cars">
          <option value="volvo">Search</option>
          {products &&
            products.map((p) => <option value={p.id}>{p.title}</option>)}
        </select>
      </form>
      <a className="navbar-brand">Cart</a>
      <NavLink
        className="navbar-brand"
        style={{ textDecoration: "none", color: "gray" }}
        to="/home"
      >
        User
      </NavLink>
    </nav>
  );
};

export default Product;
