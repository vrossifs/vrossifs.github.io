import React from "react";
import { useNavigate } from "react-router-dom";

const ListCategory = (props) => {
  const navigate = useNavigate();
  return (
    <div className="col-3 p-0">
      <div className="ps-product--vertical">
        <a onClick={() => navigate("/category/" + props.categoryUrl)} title={props.categoryTitle}>
          <img className="ps-product__thumbnail" src={props.categoryThumbnail} alt={props.categoryTitle} onClick={() => navigate("/category/" + props.categoryUrl)} title={props.categoryTitle} width="70" height="70" />
        </a>
        <div className="ps-product__content"><a className="ps-product__name" onClick={() => navigate("/category/" + props.categoryUrl)} title={props.categoryTitle}>{props.categoryTitle}</a>
          <p className="ps-product__quantity">{props.categorySumProduct} produk</p>
        </div>
      </div>
    </div>
  );
}

export default ListCategory;