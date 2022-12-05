import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';

import Category from "../../component/Home/Category/Category";
import Product from "../../component/Home/Product/Product";
import { UseTitle } from "../../component/UseTitle";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/categories`).then((category) => setCategory(category.data));
    axios.get(`https://dummyjson.com/products`).then((product) => setProduct(product.data.products));
  }, []);

  return (
    <Fragment>
      {UseTitle('Home')}
      <Category dataCategory={category}/>
      <Product dataProduct={product}/>
    </Fragment>
  )
}
export default Home;