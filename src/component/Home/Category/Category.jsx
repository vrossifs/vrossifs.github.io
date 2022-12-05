import React from "react";
import { useNavigate } from "react-router";

import FirstCategory from "../../General/FirstCategory";
import ListCategory from "../../General/ListCategory";

const Category = (props) => {
  const navigate = useNavigate();
  return (
    <section className="section-featured--default ps-home--block categories">
      <div className="container">
        <div className="ps-block__header">
          <h3 className="ps-block__title">Kategori Terbaik</h3><a className="ps-block__view" onClick={() => navigate('/category')}>View all<i className="icon-chevron-right"></i></a>
        </div>
        <div className="featured--content">
          <div className="featured__first">
            {<FirstCategory category={props.dataCategory[0]} />}
          </div>
          <div className="featured__group">
            <div className="row m-0">
              {props.dataCategory.slice(1, 9)?.map(category => {
                return <ListCategory categoryUrl={category} categoryTitle={category} categoryThumbnail={"https://medicaldialogues.in/h-upload/2022/01/21/168768-category.webp"} categorySumProduct={15} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;