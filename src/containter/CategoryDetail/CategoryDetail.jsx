import React, { Component } from "react";
import { Fragment } from "react";
import Product from "../../component/Home/Product/Product";
import axios from 'axios';

export default class CategoryDetail extends Component {
  state = {
    product: [],
    category: []
  }

  componentDidMount() {
    axios.get('https://dummyjson.com/products/category/smartphones').then((result) => {
      this.setState({
        product: result.data.products.splice(0, 28)
      })
    });
  }

  render() {
    return (
      // <Fragment>
      //   <section className="section-shop shop-categories--default">
      //     <div className="container">
      //       <div className="ps-block__header">
      //         <h3 className="ps-block__title">Produk Terbaru</h3>
      //       </div>
      //       <div className="result__content">
      //         <div className="section-shop--grid">
      //           <div className="row m-0">
      //             {
      //               this.state.product.map(product => {
      //                 return <Product storeName={product.brand} productId={product.id} productTaxonomy={product.title} productPrice={product.price} productImg={product.thumbnail} productUrl={product.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}></Product>
      //               })
      //             }
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </section>
      // </Fragment>
      <h1>Detail Category</h1>
    )
  }
}