import React from "react";
import { Formatter } from "../../Formatter";

import ListProduct from "./ListProduct";

const Product = (props) => {
  return (
    <section className="section-shop shop-categories--default">
      <div className="container">
        <div className="ps-block__header">
          <h3 className="ps-block__title">{props.pageTitle}</h3>
        </div>
        <div className="result__content">
          <div className="section-shop--grid">
            <div className="row m-0">
              {
                props.dataProduct.slice(0, 28)?.map(product => {
                  return <ListProduct storeName={product.brand} productId={product.id} productTaxonomy={product.title} productPrice={Formatter(product.price)} productImg={product.thumbnail} productUrl={product.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;