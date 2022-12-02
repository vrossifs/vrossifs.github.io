import React, { Component } from "react";
import { Fragment } from "react";

import Category from "../../component/Home/Category/Category";
import Product from "../../component/Home/Product/Product";

const Home = () => {
  return (
    <Fragment>
      <Category />
      <Product />
    </Fragment>
  )
}
export default Home;