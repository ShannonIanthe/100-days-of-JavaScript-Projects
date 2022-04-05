import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

//const navbarLinks = [({url: '/home', title: 'Home' })]
const Navbar = ({navbarLinks}) => {
  return (
    <nav className="navbar">
    <span className="navbar_logo">travel</span>
      <ul className="navbar_list">
        {navbarLinks.map((item) => {
          return (
            <li className="navbar_item" key={item.title}>
              <a className="navbar_link" href={item.url}>
                  {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
