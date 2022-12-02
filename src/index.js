import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './containter/Themes/Layout';

import "./assets/fonts/Linearicons/Font/demo-files/demo.css";
import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/plugins/font-awesome/css/font-awesome.min.css";
import "./assets/plugins/jquery-bar-rating/dist/themes/fontawesome-stars.css";
import "./assets/plugins/select2/dist/css/select2.min.css";
import "./assets/plugins/owl-carousel/assets/owl.carousel.min.css";
import "./assets/plugins/slick/slick.css";
import "./assets/plugins/lightGallery/dist/css/lightgallery.min.css";
import "./assets/css/style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
