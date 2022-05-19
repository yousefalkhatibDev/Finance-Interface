import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import JournalEntries from "./Pages/JournalEntries";

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
            <Route exact path="/journal-entries" element={<JournalEntries />} />
          </Routes>
        </BrowserRouter>
      </span>
    );
  }
}

export default Routing;
