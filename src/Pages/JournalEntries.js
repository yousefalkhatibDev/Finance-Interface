import React from "react";
import { Button, Modal } from "react-bootstrap";
import PageWrapper from "../Components/PageWrapper";

// components
import JournalEntry from "../Components/JournalEntry";

// styles
import "./../style/custom.css";

class JournalEntries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
  }
  componentDidMount() {
    if (localStorage.getItem("entries")) {
      const localStorageEntries = JSON.parse(localStorage.getItem("entries"));
      this.setState({
        entries: localStorageEntries,
      });
    }
  }
  render() {
    return (
      <PageWrapper>
        <div className="body-content">
          {this.state.entries.length ? (
            <div className="JournalEntries-card">
              <div className="header padding">
                <>
                  <p>Journal Entries</p>
                  <a href="/journal-entries/create">
                    <button className="button">New Journal Entry</button>
                  </a>
                </>
                <div className="search-box">
                  <input type="text" placeholder="Search" />
                  <button className="search-button">Search</button>
                </div>
              </div>
              <div className="body" style={{ height: "auto" }}>
                <table>
                  <tr>
                    <th id="td-1">
                      <i
                        class="fas fa-edit"
                        style={{ fontSize: "16px", opacity: 0.25 }}
                      ></i>
                    </th>
                    <th id="td-2">
                      <i
                        class="fas fa-print"
                        style={{ fontSize: "16px", opacity: 0.25 }}
                      ></i>
                    </th>
                    <th id="td-3">Date</th>
                    <th id="td-4">Narration</th>
                    <th id="td-5">Debit</th>
                    <th id="td-6">Credit</th>
                    <th id="td-7">Status</th>
                  </tr>
                  {this.state.entries.map((e) => {
                    return (
                      <tr>
                        <td>
                          <a href={`/journal-entries/edit/${e.id}`}>
                            <button>Edit</button>
                          </a>
                        </td>
                        <td>
                          <a href={`/journal-entries/view/${e.id}`}>
                            <button>view</button>
                          </a>
                        </td>
                        <td>{e.date}</td>
                        <td>{e.narration}</td>
                        <td>{e.accounts[0].debit}</td>
                        <td>{e.accounts[0].credit}</td>
                        <td></td>
                      </tr>
                    );
                  })}
                </table>
              </div>
              <div className="footer">
                <span className="entries-counter-span">
                  {this.state.entries.length}
                </span>
                <button
                  className="button"
                  style={{ width: "130px", fontSize: "11px", height: "25px" }}
                >
                  Copy to clipboard
                </button>
                <button
                  className="button"
                  style={{ fontSize: "11px", height: "25px" }}
                >
                  Batch View
                </button>
                <button
                  className="button"
                  style={{ fontSize: "11px", height: "25px", width: "90px" }}
                >
                  Batch Create
                </button>
                <button
                  className="button"
                  style={{ fontSize: "11px", height: "25px", width: "90px" }}
                >
                  Batch Update
                </button>
                <button
                  className="button"
                  style={{ fontSize: "11px", height: "25px", width: "90px" }}
                >
                  Batch Delete
                </button>
              </div>
            </div>
          ) : (
            <div className="JournalEntries-card">
              <div className="header">
                <p>Journal Entries</p>
                <a href="/journal-entries/create">
                  <button className="button">New Journal Entry</button>
                </a>
              </div>
              <div className="body">
                <a href="/journal-entries/create">
                  <button className="button">New Journal Entry</button>
                </a>
              </div>
              <div className="footer">
                <button className="button">Batch Create</button>
              </div>
            </div>
          )}
        </div>
      </PageWrapper>
    );
  }
}

export default JournalEntries;
