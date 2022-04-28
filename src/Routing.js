import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import Test from "./Pages/test";

// component
import RouteBars from "./Components/RouteBars";

class Routing extends React.Component {
  render() {
    return (
      <span>
        <BrowserRouter>
          <RouteBars />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/test" element={<Test />} />
          </Routes>
          
        </BrowserRouter>
      </span>
    );
  }
}

export default Routing;
