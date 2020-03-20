import React, { Component } from "react";
import background from "../assets/app.png";
import image1 from "../assets/11.png";
import image2 from "../assets/22.png";
import image3 from "../assets/33.png";
import image4 from "../assets/44.png";

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
          <button className="Download">Download Sekarang!</button>
        </div>
        <div className="background">
          <img className="img-1" src={image1} alt="img-1" />
          <img className="img-2" src={image2} alt="img-2" />
          <img className="img-3" src={image3} alt="img-3" />
          <img className="img-4" src={image4} alt="img-4" />
        </div>
      </div>
    );
  }
}

export default MobileMenu;
