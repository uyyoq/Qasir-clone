import React from "react";
import Navbar from "./Header/Navbar";
import MobileMenu from "./Content/MobileMenu";
import Intro from "./content2/Intro";
import Content3 from "./Content3/Content3";
import { Scan } from "./Content4/Scan";
import Kembalian from "./Content5/Kembalian";

function App() {
  return (
    <div className="App">
      <Navbar menu1="Inspirasi" menu2="Kerjasama" />
      <MobileMenu />
      <Intro />
      <Content3 />
      <Scan />
      <Kembalian />
    </div>
  );
}

export default App;
