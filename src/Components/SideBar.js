import React from "react";
import { NavLink } from "react-bootstrap";

class SideBar extends React.Component {
  render() {
    return (
      <div class="sidebar">
        <NavLink href="/home">Summary</NavLink>
        <NavLink href="/news">Journal Entries</NavLink>
        <NavLink href="/contact">Reports</NavLink>
        <NavLink href="/about">Settings</NavLink>
      </div>
    );
  }
}

export default SideBar;
