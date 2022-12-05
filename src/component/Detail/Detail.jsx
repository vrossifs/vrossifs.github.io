import React from "react";
import { useNavigate } from "react-router";
import { Formatter } from "../Formatter";

const Detail = (props) => {
  const navigate = useNavigate();
  return (
    <section className="section--product-type section-product--default">
      <div className="container">
        <div className="product__header">
          <h3 className="product__name">{props.dataProduct.title}</h3>
        </div>
        <div className="product__detail">
          <div className="row">
            <div className="col-12 col-lg-9">
              <div className="ps-product--detail">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="ps-product__variants">
                      <div className="ps-product__gallery">
                        {props.dataProduct.images?.map(images => {
                          return (
                            <div className="ps-gallery__item">
                              <img src={images} alt={props.dataProduct.title} title={props.dataProduct.title} />
                            </div>
                          )
                        })}
                      </div>
                      <div className="ps-product__thumbnail">
                        <div className="ps-product__zoom">
                          <img id="ps-product-zoom" src={props.dataProduct.thumbnail} alt={props.dataProduct.title} title={props.dataProduct.title} />
                          <ul className="ps-gallery--poster" id="ps-lightgallery-videos" data-video-url="#">
                            <li data-html="#video-play"><span></span><i className="fa fa-play-circle"></i></li>
                          </ul>
                        </div>
                        <div style={{ display: "none" }} id="video-play">
                          <video className="lg-video-object lg-html5" controls="controls" preload="none">
                            <source src="#" type="video/mp4" />Your browser does not support HTML5 video.
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="ps-product__price">{Formatter(props.dataProduct.price)}</div>
                    <div className="ps-product__variable">
                      <span>Jenis: <span className="ps-product__attribute-value"></span></span>
                      <div className="ps-product__type">
                        <span className="ps-product__attribute attribute-text" data-value={props.dataProduct.title} data-variant_title={props.dataProduct.title} data-price={Formatter(props.dataProduct.price)} data-stock={props.dataProduct.stock}>{props.dataProduct.title}<br /><small>Stok: {props.dataProduct.stock}</small></span>
                      </div>
                    </div>
                    <div className="ps-product__sale">
                      <span className="price-sale">{Formatter(props.dataProduct.price)}</span>
                    </div>
                    <div className="ps-product__avai alert__success">Tersedia: <span className="ps-product__stock">{props.dataProduct.stock} stok</span>
                    </div>
                    <div className="ps-product__info">
                      <ul className="ps-list--rectangle">
                        <li> <span><i className="icon-square"></i></span>Kondisi: Baru</li>
                      </ul>
                    </div>
                    <div className="ps-product__shopping">
                      <a className="ps-button" href="javascript:void(0);" id="beliSekarang"><i className="icon-shop"></i>Beli Sekarang</a>
                    </div>
                    <div className="ps-product__category">
                      <ul>
                        <li>Nama Toko: <a href="javascript:void(0);" className="text-success" title={props.dataProduct.brand}>{props.dataProduct.brand}</a></li>
                        <li>Kategori: <a onClick={() => navigate('/category/' + props.dataProduct.category)} className="text-success">{props.dataProduct.category}</a></li>
                      </ul>
                    </div>
                    <div className="ps-product__footer"><a className="ps-product__shop" href="shop-view-grid.html"><i className="icon-store"></i><span>Store</span></a><a className="ps-product__addcart ps-button" data-toggle="modal" data-target="#popupAddToCart"><i className="icon-cart"></i>Add to cart</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="ps-product--extention">
                <div className="extention__block">
                  <div className="extention__item">
                    <div className="extention__icon"><i className="icon-store"></i></div>
                    <div className="extention__content">
                      <a onClick={() => navigate('/shop/' + props.dataProduct.brand)} title={props.dataProduct.brand}><b className="text-black">{props.dataProduct.brand} </b></a>
                      <br />
                      <span className="text-muted">Terdaftar sejak 09/02/2022</span>
                    </div>
                  </div>
                </div>
                <div className="extention__block">
                  <div className="extention__item">
                    <div className="extention__icon"><i className="icon-map-marker"></i></div>
                    <div className="extention__content">jalan raya dayeuhkolot no 89a </div>
                  </div>
                </div>
                <div className="extention__block">
                  <div className="extention__item border-none">
                    <div className="extention__icon"><i className="icon-phone"></i></div>
                    <div className="extention__content">
                      <span>Tidak ada kontak</span>
                    </div>
                  </div>
                </div>
                <div className="extention__block extention__contact">
                  <p> <span className="text-black">Hotline Order: </span>Free 7:00-21:30</p>
                  <h4 className="extention__phone">970978-6290</h4>
                  <h4 className="extention__phone">970343-8888</h4>
                </div>
                <p className="extention__footer">Become a Vendor? <a href="register.html">Register now</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="product__content">
          {props.dataProduct.description}
        </div>
      </div>
    </section>
  )
}

export default Detail;