import uuid from "react-uuid";
import React, { Component } from "react";

// components
import PageWrapper from "../Components/PageWrapper";

export default class EditJournalEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: ["1"],
      showDesc: false,
      isOptional: true,
      Credit: 0,
      Debit: 0,
      date: "",
      reference: "",
      narration: "",
      Accounts: [],
    };
    this.addLine = this.addLine.bind(this);
    this.changeShowDesc = this.changeShowDesc.bind(this);
    this.removeLine = this.removeLine.bind(this);
    this.changeIsOptional = this.changeIsOptional.bind(this);
    this.changeState = this.changeState.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  componentDidMount() {
    this.state.lines.forEach((l) => {
      this.state.Accounts.push({
        account: "",
        description: "",
        debit: 0,
        credit: 0,
      });
    });
  }

  addLine() {
    this.setState({
      lines: [...this.state.lines, uuid()],
    });
  }

  changeShowDesc() {
    this.setState({
      showDesc: !this.state.showDesc,
    });
  }

  removeLine(id) {
    const filterdArray = this.state.lines.filter((l) => l !== id);
    this.setState({
      lines: filterdArray,
    });
  }

  changeIsOptional() {
    this.setState({
      isOptional: !this.state.isOptional,
    });
  }

  changeState(e, state) {
    this.setState({
      [state]: e.target.value,
    });
  }

  addState(e, type, i) {
    this.state.Accounts[i][type] = e.target.value;
    console.log(this.state.Accounts[i]);
  }

  submitData(redirect) {
    if (localStorage.getItem("entries")) {
      const entires = JSON.parse(localStorage.getItem("entries"));
      localStorage.setItem(
        "entries",
        JSON.stringify([
          ...entires,
          {
            date: this.state.date,
            reference: this.state.reference,
            narration: this.state.narration,
            accounts: this.state.Accounts,
            id: uuid(),
          },
        ])
      );
    } else {
      localStorage.setItem(
        "entries",
        JSON.stringify([
          {
            date: this.state.date,
            reference: this.state.reference,
            narration: this.state.narration,
            accounts: this.state.Accounts,
            id: uuid(),
          },
        ])
      );
    }
    if (redirect && redirect === true) {
      window.location = "/journal-entries/create";
    } else {
      window.location = "/journal-entries";
    }
  }

  render() {
    return (
      <PageWrapper>
        <div className="CreateNewJournalEntry-container">
          <div className="body-content">
            <div
              className="CreateNewJournalEntry-card"
              id="remove-margin-CreateNewJournalEntry"
            >
              <div className="header-2">
                <a href="/journal-entries">Journal Entries</a>{" "}
                <i class="fa-solid fa-caret-right"></i>{" "}
                <p>Journal Entry - Edit</p>
              </div>
            </div>
          </div>
          <div className="body-content">
            <div className="CreateNewJournalEntry-card">
              <div className="header">
                <p>Journal Entry</p>
              </div>
              <div className="body">
                <div className="input-group-row">
                  <div className="input-container">
                    <label for="date-input">Date</label>
                    <input
                      type="date"
                      id="date-input"
                      name="date-input"
                      onChange={(e) => this.changeState(e, "date")}
                    />
                  </div>
                  <div className="input-container">
                    <label for="date-input">Reference</label>
                    <div className="merge-inputs">
                      <span className="merge-inputs-addon">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={this.changeIsOptional}
                        />
                      </span>
                      {this.state.isOptional === true ? (
                        <input
                          type="text"
                          id="text-input"
                          name="text-input"
                          defaultValue=""
                          placeholder="Optional"
                          onChange={(e) => this.changeState(e, "reference")}
                        />
                      ) : (
                        <input
                          type="text"
                          id="text-input"
                          name="text-input"
                          defaultValue="Automatic"
                          readOnly
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="input-group-column">
                  <label forHtml="text-input-1">Narration</label>
                  <input
                    type="text"
                    id="text-input-1"
                    name="text-input-1"
                    onChange={(e) => this.changeState(e, "narration")}
                  />
                </div>
                {this.state.lines.map((l, i) => {
                  return (
                    <div className="input-group-row">
                      <div className="input-container">
                        <label>Account</label>
                        <select
                          name="Suspense"
                          className="select"
                          onChange={(e) => this.addState(e, "account", i)}
                        >
                          <option value="" disabled selected>
                            Suspense
                          </option>
                          <option value="Accounting fees">
                            Accounting fees
                          </option>
                          <option value="Advertising and promotion">
                            Advertising and promotion
                          </option>
                          <option value="Bank charges">Bank charges</option>
                          <option value="Capital gains on investments">
                            Capital gains on investments
                          </option>
                          <option value="Computer equipment">
                            Computer equipment
                          </option>
                          <option value="Donations">Donations</option>
                          <option value="Electricity">Electricity</option>
                          <option value="Entertainment">Entertainment</option>
                          <option value="Interest recived">
                            Interest recived
                          </option>
                          <option value="Legal fees">Legal fees</option>
                          <option value="Motor vehicle expenses">
                            Motor vehicle expenses
                          </option>
                          <option value="Printing and stationary">
                            Printing and stationary
                          </option>
                          <option value="Repairs and maintenance">
                            Repairs and maintenance
                          </option>
                          <option value="Retained earnings">
                            Retained earnings
                          </option>
                          <option value="Sales">Sales</option>
                          <option value="Telephone">Telephone</option>
                        </select>
                      </div>
                      {this.state.showDesc && (
                        <div className="input-container">
                          <label>Description</label>
                          <input
                            type="text"
                            id="number-input"
                            onChange={(e) => this.addState(e, "description", i)}
                          />
                        </div>
                      )}
                      <div className="input-container">
                        <label>Debit</label>
                        <input
                          type="number"
                          id="number-input"
                          onChange={(e) => this.addState(e, "debit", i)}
                        />
                      </div>
                      <div className="input-container">
                        <label>Credit</label>
                        <input
                          type="number"
                          id="number-input"
                          onChange={(e) => this.addState(e, "credit", i)}
                        />
                      </div>
                      {l !== "1" && (
                        <div className="input-container">
                          <i
                            class="fa-solid fa-xmark"
                            onClick={() => this.removeLine(l)}
                          ></i>
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="input-container Credit-Debit-results">
                  <input
                    type="text"
                    id="Credit-result"
                    name="Credit-result"
                    value={"0"}
                    readonly
                  />
                  <input
                    type="text"
                    id="Debit-result"
                    name="Debit-result"
                    value={"0"}
                    readonly
                  />
                </div>
                <button className="button" onClick={this.addLine}>
                  Add line
                </button>
                <div className="input-group-row">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={this.changeShowDesc}
                  />
                  <label className="checkbox-label">Line description</label>
                </div>
              </div>
              <div className="footer">
                <button className="button Update-button">Update</button>
                <button className="button Delete-button">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }
}
