import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import JournalEntries from "./Pages/JournalEntries";
import CreateNewJournalEntry from "./Pages/CreateNewJournalEntry";
import ViewJournalEntry from "./Pages/ViewJournalEntry";
import EditJournalEntry from "./Pages/EditJournalEntry";

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
            <Route
              exact
              path="/journal-entries/create"
              element={<CreateNewJournalEntry />}
            />
            <Route
              exact
              path="/journal-entries/view/:id"
              element={<ViewJournalEntry />}
            />
            <Route
              exact
              path="/journal-entries/edit/:id"
              element={<EditJournalEntry />}
            />
          </Routes>
        </BrowserRouter>
      </span>
    );
  }
}

export default Routing;
