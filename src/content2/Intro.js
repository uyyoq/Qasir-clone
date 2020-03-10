import React, { Component } from "react";
import Image123 from "../assets/intro.png";
import "../content2/Intro.css";

export class Intro extends Component {
  render() {
    return (
      <div className="Container-Intro">
        <img className="img-intro" src={Image123} alt="img-intro" />
        <h2 className="Text-intro"> Cocok untuk berbagai usaha</h2>
        <p>
          Kamu hanya perlu Qasir untuk apa pun jenis usahamu. Warung, kedai,
          restoran, online shop, hingga salon. Jual barang ataupun jasa, Qasir
          bisa.
        </p>
      </div>
    );
  }
}

export default Intro;
