import React, { Component } from "react";
import ImageScan from "../assets/scan.png";
import "../Content4/Scan.css";

export class Scan extends Component {
  render() {
    return (
      <div className="Cont-Scan">
        <div className="img-Scan">
          <img className="img-scan" src={ImageScan} alt="img-scan" />
        </div>
        <div className="Text-scan">
          <h2>Ada yang Belanja, Tinggal Scan Aja</h2>
          <p>
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

export default Scan;
