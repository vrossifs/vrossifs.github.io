import React, { Component, Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import { UseTitle } from "../../component/UseTitle";

const Detail = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("https://dummyjson.com/products/" + params.id);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      {UseTitle(data.title)}
      <section className="section-featured--default ps-home--block categories">
        <div className="container">
          <div className="ps-block__header">
            <h3 className="ps-block__title">{data.title}</h3>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Detail;