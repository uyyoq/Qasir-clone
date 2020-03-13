import React, { Component } from "react";
import "../content8/PerangkatKasir.css";

export class PerangkatKasir extends Component {
  render() {
    return (
      <div className="cont-pk">
        <div className="mesin1">
          <h2 className="1-bold">Si Kecil Praktis untuk Pedagang Dinamis</h2>
          <p className="1-text">
            Jika kamu mencari mesin kasir portabel yang bisa dibawa ke
            mana-mana, ini dia jawabannya. Meski kecil, perangkat ini sudah
            didukung dengan aplikasi printer thermal dan plus scanner, Cocok
            buat para pengusaha yang punya mobilitas tinggi, seperti kamu! SUNMI
            V1S jawabannya.
          </p>
          <p className="bttn-1">Spesifikasi detail</p>
        </div>
        <div className="mesin2">
          <h2 className="2-bold">Layar Besar untuk Kemudahan Transaksi</h2>
          <p className="2-text">
            Ini dia adalah solusi terbaik untuk kamu yang membutuhkan mesin
            kasir berlayar lega. Layar 11 inch-nya akan memudahkanmu melakukan
            berbagai proses penjualan, mulai dari kelola barang dagangan, sampai
            melakukan transaksi pembayaran.
          </p>
          <p className="bttn-2">Spesifikasi detail</p>
        </div>
      </div>
    );
  }
}

export default PerangkatKasir;
