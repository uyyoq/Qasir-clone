import React, { Component, Fragment } from "react";
import Mesin11 from "../assets/mesin1.png";
import Mesin22 from "../assets/mesin2.png";
import "./PerangkatKasir.css";

export default class Content8 extends Component {
  render() {
    return (
      <Fragment>
        <h3 className="ttl-PK">Makin Canggih dengan Perangkat Kasir</h3>
        <div className="cont-pk">
          <div className="mesin1">
            <img className="mesin111" src={Mesin11} alt="img-mesin1" />
            <div className="Text-mesin1">
              <h5 className="ttl-mesin1">
                Si Kecil Praktis untuk Pedagang Dinamis
              </h5>
              <p className="1-text">
                Jika kamu mencari mesin kasir portabel yang bisa dibawa ke
                mana-mana, ini dia jawabannya. SUNMI V1S jawabannya.
              </p>
              <p>
                Meski kecil, perangkat ini sudah didukung dengan aplikasi
                printer thermal dan plus scanner, Cocok buat para pengusaha yang
                punya mobilitas tinggi, seperti kamu!
              </p>
              <p>SUNMI V1S jawabannya.</p>

              <p className="sd-pk">Spesifikasi detail</p>
              <button className="PK-bttn1">Pesan Sekarang!</button>
            </div>
          </div>
          <div className="mesin2">
            <img className="mesin222" src={Mesin22} alt="img-mesin2" />
            <div className="Text-mesin2">
              <h5 className="ttl-mesin2">
                Layar Besar untuk Kemudahan Transaksi
              </h5>
              <p className="2-text">
                Ini dia adalah solusi terbaik untuk kamu yang membutuhkan mesin
                kasir berlayar lega.
              </p>
              <p>
                Layar 11 inch-nya akan memudahkanmu melakukan berbagai proses
                penjualan, mulai dari kelola barang dagangan, sampai melakukan
                transaksi pembayaran.
              </p>
              <p className="sd-pk">Spesifikasi detail</p>
              <div className="Pk-bttn">
                <button className="PK-bttn2">Pesan Sekarang!</button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
