import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="ps-footer">
        <div className="container">
          <div className="ps-footer--contact">
            <div className="row">
              <div className="col-12 col-lg-4">
                <p className="contact__title">Contact Us</p>
                <p><b><i className="icon-telephone"> </i>Hotline: </b><span>(7:00 - 21:30)</span></p>
                <p className="telephone">097 978-6290<br/>097 343-8888</p>
                <p> <b>Head office: </b>8049 High Ridge St. Saint Joseph, MI 49085</p>
                <p> <b>Email us: </b><a href="http://nouthemes.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="cdbeb8bdbda2bfb98dabacbfa0acbfb9e3aea2a0">[email&#160;protected]</a></p>
              </div>
              <div className="col-12 col-lg-4">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <p className="contact__title">Help & Info<span className="footer-toggle"><i className="icon-chevron-down"></i></span></p>
                    <ul className="footer-list">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Sore Locations</a></li>
                      <li><a href="#">Terms of Use</a></li>
                      <li><a href="#">Policy</a></li>
                      <li><a href="#">Flash Sale</a></li>
                      <li><a href="#">FAQs</a></li>
                    </ul>
                    <hr/>
                  </div>
                  <div className="col-12 col-lg-6">
                    <p className="contact__title">Corporate<span className="footer-toggle"><i className="icon-chevron-down"></i></span></p>
                    <ul className="footer-list">
                      <li><a href="#">Become a Vendor</a></li>
                      <li><a href="#">Affiliate Program</a></li>
                      <li><a href="#">Farm Business</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Our Suppliers</a></li>
                      <li><a href="#">Accessibility</a></li>
                    </ul>
                    <hr/>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <p className="contact__title">Newsletter Subscription</p>
                <p>Join our email subscription now to get updates on <b>promotions </b>and <b>coupons.</b></p>
                <div className="input-group">
                  <div className="input-group-prepend"><i className="icon-envelope"></i></div>
                  <input className="form-control" type="text" placeholder="Enter your email..."/>
                    <div className="input-group-append">
                      <button className="btn">Subscribe</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ps-footer__copyright">
            <div className="col-12 col-lg-6 ps-footer__text">&copy; 2020 Farmart Marhetplace. All Rights Reversed.</div>
            <div className="col-12 col-lg-6 ps-footer__social"> <a className="icon_social facebook" href="#"><i className="fa fa-facebook-f"></i></a><a className="icon_social twitter" href="#"><i className="fa fa-twitter"></i></a><a className="icon_social google" href="#"><i className="fa fa-google-plus"></i></a><a className="icon_social youtube" href="#"><i className="fa fa-youtube"></i></a><a className="icon_social wifi" href="#"><i className="fa fa-wifi"></i></a></div>
          </div>
        </div>
      </footer>
    )
  }
}