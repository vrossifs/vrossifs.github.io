import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

import FirstCategory from "./FirstCategory";
import ListCategory from "./ListCategory";

const Category = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/categories`);
    setData(data);
  };

  useEffect(() => {
    getData();
    
  }, []);

  const navigate = useNavigate();
  return (
    <Fragment>
      <section className="section-featured--default ps-home--block categories">
        <div className="container">
          <div className="ps-block__header">
            <h3 className="ps-block__title">Kategori Terbaik</h3><a className="ps-block__view" onClick={() => navigate('/category')}>View all<i className="icon-chevron-right"></i></a>
          </div>
          <div className="featured--content">
            <div className="featured__first">
              {<FirstCategory category={data[0]} />}
            </div>
            <div className="featured__group">
              <div className="row m-0">
                {data.slice(1, 9).map(category => {
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