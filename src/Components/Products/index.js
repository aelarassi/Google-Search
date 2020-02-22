import React, { Component } from "react";
import { ReactSVG } from "react-svg";

import Gmail from "../../Assets/Images/gmail.svg";
import Maps from "../../Assets/Images/maps.svg";
import Translator from "../../Assets/Images/translator.svg";
import Youtube from "../../Assets/Images/youtube.svg";

class Products extends Component {
  render() {
    return (
      <div className="box-products">
        <div className="products">
          <a href="https://mail.google.com/">
            <ReactSVG src={Gmail} className="icon-product" />
          </a>
          <a href="https://maps.google.com/">
            <ReactSVG src={Maps} className="icon-product" />
          </a>
          <a href="https://youtube.com/">
            <ReactSVG src={Youtube} className="icon-product" />
          </a>
          <a href="https://translate.google.com/">
            <ReactSVG src={Translator} className="icon-product" />
          </a>
        </div>
        <a href="https://about.google/intl/en/products" className="link-more">
          SHOW MORE
        </a>
      </div>
    );
  }
}

export default Products;
