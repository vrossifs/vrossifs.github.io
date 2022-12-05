import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

import Home from "../Home/Home";
import Detail from "../Detail/Detail";
import Category from "../Category/Category";
import CategoryDetail from "../CategoryDetail/CategoryDetail";

const Layout = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <main className="no-main">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/detail/:id/:slug" exact element={<Detail />} />
            <Route path="/category" exact element={<Category />} />
            <Route path="/category/:slug" exact element={<CategoryDetail />} />
          </Routes>
        </main>
        <Footer />
      </Fragment>
    </Router>
  )
}

export default Layout;