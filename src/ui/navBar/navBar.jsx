import { Link, NavLink } from "react-router";

export default function navBar() {
  return (
    <div>
      <NavLink>
        <Link to="/">loopstudios</Link>

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
      </NavLink>
    </div>
  );
}
