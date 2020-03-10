import React, { Component } from "react";
import KelolaPrdk from "../assets/kelola-produk.png";
import "../Content3/Content3.css";

export class Content3 extends Component {
  render() {
    return (
      <div className="Container">
        <div className="text-KP">
          <h2 className="Kp-Bold">Kelola Produk Bisa Dari Mana Saja</h2>
          <p className="Kp-text">
            Kamu tidak harus berada di toko untuk tahu stok apa yang mulai
            menipis atau produk mana yang paling laris. Tinggal buka aplikasi,
            kelola produk tidak lagi jadi misteri.
          </p>
        </div>
        <div className="Img-KP">
          <img
            className="img-KelolaPrdk"
            src={KelolaPrdk}
            alt="img-kelolaProduk"
          />
        </div>
      </div>
    );
  }
}

export default Content3;
