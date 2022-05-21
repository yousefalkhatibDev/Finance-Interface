import React from "react";
import PageWrapper from "../Components/PageWrapper";

// style
import "./../style/custom.css";

// components
import SummaryCard from "../Components/SummaryCard";

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
