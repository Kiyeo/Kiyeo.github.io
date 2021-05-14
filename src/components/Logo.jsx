import { Link } from "react-router-dom";
import logo from "../assets/icons/calcifer.jpg";

const Logo = () => (
  <Link to="/">
    <img className="logo" src={logo} width="200" height="200" alt="avatar" />
  </Link>
);

export default Logo;
