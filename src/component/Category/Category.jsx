import React, { Fragment } from "react";
import { useNavigate } from "react-router";

import ListCategory from "../General/ListCategory";

const Category = (props) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <section className="section-featured--default ps-home--block categories">
        <div className="container">
          <div className="ps-block__header">
            <h3 className="ps-block__title">Category</h3>
          </div>
          <div className="featured--content">
            <div className="featured__group" style={{width:"100%"}}>
              <div className="row m-0">
                {props.dataCategory.map(category => {
                  return <ListCategory categoryUrl={category} categoryTitle={category} categoryThumbnail={"https://medicaldialogues.in/h-upload/2022/01/21/168768-category.webp"} categorySumProduct={15} />
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Category;