import React, { Component } from "react";
import playstore from "../assets/playstore.svg";
import "./Content10.css";

export default class Content10 extends Component {
  render() {
    return (
      <div className="c10-container">
        <h3 className="ttl-c10">Ayo Mulai Toko Kamu!</h3>
        <p className="text-c10">
          Sekarang tidak ada lagi halangan untuk memiliki aplikasi kasir untuk
          usaha kamu. Dengan berbagai fitur yang ada, Qasir akan selalu membantu
          mengembangkan usaha kamu. Unduh Qasir di ponsel atau tablet kamu dan
          mulai perjalanan baru usaha kamu.
        </p>
        <a>
          <img className="img-ggl" src={playstore} alt="img-plystore" />
        </a>
      </div>
    );
  }
}
