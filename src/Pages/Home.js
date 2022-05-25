import React from "react";

// components
import SummaryCard from "../Components/SummaryCard";
import PageWrapper from "../Components/PageWrapper";

// style
import "./../style/custom.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <PageWrapper />
      </div>
    );
  }
}

export default Home;
