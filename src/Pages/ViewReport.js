import React, { Component } from "react";
import PageWrapper from "../Components/PageWrapper";

export default class ViewReport extends Component {
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
                <a href="/reports">Reports</a>{" "}
                <i class="fa-solid fa-caret-right"></i>{" "}
                <a href="/reports">Profit and Loss Statement</a>{" "}
                <i class="fa-solid fa-caret-right"></i>{" "}
                <p>Profit and Loss Statement - view</p>
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
                <button className="button-viewJournalEntry">
                  Copy to clipboard
                </button>
              </div>
              <div className="body" style={{ height: "auto" }}>
                <div className="paper" style={{ height: "auto" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      marginTop: "15px",
                    }}
                  >
                    <h1 style={{ fontSize: "18px" }}>Green touch Tech</h1>
                    <h1 style={{ fontSize: "20px", fontWeight: "600" }}>
                      Profit and Loss Statement
                    </h1>
                    <h1 style={{ fontSize: "17px", fontWeight: "600" }}>
                      For the period from 5/23/2022 to 5/23/2022
                    </h1>
                  </div>
                  <span>
                    <div
                      style={{
                        borderBottom: "1px solid black",
                        width: "95%",
                        textAlign: "end",
                      }}
                    >
                      <p style={{ fontSize: "11px" }}>5/20/2022</p>
                    </div>
                  </span>
                  <ul style={{ fontSize: "15px", marginTop: "10px" }}>
                    <li style={{ marginBottom: "10px" }}>
                      income
                      <ul className="full-width-lis">
                        <li>
                          Interest received <span>-</span>
                        </li>
                        <li>
                          Sales <span>-</span>
                        </li>
                        <b>
                          Total — Income <span>0.00</span>
                        </b>
                      </ul>
                    </li>
                    <li>
                      Less: Expenses
                      <ul className="full-width-lis">
                        <li>
                          Accounting fees <span>-</span>
                        </li>
                        <li>
                          Advertising and promotion <span>-</span>
                        </li>
                        <li>
                          Bank charges <span>-</span>
                        </li>
                        <li>
                          Computer equipment <span>-</span>
                        </li>
                        <li>
                          Donations <span>-</span>
                        </li>
                        <li>
                          Electricity <span>-</span>
                        </li>
                        <li>
                          Entertainment <span>-</span>
                        </li>
                        <li>
                          Legal fees <span>-</span>
                        </li>
                        <li>
                          Motor vehicle expenses <span>-</span>
                        </li>
                        <li>
                          Printing and stationery <span>-</span>
                        </li>
                        <li>
                          Rent <span>-</span>
                        </li>
                        <li>
                          Repairs and maintenance <span>-</span>
                        </li>
                        <li>
                          Telephone <span>-</span>
                        </li>
                        <b>
                          Total — Expenses <span>0.00</span>
                        </b>
                      </ul>
                    </li>
                  </ul>
                  <div id="Net-profit">
                    <p>
                      Net profit (loss) <span>0.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }
}
