import React from "react";
import { NavLink } from "react-router-dom";

// style
import "./../style/custom.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <a href="">
          <i class="fas fa-arrow-alt-circle-left" id=""></i>Back
        </a>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
        >
          <i class="fas fa-building" id=""></i>Businesses
        </NavLink>
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
        >
          <i class="fas fa-people-group" id=""></i>Users
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
        >
          <i class="fas fa-question-circle" id=""></i>Support
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
