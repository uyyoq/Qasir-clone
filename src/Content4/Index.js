import React, { Component } from "react";
import ImageScan from "../assets/scan.png";
import "./Scan.css";

export default class Content4 extends Component {
  render() {
    return (
      <div className="Cont-Scan">
        <div className="img-Scan">
          <img className="img-scan" src={ImageScan} alt="img-scan" />
        </div>
        <div className="Text-scan">
          <h2 className="Scan-bold">Ada yang Belanja, Tinggal Scan Aja</h2>
          <p className="Text-scn">
            Dengan Qasir, ada berbagai cara mudah memasukkan barang ke keranjang
            belanja. Bisa dengan klik gambar, ketik nama produk, atau scan
            barcode. Scan bisa dengan kamera ponsel juga. Pilih yang paling
            memudahkanmu!
          </p>
        </div>
      </div>
    );
  }
}
