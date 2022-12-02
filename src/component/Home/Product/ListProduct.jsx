import React from "react";
import { useNavigate } from "react-router-dom";

const ListProduct = (props) => {
  const navigate = useNavigate();
  return (
    <div className="col-lg-3">
      <div className="ps-product--standard">
        <a onClick={() => navigate("/detail/" + props.productId + "/" + props.productUrl)}>
          <img className="ps-product__thumbnail_new" src={props.productImg} alt={props.productTaxonomy} title={props.productTaxonomy} style={{ width: '100%', height: '145px' }} />
        </a>
        <div className="ps-product__content">
          <p className="ps-product__type">
            <a onClick={() => navigate("/detail/" + props.productId + "/" + props.productUrl)} title={props.storeName}><i className="icon-store"></i> {props.storeName}</a>
          </p>
          <h5>
            <a className="productTaxonomy ps-product__name" onClick={() => navigate("/detail/" + props.productId + "/" + props.productUrl)} title={props.productTaxonomy}>{props.productTaxonomy}</a>
          </h5>
          <p className="ps-product-price-block">
            <span className="productPrice ps-product__price-default">{props.productPrice}</span>
          </p>
        </div>
        <div className="ps-product__footer">
          <a onClick={() => navigate("/detail/" + props.productId + "/" + props.productUrl)} title={props.productTaxonomy}>
            <button className="ps-product__addcart">
              <i className="icon-shop"></i>Beli Sekarang
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ListProduct;