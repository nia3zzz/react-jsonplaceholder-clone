import { NavLink } from "react-router";
import "../styles/components/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-containers">
        <div className="footer-left-container">
          <NavLink className="footer-logo" to="/">
            <img src="src/assets/logo.png" alt="Logo" srcSet="" />
            <h1 className="footer-logo-brand-text">JSONPlaceholder-Clone</h1>
          </NavLink>
        </div>
        <br />
        <div className="footer-right-container">
          <a
            href="https://www.github.com/nia3zzz"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Developer
          </a>
        </div>
      </div>
      <div className="copyright-section">
        <p>Copyright &copy;JSONPlaceholder-Clone 2026. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
