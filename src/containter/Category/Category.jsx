import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';

import { UseTitle } from "../../component/UseTitle";
import Categories from "../../component/Category/Category";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/categories`).then((category) => setCategory(category.data));
  }, []);

  return (
    <Fragment>
      {UseTitle('Category')}
      <Categories dataCategory={category}/>
    </Fragment>
  )
}

export default Category;