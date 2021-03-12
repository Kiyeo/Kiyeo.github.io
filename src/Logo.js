import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/calcifer.jpg";

const Logo = () => (
  <logo>
    <Link to="/">
      <img className="logo" src={logo} alt="Totoro" />
    </Link>
  </logo>
);

export default Logo;
