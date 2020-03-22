import React, { Component } from "react";
import BKT from "../assets/bukti.png";
import "./Bukti.css";

export class Bukti extends Component {
  render() {
    return (
      <div className="cont-bukti">
        <div className="img-bukti">
          <img className="img-bkt" src={BKT} alt="img-bkt" />
        </div>
        <div className="text-bukti">
          <h2 className="bukti-bold">Pilih Struk Cetak Atau Struk Digital</h2>
          <p className="text-bkt">
            Beberapa orang perlu struk cetak, beberapa lagi tidak ingin menambah
            konsumsi kertas. Struk digital bisa dikirim ke Whatsapp pelanggan
            atau aplikasi chat lainnya.
          </p>
        </div>
      </div>
    );
  }
}

export default Bukti;
