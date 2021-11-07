import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Home from "./containers/Block/Home";
import "./App.css";
import Category from "./containers/Block/Category";
import Product from "./containers/Block/Product";
import Search from "./containers/Block/Search";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:id" component={Category} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
