import React, { Component } from "react";
import BKT from "../assets/bukti.png";
import "../content6/Bukti.css";

export class Bukti extends Component {
  render() {
    return (
      <div className="cont-bukti">
        <div className="img-bukti">
          <img className="img-bkt" src={BKT} alt="img-bkt" />
        </div>
        <div>
          <h2>Pilih Struk Cetak Atau Struk Digital</h2>
          <p>
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