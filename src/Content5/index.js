import React, { Component } from "react";
import OP from "../assets/online-payment.png";
import KBL from "../assets/kembalian.png";
import "./Kembalian.css";

export default class Content5 extends Component {
  render() {
    return (
      <div className="cont-kembalian">
        <div className="text-kembalian">
          <h2 className="KB-bold">Terima Berbagai Digital Payment</h2>
          <p className="Text-kb">
            Selain pembayaran tunai, Qasir memungkinan pelanggan untuk melakukan
            pembayaran non-tunai dengan Dana, GoPay, OVO, atau LinkAja. Praktis!
          </p>
          <img className="img-op" src={OP} alt="img-OP" />
        </div>
        <div className="img-kembalian">
          <img className="img-K" src={KBL} alt="img-K" />
        </div>
      </div>
    );
  }
}
