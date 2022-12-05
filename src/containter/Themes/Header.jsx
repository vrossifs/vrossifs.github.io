import React, { Component } from "react";
import { Navigate, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="ps-top-bar">
        <div className="container">
          <div className="top-bar">
            <div className="top-bar__left">
              <ul className="nav-top">
                <li className="nav-top-item"><a className="nav-top-link" href="#">Sell on Famart.</a></li>
                <li className="nav-top-item"><a className="nav-top-link text-success" href="#">Register Now</a></li>
              </ul>
            </div>
            <div className="top-bar__right">
              <ul className="nav-top">
                <li className="nav-top-item contact"><a className="nav-top-link" href="tel:970978-6290"> <i className="icon-telephone"></i><span>Hotline:</span><span className="text-success font-bold">970 978-6290</span></a></li>
                <li className="nav-top-item account">
                  <a className="nav-top-link" href="http://localhost/product/auth/register">Daftar</a>
                </li>
                <li className="nav-top-item account">
                  <a className="nav-top-link" href="http://localhost/product/auth/login">Masuk</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="ps-header--center header--mobile">
        <div className="container">
          <div className="header-inner">
            <div className="header-inner__left">
              <button className="navbar-toggler"><i className="icon-menu"></i></button>
            </div>
            <div className="header-inner__center"><a className="logo open" onClick={() => navigate("/home")}>Farm<span className="text-black">art.</span></a></div>
            <div className="header-inner__right">
              <button className="button-icon icon-sm search-mobile"><i className="icon-magnifier"></i></button>
            </div>
          </div>
        </div>
      </div>
      <section className="ps-header--center header-desktop">
        <div className="container">
          <div className="header-inner">
            <div className="header-inner__left"><a className="logo" onClick={() => navigate("/home")}>Farm<span className="text-black">art.</span></a>
              <ul className="menu">
                <li className="menu-item-has-children has-mega-menu">
                  &nbsp;
                </li>
              </ul>
            </div>
            <div className="header-inner__center">
              <div className="input-group">
                <input className="form-control input-search" placeholder="I'm searchching for..." />
                <div className="input-group-append">
                  <button className="btn">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <nav className="navigation">
        <div className="container">
          <ul className="menu">
            <li className="menu-item-has-children has-mega-menu active"><a className="nav-link active" href="#">Home</a><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
              <div className="mega-menu">
                <div className="mega-anchor"></div>
                <div className="mega-menu__column">
                  <h4>Home Pages<span className="sub-toggle"></span></h4>
                  <ul className="sub-menu--mega">
                    <li className="active"><a className="active" href="http://localhost/product/">Home Supermarket</a></li>
                    <li><a href="home-full-width.html">Home Supermarket Full Width</a></li>
                    <li><a href="home-local-store.html">Home Local Store</a></li>
                    <li><a href="home-sidebar.html">Home Sidebar</a></li>
                    <li><a href="home-business.html">Home Business</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="menu-item-has-children has-mega-menu"><a className="nav-link" href="#">Shop</a><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
              <div className="mega-menu mega-shop">
                <div className="mega-anchor"></div>
                <div className="mega-menu__column">
                  <h4>Shop Pages<span className="sub-toggle"></span></h4>
                  <ul className="sub-menu--mega">
                    <li><a href="shop-view-grid.html">Shop Default View Grid</a></li>
                    <li><a href="shop-view-listing.html">Shop Default View Listing</a></li>
                    <li><a href="shop-view-extended.html">Shop Default View Products</a></li>
                    <li><a href="shop-categories.html">Shop Categories</a></li>
                    <li><a href="shop-with-banner.html">Shop With Banner</a></li>
                    <li><a href="shop-all-brands.html">Shop All Brands</a></li>
                  </ul>
                </div>
                <div className="mega-menu__column">
                  <h4>Product Layouts<span className="sub-toggle"></span></h4>
                  <ul className="sub-menu--mega">
                    <li><a href="product-default.html">Shop Default</a></li>
                    <li><a href="product-extended.html">Shop Extended</a></li>
                    <li><a href="product-sidebar.html">Shop Sidebar</a></li>
                    <li><a href="product-full-width.html">Shop Full Width</a></li>
                  </ul>
                </div>
                <div className="mega-menu__column">
                  <h4>Product Types<span className="sub-toggle"></span></h4>
                  <ul className="sub-menu--mega">
                    <li><a href="product-simple.html">Simple</a></li>
                    <li><a href="product-variable.html">Variable</a></li>
                    <li><a href="product-attribute.html">Attribute (Size)</a></li>
                    <li><a href="product-image-swatches.html">Images Swatches</a></li>
                    <li><a href="product-on-sale.html">On Sale</a></li>
                    <li><a href="product-out-of-stock.html">Out of Stock</a></li>
                    <li><a href="product-groupped.html">Groupped</a></li>
                    <li><a href="product-countdown-timer.html">Countdown Timer</a></li>
                    <li><a href="product-coupon-code.html">Coupon Code</a></li>
                    <li><a href="product-price-list-compare.html">Price List Compare</a></li>
                    <li><a href="product-instagram-feed.html">Instagram Feed</a></li>
                    <li><a href="product-video-featured.html">Video Featured</a></li>
                    <li><a href="product-with-button-buy-now.html">With button Buy Now</a></li>
                  </ul>
                </div>
                <div className="mega-menu__column">
                  <h4>Woo Pages<span className="sub-toggle"></span></h4>
                  <ul className="sub-menu--mega">
                    <li><a href="shopping-cart.html">Shopping Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="wishlist.html">Wishlist</a></li>
                    <li><a href="http://localhost/product/">Compare</a></li>
                    <li><a href="order-tracking.html">Order Tracking</a></li>
                    <li><a href="login-register.html">Login & Register</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="menu-item-has-children has-mega-menu"><a className="nav-link" href="#">Pages</a><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
              <div className="mega-menu">
                <div className="mega-anchor"></div>
                <div className="mega-menu__column">
                  <h4>Page all<span className="sub-toggle"></span></h4>
                  <ul className="sub-menu--mega">
                    <li><a href="vendor-registration.html">Vendor Register</a></li>
                    <li><a href="become-a-vendor.html">Become a Vendor</a></li>
                    <li><a href="store-list.html">Dokan Store List</a></li>
                    <li><a href="vendor-store.html">Dokan Vendor Store</a></li>
                    <li><a href="flash-sale.html">Flash Sale</a></li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="faq.html">FAQs</a></li>
                    <li><a href="404-not-found.html">404 Not Found</a></li>
                    <li><a href="coming-soon.html">Coming Soon</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="menu-item-has-children has-mega-menu"><a className="nav-link" href="#">Blog</a><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
              <div className="mega-menu">
                <div className="mega-anchor"></div>
                <div className="mega-menu__column">
                  <h4>Blog Type<span className="sub-toggle"></span></h4>
                  <ul className="sub-menu--mega">
                    <li><a href="blog-default.html">01 Blog-Default</a></li>
                    <li><a href="blog-thumbnail.html">Blog Small Thumbnail</a></li>
                    <li><a href="blog-gird.html">Blog Gird</a></li>
                    <li><a href="blog-list.html">Blog Listing</a></li>
                    <li><a href="single-post.html">Single Post without Sidebar</a></li>
                    <li><a href="single-post-sidebar.html">Single Post with Sidebar</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="menu-item-has-children has-mega-menu menu-item-branch"><a className="nav-link" href="#">Brand</a>
              <div className="mega-menu mega-brand">
                <div className="mega-anchor"></div>
                <div className="brand-box">
                  <div className="brand__title">FEATURED BRAND</div>
                  <div className="row">
                    <div className="col-4"><a href="shop-view-grid.html"><img src="img/brand/brand_themeforest.jpg" alt="alt" /></a></div>
                    <div className="col-4"><a href="shop-view-grid.html"><img src="img/brand/brand_envato.jpg" alt="alt" /></a></div>
                    <div className="col-4"><a href="shop-view-grid.html"><img src="img/brand/brand_codecanyon.jpg" alt="alt" /></a></div>
                    <div className="col-4"><a href="shop-view-grid.html"><img src="img/brand/brand_cudicjungle.jpg" alt="alt" /></a></div>
                    <div className="col-4"><a href="shop-view-grid.html"><img src="img/brand/brand_videohive.jpg" alt="alt" /></a></div>
                    <div className="col-4"><a href="shop-view-grid.html"><img src="img/brand/brand_photodune.jpg" alt="alt" /></a></div>
                    <div className="col-4"><a href="shop-view-grid.html"><img src="img/brand/brand_evatotuts.jpg" alt="alt" /></a></div>
                    <div className="col-4"><a href="shop-view-grid.html"><img src="img/brand/brand_3docean.jpg" alt="alt" /></a></div>
                    <div className="col-4"><a href="shop-view-grid.html"><img src="img/brand/microlancer.jpg" alt="alt" /></a></div>
                  </div><a className="brand__link" href="shop-all-brands.html">See all brands<i className="icon-chevron-right"></i></a>
                </div>
                <div className="brand__promotion"><a href="flash-sale.html"><img src="img/brand/brand_01.jpg" alt="alt" /></a></div>
                <div className="brand__promotion"><a href="flash-sale.html"><img src="img/brand/brand_02.jpg" alt="alt" /></a></div>
              </div>
            </li>
            <li className="menu-item-has-children has-mega-menu"><a className="nav-link" href="flash-sale.html">Flash Sale</a></li>
          </ul>
          <div className="navigation-text">
            <ul className="menu">
              <li className="menu-item-has-children has-mega-menu"><a className="nav-link" href="#">Your Recent Viewed</a><span className="sub-toggle"><i className="icon-chevron-down"></i></span>
                <div className="mega-menu recent-view">
                  <div className="mega-anchor"></div>
                  <div className="container">
                    <div className="slick-many-item"><a className="recent-item" href="http://localhost/product/"><img src="img/products/01-Fresh/01_1a.jpg" alt="alt" /></a><a className="recent-item" href="http://localhost/product/"><img src="img/products/01-Fresh/01_2a.jpg" alt="alt" /></a><a className="recent-item" href="http://localhost/product/"><img src="img/products/01-Fresh/01_30a.jpg" alt="alt" /></a><a className="recent-item" href="http://localhost/product/"><img src="img/products/01-Fresh/01_10a.jpg" alt="alt" /></a><a className="recent-item" href="http://localhost/product/"><img src="img/products/01-Fresh/01_18a.jpg" alt="alt" /></a><a className="recent-item" href="http://localhost/product/"><img src="img/products/01-Fresh/01_28b.jpg" alt="alt" /></a><a className="recent-item" href="http://localhost/product/"><img src="img/products/01-Fresh/01_16a.jpg" alt="alt" /></a><a className="recent-item" href="http://localhost/product/"><img src="img/products/01-Fresh/01_31a.jpg" alt="alt" /></a><a className="recent-item" href="http://localhost/product/"><img src="img/products/01-Fresh/01_15a.jpg" alt="alt" /></a><a className="recent-item" href="http://localhost/product/"><img src="img/products/01-Fresh/01_5a.jpg" alt="alt" /></a><a className="recent-item" href="http://localhost/product/"><img src="img/products/01-Fresh/01_32a.jpg" alt="alt" /></a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mobile-search--slidebar">
        <div className="mobile-search--content">
          <div className="mobile-search__header">
            <div className="mobile-search-box">
              <div className="input-group">
                <input className="form-control" placeholder="I'm shopping for..." id="inputSearchMobile" />
                <div className="input-group-append">
                  <button className="btn"> <i className="icon-magnifier"></i></button>
                </div>
              </div>
              <button className="cancel-search"><i className="icon-cross"></i></button>
            </div>
          </div>
          <div className="mobile-search__trendding">
            <h5> <i className="icon-power"></i>Trending search</h5>
            <div className="trending-content">
              <ul className="mobile-list-trending">
                <li className="title"><a>Trending search: </a></li>
                <li className="trending-item"><a href="#">meat</a></li>
                <li className="trending-item"><a href="#">fruit</a></li>
                <li className="trending-item"><a href="#">vegetables</a></li>
                <li className="trending-item"><a href="#">salad</a></li>
                <li className="trending-item"><a href="#">yoghurts</a></li>
                <li className="trending-item"><a href="#">apple</a></li>
              </ul>
            </div>
          </div>
          <div className="mobile-search__history">
            <h5> <i className="icon-history2"></i>History<a href="#">Clear all</a></h5>
            <div className="history-content">
              <ul className="history-list">
                <li className="history-item"><a className="history-link" href="#"> <span>apple</span><i className="icon-cross2"></i></a></li>
                <li className="history-item"><a className="history-link" href="#"> <span>organic fruit</span><i className="icon-cross2"></i></a></li>
                <li className="history-item"><a className="history-link" href="#"> <span>meat beef</span><i className="icon-cross2"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="mobile-search__result">
            <h5> <span className="number-result">5</span>search result</h5>
            <ul className="list-result">
              <li className="cart-item">
                <div className="ps-product--mini-cart"><a href="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_18a.jpg" alt="alt" /></a>
                  <div className="ps-product__content"><a className="ps-product__name" href="product-default.html"><u>Organic</u> Large Green Bell Pepper</a>
                    <p className="ps-product__rating">
                      <select className="rating-stars" defaultValue={3}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select><span>(5)</span>
                    </p>
                    <p className="ps-product__meta"> <span className="ps-product__price">$6.90</span>
                    </p>
                  </div>
                </div>
              </li>
              <li className="cart-item">
                <div className="ps-product--mini-cart"><a href="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_16a.jpg" alt="alt" /></a>
                  <div className="ps-product__content"><a className="ps-product__name" href="product-default.html">Avocado <u>Organic</u> Hass Large</a>
                    <p className="ps-product__meta"> <span className="ps-product__price">$12.90</span>
                    </p>
                  </div>
                </div>
              </li>
              <li className="cart-item">
                <div className="ps-product--mini-cart"><a href="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_32a.jpg" alt="alt" /></a>
                  <div className="ps-product__content"><a className="ps-product__name" href="product-default.html">Tailgater Ham <u>Organic</u> Sandwich</a>
                    <p className="ps-product__meta"> <span className="ps-product__price">$33.49</span>
                    </p>
                  </div>
                </div>
              </li>
              <li className="cart-item">
                <div className="ps-product--mini-cart"><a href="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_6a.jpg" alt="alt" /></a>
                  <div className="ps-product__content"><a className="ps-product__name" href="product-default.html">Extreme <u>Organic</u> Light Can</a>
                    <p className="ps-product__rating">
                      <select className="rating-stars" defaultValue={4}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select><span>(16)</span>
                    </p>
                    <p className="ps-product__meta"> <span className="ps-product__price-sale">$4.99</span><span className="ps-product__is-sale">$8.99</span>
                    </p>
                  </div>
                </div>
              </li>
              <li className="cart-item">
                <div className="ps-product--mini-cart"><a href="product-default.html"><img className="ps-product__thumbnail" src="img/products/01-Fresh/01_22a.jpg" alt="alt" /></a>
                  <div className="ps-product__content"><a className="ps-product__name" href="product-default.html">Extreme <u>Organic</u> Light Can</a>
                    <p className="ps-product__meta"> <span className="ps-product__price">$12.99</span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;