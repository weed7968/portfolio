import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">자기소개</Link>
      </li>
      <li>
        <Link to="/page1">pg1</Link>
      </li>
      <li>
        <Link to="/page2">pg2</Link>
      </li>
      <li>
        <Link to="/page3">pg3</Link>
      </li>
    </ul>
  );
};

export default Nav;
