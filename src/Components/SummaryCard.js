import React from "react";

//style
import "./../style/custom.css";

class SummaryCard extends React.Component {
  render() {
    return (
      <div className="summary-card">
        <div className="header">
          <p>
            <span className="group-name">Assets</span>{" "}
            <span className="value">30000</span>
          </p>
        </div>

        <div className="content">
          <p>
            content <span className="value">30000</span>
            <ul>
              <li>
                test<span className="value">30000</span>
              </li>
              <li>
                test<span className="value">30000</span>
              </li>
              <li>
                test<span className="value">30000</span>
              </li>
              <li>
                test<span className="value">30000</span>
              </li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
}

export default SummaryCard;
