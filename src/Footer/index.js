import React, { Component } from "react";
import fLogo from "../assets/footer-logo.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="sosmed-logo">
          <div>
            <img className="logo-footer" src={fLogo} alt="img-Logo-footer" />
          </div>
          <div className="sosmed">
            <img className="ink" src={linkedin} alt="img-ink" />
            <img className="fb" src={facebook} alt="img-fb" />
            <img className="yt" src={youtube} alt="img-yt" />
            <img className="twt" src={twitter} alt="img-twt" />
            <img className="ig" src={instagram} alt="img-ig" />
          </div>
        </div>
        <div className="list-footer">
          <div>
            <h3>Home</h3>
            <p>Download App</p>
            <p>Kerja sama dengan Qasir</p>
            <p>Kebijakan priivasi</p>
          </div>
          <div>
            <h3>Tentang Kami</h3>
            <p>Tentang Qasir</p>
            <p>Karir</p>
            <p>Tim Qasir</p>
          </div>
          <div>
            <h3>Blog</h3>
            <p>Event</p>
            <p>Inspirasi</p>
            <p>Promo Qasir</p>
            <p>Studi Kasus</p>
            <p>Tips</p>
          </div>
          <div>
            <h3>Support</h3>
            <p>Bantuan</p>
            <p>Video Tutorial</p>
          </div>
          <div>
            <h3>Kontak</h3>
            <p>
              Jl. Bunga Mawar No.40, Cipete Selatan, Cilandak, Jakarta Selatan
              12410 DKI Jakarta
            </p>
            <p>+6221 2782 9547</p>
            <p>hello@qasir.id</p>
          </div>
        </div>
      </div>
    );
  }
}
