import React from "react";
import { NavLink } from "react-bootstrap";

class SideBar extends React.Component {
  render() {
    return (
      <div class="sidebar">
        <NavLink href="/">Summary</NavLink>
        <NavLink href="/journal-entries">Journal Entries</NavLink>
        <NavLink href="/reports">Reports</NavLink>
        <NavLink href="/settings">Settings</NavLink>
      </div>
    );
  }
}

export default SideBar;
