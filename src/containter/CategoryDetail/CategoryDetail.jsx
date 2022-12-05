import React, { Component, Fragment, useEffect } from "react";
import Product from "../../component/Home/Product/Product";
import axios from 'axios';
import { useParams } from "react-router";
import { useState } from "react";

const CategoryDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${params.slug}`).then((product) => setProduct(product.data.products));
  }, []);

  return (
    <Product dataProduct={product} pageTitle={`Produk ${params.slug} Terbaru`}/>
  )
}

export default CategoryDetail;