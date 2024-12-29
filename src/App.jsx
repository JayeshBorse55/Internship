import React from "react";
import NavbarWithSearch from "./NavbarWithSearch";
import Navbar2 from "./Navbar2";
import Home from "./Home";
import Checkout from "./Checkout";
import Order from "./Order";
import Base from "./Base";
import FooterProj from "./FooterProj";

function App() {
  return ( 
    <div>
      <NavbarWithSearch/>
      <Navbar2/>
      <Home/>
      <div className="flex">
        <Checkout/>
        <Order/>
      </div>
      <Base/>
      <FooterProj/>
    </div>
   );
}

export default App;