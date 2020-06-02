import React, { Component } from "react";
import FAB from "../assets/chatq.svg";
import "../Tombol/Tombol.css";

export class Tombol extends Component {
  render() {
    return (
      <div>
        <div>
          <img className="img-fab" src={FAB} alt="img-fab" />
        </div>
      </div>
    );
  }
}

export default Tombol;
