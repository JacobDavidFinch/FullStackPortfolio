import { Link } from "remix";
import { useLocation } from "react-router-dom";

import signature from "./assets/Signature.png";

export function Navbar() {
  const location = useLocation();

  return (
    <div className="nav">
      <nav className="nav__user-nav">
        <div className="nav__user-nav--left">
          <span
            className={location?.pathname === "/about" ? "nav__active" : ""}
          >
            <Link to="/about">About.</Link>
          </span>
          <span
            className={location?.pathname === "/contact" ? "nav__active" : ""}
          >
            <Link to="/contact">Contact.</Link>
          </span>
        </div>
        <Link to="/" className="nav__logo">
          <img
            width="150"
            className="signature"
            src={signature}
            alt="Jake's Signature"
          />
        </Link>

        <div className="nav__user-nav--right">
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/JacobDavidFinch"
            >
              Github.
            </a>
          </span>
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/JacobFinch"
            >
              LinkedIn.
            </a>
          </span>
        </div>
      </nav>
    </div>
  );
}
