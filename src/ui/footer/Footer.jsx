import Logo from "../../assets/icons/logo.svg";
import { NavLink } from "react-router"; // Import NavLink for navigation
import Facebook from "../../assets/icons/icon-Facebook.svg";
import Twitter from "../../assets/icons/icon-Twitter.svg";
import Pinterest from "../../assets/icons/icon-Pinterest.svg";
import Instagram from "../../assets/icons/icon-Instagram.svg";
import { useScreenSize } from "../../util/helper";
export default function Footer() {
  const { isMobile } = useScreenSize();

  return isMobile ? (
    <div className="mobile-footer">
      <img src={Logo} alt="Logo" />
      <ul className="">
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
      <div className="">
        <div className="social-links">
          <a href="https://www.facebook.com">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.pinterest.com">
            <img src={Pinterest} alt="Pinterest" />
          </a>
          <a href="https://www.instagram.com">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  ) : (
    <footer className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="Logo" />
        <div className="social-links">
          <a href="https://www.facebook.com">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.pinterest.com">
            <img src={Pinterest} alt="Pinterest" />
          </a>
          <a href="https://www.instagram.com">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="table-footer-group">
        <ul className="footer-links">
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
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
