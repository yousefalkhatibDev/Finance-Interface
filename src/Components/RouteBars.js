import React from "react";

// components
import SideBar from "./SideBar";
import NavBar from "./NavBar";

class RouteBars extends React.Component {
  render() {
    return (
      <>
        <SideBar />
        <NavBar />
      </>
    );
  }
}

export default RouteBars;
