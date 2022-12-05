import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import { UseTitle } from "../../component/UseTitle";
import Details from "../../component/Detail/Detail";

const Detail = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${params.id}`).then((product) => setProduct(product.data));
  }, []);

  return (
    <Fragment>
      {UseTitle(product.title)}
      <Details dataProduct={product}/>
    </Fragment>
  )
}

export default Detail;