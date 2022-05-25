import React, { Component } from "react";
import { useParams } from "react-router-dom";

// components
import PageWrapper from "../Components/PageWrapper";

const withParams = (Component) => (props) => {
  const { id } = useParams();

  return <Component {...props} id={id} />;
};

class ViewJournalEntry extends Component {
  render() {
    return (
      <PageWrapper>
        <div className="JournalEntries-container">
          <div className="body-content">
            <div
              className="CreateNewJournalEntry-card"
              id="remove-margin-CreateNewJournalEntry"
            >
              <div className="header-2">
                <a href="/journal-entries">Journal Entries</a>{" "}
                <i class="fa-solid fa-caret-right"></i>{" "}
                <p>Journal Entry - View</p>
              </div>
            </div>
          </div>
          <div className="body-content">
            <div
              className="JournalEntries-card"
              style={{ width: "900px", marginTop: "55px" }}
            >
              <div className="header">
                <p>Journal Entries</p>
                <button className="button-viewJournalEntry">Edit</button>
                <button className="button-viewJournalEntry">Clone</button>
                <button className="button-viewJournalEntry">Print</button>
                <div
                  className="backward-forward-icons"
                  style={{ marginLeft: "auto", marginRight: "15px" }}
                >
                  <button disabled>
                    <i className="fas fa-step-backward" id=""></i>
                  </button>
                  <button disabled>
                    <i className="fas fa-backward" id=""></i>
                  </button>
                  <span>1/2</span>
                  <button>
                    <i className="fas fa-forward" id=""></i>
                  </button>
                  <button>
                    <i className="fas fa-step-forward" id=""></i>
                  </button>
                </div>
              </div>
              <div className="body" style={{ height: "auto" }}>
                <div className="paper">
                  <h1 className="paper-header">Journal Entry</h1>
                  <span>
                    <div>
                      <h1 style={{ fontSize: "14px" }}>Date</h1>
                      <p style={{ fontSize: "11px" }}>5/20/2022</p>
                    </div>
                    <div>
                      <h1 style={{ fontSize: "14px" }}>Green Touch Tech</h1>
                      <p style={{ fontSize: "11px" }}>Adress 1</p>
                      <p style={{ fontSize: "11px" }}>Adress 1</p>
                      <p style={{ fontSize: "11px" }}>Adress 1</p>
                      <p style={{ fontSize: "11px" }}>Adress 1</p>
                    </div>
                  </span>
                  <div className="view-table-container">
                    <table className="view-table">
                      <tr>
                        <th>Account</th>
                        <th>Debit</th>
                        <th>Credit</th>
                      </tr>
                      <tr>
                        <td>Sales</td>
                        <td>100</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>Telephone</td>
                        <td>600</td>
                        <td>10000</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="footer">
                <button
                  className="button"
                  style={{
                    width: "60px",
                    height: "20px",
                    fontSize: "11px",
                    marginRight: "12px",
                  }}
                >
                  History
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }
}

export default withParams(ViewJournalEntry);
