import React, { Component } from "react";
import { Fragment } from "react";
import axios from 'axios';

export default class Category extends Component {
  state = {
    category: []
  }

  componentDidMount() {
    axios.get('https://dummyjson.com/products/categories').then((result) => {
      this.setState({
        category: result.data
      })
    });
  }

  render() {
    return (
      <Fragment>
        <section className="section-featured--default ps-home--block categories">
          <div className="container">
            <div className="ps-block__header">
              <h3 className="ps-block__title">Category</h3>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}