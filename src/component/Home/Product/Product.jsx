import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

import ListProduct from "./ListProduct";

const Product = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products`);
    setData(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <section className="section-shop shop-categories--default">
        <div className="container">
          <div className="ps-block__header">
            <h3 className="ps-block__title">Produk Terbaru</h3>
          </div>
          <div className="result__content">
            <div className="section-shop--grid">
              <div className="row m-0">
                {
                  data.slice(0,28).map(product => {
                    return <ListProduct storeName={product.brand} productId={product.id} productTaxonomy={product.title} productPrice={product.price} productImg={product.thumbnail} productUrl={product.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Product;