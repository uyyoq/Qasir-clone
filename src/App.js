import React from "react";
import Navbar from "./Header/Navbar";
import MobileMenu from "./Content/MobileMenu";

function App() {
  return (
    <div className="App">
      <Navbar menu1="Inspirasi" menu2="Kerjasama" />
      <MobileMenu />
    </div>
  );
}

export default App;
