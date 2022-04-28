import React from "react";

// style
import "./../style/custom.css";

// components
import SummaryCard from "../Components/SummaryCard";

class Home extends React.Component {
  render() {
    return (
      <div className="body-content">
        <SummaryCard />
      </div>
    );
  }
}

export default Home;
