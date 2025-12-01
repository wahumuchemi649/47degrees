import "./sidebar.css"

import React from "react";
import {slide as Menu} from "react-burger-menu";

export default function Sidebar() {
  return (
    <Menu right>
      <a  className="menu-item" href="#home">Home</a>
      <a  className="menu-item" href="#about">About</a>
      <a  className="menu-item" href="#services">Our Services</a>
      <a  className="menu-item" href="#work">How We Work</a>
      <a  className="menu-item" href="#silent">Silent Advisory</a>
    </Menu>
  );
}