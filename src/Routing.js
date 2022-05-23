import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import JournalEntries from "./Pages/JournalEntries";
import CreateNewJournalEntry from "./Pages/CreateNewJournalEntry";
import ViewJournalEntry from "./Pages/ViewJournalEntry";
import EditJournalEntry from "./Pages/EditJournalEntry";
import Reports from "./Pages/Reports";
import ShowReports from "./Pages/ShowReports";
import CreateReport from "./Pages/CreateReport";

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
            <Route exact path="/journal-entries/create" element={<CreateNewJournalEntry />} />
            <Route exact path="/journal-entries/view/:id" element={<ViewJournalEntry/>}/>
            <Route exact path="/journal-entries/edit/:id" element={<EditJournalEntry />}/>
            <Route exact path="/reports" element={<Reports />}/>
            <Route exact path="/reports/show/:id" element={<ShowReports />}/>
            <Route exact path="/reports/create/:id" element={<CreateReport />}/>
          </Routes>
        </BrowserRouter>
      </span>
    );
  }
}

export default Routing;
