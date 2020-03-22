import React, { Component } from "react";
import Ksbn from "../assets/kasbon.png";
import "./Kasbon.css";

export default class Content7 extends Component {
  render() {
    return (
      <div className="cont-kasbon">
        <div className="text-kasbon">
          <h2 className="kasbon-bold">Catat Kasbon Lebih Teliti</h2>
          <p className="text-ksbn">
            Pelanggan kasbon? Boleh. Tapi pencatatannya harus tetap dijaga.
            Dengan fitur 'Catat Kasbon' kamu akan lebih mudah mencatat
            pembayaran pelanggan yang tertunda
          </p>
        </div>
        <div className="img-kasbon">
          <img className="img-Ksbn" src={Ksbn} alt="img-kasbon" />
        </div>
      </div>
    );
  }
}
