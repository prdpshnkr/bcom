import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/categories`, {
        params: {
          cors: true,
        },
      })
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      });
  }, []);

  return (
    <div>
      {categories.map((category) => {
        return (
          <div>
            <button>
              <NavLink
                style={{ textDecoration: "none", color: "gray" }}
                to={`/home/${category}`}
              >
                {category.toUpperCase()}
              </NavLink>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
