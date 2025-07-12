import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">API Hub</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
