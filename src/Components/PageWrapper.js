import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class PageWrapper extends Component {
  render() {
    return (
      <div className="PageWrapper">
        <div className="body-content Main-card-container">
          <div className="Main-card">
            <div className="header-2">
              <i
                class="fa-solid fa-xmark"
                style={{ transform: "translateY(0)", fontSize: "23px" }}
              ></i>
              <h1 className="header">Green touch tech</h1>
              <p>Rename</p>
              <div className="buttons-container">
                <button className="button">History</button>
                <button className="button">Backup</button>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content-container">
          <div className="links-container">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
            >
              <i class="fa-solid fa-display"></i>Summary
            </NavLink>
            <NavLink
              to="/journal-entries"
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
            >
              <i class="fas fa-balance-scale" style={{ fontSize: "16px" }}></i>
              Journal Entries
            </NavLink>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
            >
              <i class="fas fa-print" style={{ fontSize: "16px" }}></i>Reports
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
            >
              <i class="fas fa-fw fa-cog" style={{ fontSize: "16px" }}></i>
              Settings
            </NavLink>
            <div>
              <p>Customize</p>
              <i
                class="fas fa-hand-pointer fa-bounce"
                style={{ fontSize: "24px" }}
              ></i>
            </div>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
