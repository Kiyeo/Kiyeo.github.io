import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/calcifer.jpg";

const Logo = () => (
  <Link to="/">
    <img className="logo" src={logo} alt="avatar" />
  </Link>
);

export default Logo;
