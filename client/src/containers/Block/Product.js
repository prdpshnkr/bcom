import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

const Product = (props) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`https://fakestoreapi.com/products/${id}`, {
        params: {
          cors: true,
        },
      })
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      });
  }, []);

  return (
    <div class="card" style={{ width: "18rem", margin: "auto" }}>
      <img class="card-img-top" src={product.image} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">{product.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Rating: {product.rating && product.rating.rate} / 5
        </li>
        <li class="list-group-item">
          Reviews: {product.rating && product.rating.count}
        </li>
        <li class="list-group-item">Category: {product.category}</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">
          Next Product
        </a>
        <a href="#" class="card-link">
          Previous Product
        </a>
      </div>
    </div>
  );
};

export default Product;
