import React from "react";
import { useNavigate } from "react-router-dom";

const FirstCategory = (props) => {
  const navigate = useNavigate();
  return (
    <div className="ps-product--vertical">
      <a onClick={() => navigate("/category/" + props.category)}>
        <img className="ps-product__thumbnail" src="https://medicaldialogues.in/h-upload/2022/01/21/168768-category.webp" alt={props.category} title={props.category} />
      </a>
      <div className="ps-product__content"><a className="ps-product__name" onClick={() => navigate("/category/" + props.category)}>{props.category}</a>
        <p className="ps-product__quantity">11 produk</p>
      </div>
    </div>
  );
}

export default FirstCategory;