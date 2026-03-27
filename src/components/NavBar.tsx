import "../styles/components/NavBar.css";
import { NavLink } from "react-router";
import { useState } from "react";

function NavBar() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="navbar-top-header">
        <p>
          This project uses{" "}
          <a
            href="https://jsonplaceholder.typicode.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JSONPlaceholder APIs
          </a>
        </p>
      </header>
      <nav className="navbar-navbar">
        <NavLink className="logo" to="/">
          <img src="src/assets/logo.png" alt="Logo" srcSet="" />
          <h1 id="logo-brand-text">JSONPlaceholder-Clone</h1>
        </NavLink>

        <button
          className={`hamburger-menu ${isHamburgerMenuOpen ? "open" : ""}`}
          onClick={toggleHamburgerMenu}
        >
          <span className="hamburger-icon"></span>
          <span className="hamburger-icon"></span>
          <span className="hamburger-icon"></span>
        </button>

        <ul className={isHamburgerMenuOpen ? "open" : ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/guides">Guides</NavLink>
          </li>
          <li>
            <NavLink to="/resources">Resources</NavLink>
          </li>
          <li>
            <NavLink to="/routes">Routes</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
