import React from "react";
import Navbar from "./Header/Navbar";
import Content3 from "./Content3";
import Tombol from "./Tombol/Tombol";
import Content from "./Content";
import Content2 from "./Content2/Index";
import Content4 from "./Content4/Index";
import Content5 from "./Content5";
import Content6 from "./Content6";
import Content7 from "./Content7";
import Content8 from "./Content8";
import Content9 from "./Content9/Sponsor";
import Content10 from "./Content10";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar menu1="Inspirasi" menu2="Kerjasama" />
      <Content />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Content7 />
      <Content8 />
      <Content9 />
      <Content10 />
      <Footer />
      <Tombol />
    </div>
  );
}

export default App;
