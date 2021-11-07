import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

const Category = (props) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`https://fakestoreapi.com/products/category/${id}`, {
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
    <div>
      <NavLink style={{ textDecoration: "none", color: "gray" }} to="/home">
        Back
      </NavLink>
      {products &&
        products.map((block) => {
          return (
            <div>
              <img
                className="card-img-top"
                src={block.image}
                alt="Card image cap"
                style={{ width: "12rem" }}
              />
              <button>
                <Link to={`/product/${block.id}`}>{block.title}</Link>
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Category;
