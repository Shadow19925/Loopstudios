import { Link, NavLink } from "react-router";
import { useState, useEffect } from "react";
import Logo from "../../assets/icons/logo.svg"; // Adjust the path to your logo
import { useScreenSize } from "../../util/helper"; // Import the custom hook
import CloseIcon from "../../assets/icons/icon-close.svg"; // Import close icon if needed
export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMobile } = useScreenSize(); // Use the custom hook

  useEffect(() => {
    console.log("isMobile inside the NavBar", isMobile);
  }, [isMobile]); // Add isMobile to the dependency array

  return isMobile ? (
    <div className="mobile-menu-icon">
      <img src={Logo} alt="logo" />
      {!isMobileMenuOpen ? (
        <button
          className="open-button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      ) : null}

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div
            className="close-button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <img src={Logo} alt="logo" />
            <img src={CloseIcon} alt="close menu" />
          </div>

          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  ) : (
    <div className="nav-bar-container">
      <nav className="nav-bar">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>

        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Careers</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
