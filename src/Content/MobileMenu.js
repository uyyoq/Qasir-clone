import React, { Component } from "react";
import background from "../assets/app.png";
import "../Content/MobileMenu.css";

export class MobileMenu extends Component {
  render() {
    return (
      <div className="mobile-name">
        <div className="content">
          <p className="title">Aplikasi Kasir Canggih & Gratis</p>
          <p className="sub-title">
            Aplikasi kasir serba bisa yang mudah digunakan dan tanpa biaya
            berlangganan
          </p>
          <button className="Download" onClick="">
            Download Sekarang
          </button>
        </div>
        <div>
          <img className="background" src={background} alt="img-mobile-menu" />
          <div></div>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
