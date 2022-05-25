import React, { useState, useEffect } from "react";
import PageWrapper from "../Components/PageWrapper";
import { useParams, useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function ShowReports() {
  const [NameQuery, setNameQuery] = useState();
  const [tableIsOn, setTableIsOn] = useState(false);
  const [reportsData, setReportsData] = useState();
  const { id } = useParams();
  let query = useQuery();
  useEffect(() => {
    setNameQuery(query.get("name"));
    if (localStorage.getItem(`${id}`)) {
      setTableIsOn(true);
      const dataLocalStorage = localStorage.getItem(`${id}`);
      const arrDataLocalStorage = JSON.parse(dataLocalStorage);
      setReportsData(arrDataLocalStorage);
    }
  }, []);
  return (
    <PageWrapper>
      <div className="body-content">
        <div className="CreateNewJournalEntry-card" style={{ marginBottom: 0 }}>
          <div className="header-2">
            <a href="/reports">Reports</a>{" "}
            <i class="fa-solid fa-caret-right"></i>
            <p>{NameQuery}</p>
          </div>
        </div>
        <div className="body-content">
          <div
            className="JournalEntries-card"
            style={{ width: "900px", marginBottom: "100px" }}
          >
            <div className="header">
              <p>{NameQuery}</p>
              <a
                href={
                  id === "ProfitAndLossStatement"
                    ? "/reports/create/ProfitAndLossStatement?name=Profit and Loss Statement"
                    : id === "ProfitAndLossStatementActualVsBudget"
                    ? "/reports/create/ProfitAndLossStatementActualVsBudget?name=Profit and Loss Statement (Actual vs Budget)"
                    : id === "BalanceSheet"
                    ? "/reports/create/BalanceSheet?name=Balance Sheet"
                    : id === "StatementOfChangesInEquity"
                    ? "/reports/create/StatementOfChangesInEquity?name=Statement of Changes in Equity"
                    : id === "TrialBalance"
                    ? "/reports/create/TrialBalance?name=Trial Balance"
                    : id === "GeneralLedgerSummary"
                    ? "/reports/create/GeneralLedgerSummary?name=General Ledger Summary"
                    : id === "GeneralLedgerTransactions"
                    ? "/reports/create/GeneralLedgerTransactions?name=General Ledger Transactions"
                    : id === "CustomReports" &&
                      "/reports/create/CustomReports?name=Custom Reports"
                }
              >
                <button className="button">New Report</button>
              </a>
            </div>
            {tableIsOn ? (
              <div className="body" style={{ display: "initial" }}>
                <a
                  href={
                    id === "ProfitAndLossStatement"
                      ? "/reports/create/ProfitAndLossStatement?name=Profit and Loss Statement"
                      : id === "ProfitAndLossStatementActualVsBudget"
                      ? "/reports/create/ProfitAndLossStatementActualVsBudget?name=Profit and Loss Statement (Actual vs Budget)"
                      : id === "BalanceSheet"
                      ? "/reports/create/BalanceSheet?name=Balance Sheet"
                      : id === "StatementOfChangesInEquity"
                      ? "/reports/create/StatementOfChangesInEquity?name=Statement of Changes in Equity"
                      : id === "TrialBalance"
                      ? "/reports/create/TrialBalance?name=Trial Balance"
                      : id === "GeneralLedgerSummary"
                      ? "/reports/create/GeneralLedgerSummary?name=General Ledger Summary"
                      : id === "GeneralLedgerTransactions"
                      ? "/reports/create/GeneralLedgerTransactions?name=General Ledger Transactions"
                      : id === "CustomReports" &&
                        "/reports/create/CustomReports?name=Custom Reports"
                  }
                >
                  {id === "ProfitAndLossStatement" &&
                  localStorage.getItem("ProfitAndLossStatement") ? (
                    <table style={{ width: "100%" }}>
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
                        <th id="td-3">From</th>
                        <th
                          id="td-4"
                          style={{ width: "auto", textAlign: "center" }}
                        >
                          To
                        </th>
                        <th
                          id="td-5"
                          style={{ width: "65%", textAlign: "left" }}
                        >
                          Description
                        </th>
                      </tr>
                      {reportsData.map((element) => {
                        return (
                          <tr>
                            <td>
                              <a
                                href={
                                  "/reports/Edit/ProfitAndLossStatement?name=Profit and Loss Statement"
                                }
                              >
                                <button>Edit</button>
                              </a>
                            </td>
                            <td>
                              <a href={"/reports/view"}>
                                <button>View</button>
                              </a>
                            </td>
                            <td style={{ textAlign: "center" }}>dwad</td>
                            <td style={{ textAlign: "center" }}>adwaw</td>
                            <td>wadwad</td>
                          </tr>
                        );
                      })}
                    </table>
                  ) : id === "ProfitAndLossStatementActualVsBudget" &&
                    localStorage.getItem(
                      "ProfitAndLossStatementActualVsBudget"
                    ) ? (
                    <table style={{ width: "100%" }}>
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
                        <th id="td-3">From</th>
                        <th
                          id="td-4"
                          style={{ width: "auto", textAlign: "center" }}
                        >
                          To
                        </th>
                        <th
                          id="td-5"
                          style={{ width: "65%", textAlign: "left" }}
                        >
                          Title
                        </th>
                      </tr>
                      {reportsData.map((element) => {
                        return (
                          <tr>
                            <td>
                              <a
                                href={
                                  "/reports/Edit/ProfitAndLossStatementActualVsBudget?name=Profit and Loss Statement (Actual vs Budget)"
                                }
                              >
                                <button>Edit</button>
                              </a>
                            </td>
                            <td>
                              <a href={"/reports/view"}>
                                <button>View</button>
                              </a>
                            </td>
                            <td style={{ textAlign: "center" }}>dwad</td>
                            <td style={{ textAlign: "center" }}>adwaw</td>
                            <td>wadwad</td>
                          </tr>
                        );
                      })}
                    </table>
                  ) : id === "BalanceSheet" &&
                    localStorage.getItem("BalanceSheet") ? (
                    <table style={{ width: "100%" }}>
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
                        <th
                          id="td-5"
                          style={{ width: "auto", textAlign: "left" }}
                        >
                          Description
                        </th>
                      </tr>
                      {reportsData.map((element) => {
                        return (
                          <tr>
                            <td>
                              <a
                                href={
                                  "/reports/Edit/BalanceSheet?name=Balance Sheet"
                                }
                              >
                                <button>Edit</button>
                              </a>
                            </td>
                            <td>
                              <a href={"/reports/view"}>
                                <button>View</button>
                              </a>
                            </td>
                            <td style={{ textAlign: "center" }}>dwad</td>
                            <td>adwaw</td>
                          </tr>
                        );
                      })}
                    </table>
                  ) : id === "StatementOfChangesInEquity" &&
                    localStorage.getItem("StatementOfChangesInEquity") ? (
                    <table style={{ width: "100%" }}>
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
                        <th id="td-3">From</th>
                        <th
                          id="td-4"
                          style={{ width: "10%", textAlign: "center" }}
                        >
                          To
                        </th>
                        <th
                          id="td-5"
                          style={{ width: "auto", textAlign: "left" }}
                        >
                          Description
                        </th>
                      </tr>
                      {reportsData.map((element) => {
                        return (
                          <tr>
                            <td>
                              <a
                                href={
                                  "/reports/Edit/StatementOfChangesInEquity?name=Statement of Changes in Equity"
                                }
                              >
                                <button>Edit</button>
                              </a>
                            </td>
                            <td>
                              <a href={"/reports/view"}>
                                <button>View</button>
                              </a>
                            </td>
                            <td style={{ textAlign: "center" }}>dwad</td>
                            <td style={{ textAlign: "center" }}>adwaw</td>
                            <td>wadwad</td>
                          </tr>
                        );
                      })}
                    </table>
                  ) : id === "TrialBalance" &&
                    localStorage.getItem("TrialBalance") ? (
                    <table style={{ width: "100%" }}>
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
                        <th id="td-3">From</th>
                        <th
                          id="td-4"
                          style={{ width: "10%", textAlign: "center" }}
                        >
                          To
                        </th>
                        <th
                          id="td-4"
                          style={{ width: "17%", textAlign: "center" }}
                        >
                          Accounting method
                        </th>
                        <th
                          id="td-5"
                          style={{ width: "auto", textAlign: "left" }}
                        >
                          Description
                        </th>
                      </tr>
                      {reportsData.map((element) => {
                        return (
                          <tr>
                            <td>
                              <a
                                href={
                                  "/reports/Edit/TrialBalance?name=Trial Balance"
                                }
                              >
                                <button>Edit</button>
                              </a>
                            </td>
                            <td>
                              <a href={"/reports/view"}>
                                <button>View</button>
                              </a>
                            </td>
                            <td style={{ textAlign: "center" }}>dwad</td>
                            <td style={{ textAlign: "center" }}>adwaw</td>
                            <td style={{ textAlign: "center" }}>adwaw</td>
                            <td>wadwad</td>
                          </tr>
                        );
                      })}
                    </table>
                  ) : id === "GeneralLedgerSummary" &&
                    localStorage.getItem("GeneralLedgerSummary") ? (
                    <table style={{ width: "100%" }}>
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
                        <th id="td-3">From</th>
                        <th
                          id="td-4"
                          style={{ width: "10%", textAlign: "center" }}
                        >
                          To
                        </th>
                        <th
                          id="td-5"
                          style={{ width: "auto", textAlign: "left" }}
                        >
                          Description
                        </th>
                      </tr>
                      {reportsData.map((element) => {
                        return (
                          <tr>
                            <td>
                              <a
                                href={
                                  "/reports/Edit/GeneralLedgerSummary?name=General Ledger Summary"
                                }
                              >
                                <button>Edit</button>
                              </a>
                            </td>
                            <td>
                              <a href={"/reports/view"}>
                                <button>View</button>
                              </a>
                            </td>
                            <td style={{ textAlign: "center" }}>dwad</td>
                            <td style={{ textAlign: "center" }}>adwaw</td>
                            <td>wadwad</td>
                          </tr>
                        );
                      })}
                    </table>
                  ) : id === "GeneralLedgerTransactions" &&
                    localStorage.getItem("GeneralLedgerSummary") ? (
                    <table style={{ width: "100%" }}>
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
                        <th id="td-3">From</th>
                        <th
                          id="td-4"
                          style={{ width: "10%", textAlign: "center" }}
                        >
                          To
                        </th>
                        <th
                          id="td-5"
                          style={{ width: "auto", textAlign: "left" }}
                        >
                          Description
                        </th>
                      </tr>
                      {reportsData.map((element) => {
                        return (
                          <tr>
                            <td>
                              <a
                                href={
                                  "/reports/Edit/GeneralLedgerTransactions?name=General Ledger Transactions"
                                }
                              >
                                <button>Edit</button>
                              </a>
                            </td>
                            <td>
                              <a href={"/reports/view"}>
                                <button>View</button>
                              </a>
                            </td>
                            <td style={{ textAlign: "center" }}>dwad</td>
                            <td style={{ textAlign: "center" }}>adwaw</td>
                            <td>wadwad</td>
                          </tr>
                        );
                      })}
                    </table>
                  ) : (
                    id === "CustomReports" &&
                    localStorage.getItem("CustomReports") && (
                      <table style={{ width: "100%" }}>
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
                          <th id="td-3">From</th>
                          <th
                            id="td-4"
                            style={{ width: "10%", textAlign: "center" }}
                          >
                            To
                          </th>
                          <th
                            id="td-5"
                            style={{ width: "auto", textAlign: "left" }}
                          >
                            Description
                          </th>
                        </tr>
                        {reportsData.map((element) => {
                          return (
                            <tr>
                              <td>
                                <a
                                  href={
                                    "/reports/Edit/GeneralLedgerTransactions?name=General Ledger Transactions"
                                  }
                                >
                                  <button>Edit</button>
                                </a>
                              </td>
                              <td>
                                <a href={"/reports/view"}>
                                  <button>View</button>
                                </a>
                              </td>
                              <td style={{ textAlign: "center" }}>dwad</td>
                              <td style={{ textAlign: "center" }}>adwaw</td>
                              <td>wadwad</td>
                            </tr>
                          );
                        })}
                      </table>
                    )
                  )}
                </a>
              </div>
            ) : (
              <div className="body">
                <a
                  href={
                    id === "ProfitAndLossStatement"
                      ? "/reports/create/ProfitAndLossStatement?name=Profit and Loss Statement"
                      : id === "ProfitAndLossStatementActualVsBudget"
                      ? "/reports/create/ProfitAndLossStatementActualVsBudget?name=Profit and Loss Statement (Actual vs Budget)"
                      : id === "BalanceSheet"
                      ? "/reports/create/BalanceSheet?name=Balance Sheet"
                      : id === "StatementOfChangesInEquity"
                      ? "/reports/create/StatementOfChangesInEquity?name=Statement of Changes in Equity"
                      : id === "TrialBalance"
                      ? "/reports/create/TrialBalance?name=Trial Balance"
                      : id === "GeneralLedgerSummary"
                      ? "/reports/create/GeneralLedgerSummary?name=General Ledger Summary"
                      : id === "GeneralLedgerTransactions"
                      ? "/reports/create/GeneralLedgerTransactions?name=General Ledger Transactions"
                      : id === "CustomReports" &&
                        "/reports/create/CustomReports?name=Custom Reports"
                  }
                >
                  <a
                    href={
                      id === "ProfitAndLossStatementActualVsBudget"
                        ? "/reports/create/ProfitAndLossStatementActualVsBudget?name=Profit and Loss Statement (Actual vs Budget)"
                        : id === "BalanceSheet"
                        ? "/reports/create/BalanceSheet?name=Balance Sheet"
                        : id === "StatementOfChangesInEquity"
                        ? "/reports/create/StatementOfChangesInEquity?name=Statement of Changes in Equity"
                        : id === "TrialBalance"
                        ? "/reports/create/TrialBalance?name=Trial Balance"
                        : id === "GeneralLedgerSummary"
                        ? "/reports/create/GeneralLedgerSummary?name=General Ledger Summary"
                        : id === "GeneralLedgerTransactions"
                        ? "/reports/create/GeneralLedgerTransactions?name=General Ledger Transactions"
                        : id === "CustomReports" &&
                          "/reports/create/CustomReports?name=Custom Reports"
                    }
                  >
                    <button className="button">New Report</button>
                  </a>
                </a>
              </div>
            )}

            <div className="footer" style={{ height: "40px" }}>
              <span className="entries-counter-span">1</span>
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
                Batch Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
