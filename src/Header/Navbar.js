import React, { Component } from "react";
import logo from "../assets/Qasir.svg";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="Menu1">{this.props.menu1}</div>
        <div className="Menu2">{this.props.menu2}</div>

        <div className="Button-Nvbr">
          <button className="button">Masuk</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
