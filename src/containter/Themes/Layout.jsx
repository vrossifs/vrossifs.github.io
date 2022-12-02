import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

import Home from "../Home/Home";
import Detail from "../Detail/Detail";
import Category from "../Category/Category";
import CategoryDetail from "../CategoryDetail/CategoryDetail";

export default class Layout extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/detail/:id/:slug" exact element={<Detail />} />
            <Route path="/category" exact element={<Category />} />
            <Route path="/category/:slug" exact element={<CategoryDetail />} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    )
  }
}