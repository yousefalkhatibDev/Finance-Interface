import React, { Component } from 'react'
import PageWrapper from "../Components/PageWrapper";

export default class Reports extends Component {
  render() {
    return (
      <PageWrapper>
          <div className='Reports-container'>
            <div className="body-content">
                <div className="CreateNewJournalEntry-card" id="remove-margin-CreateNewJournalEntry">
                    <div className="header-2"><p style={{marginLeft: "15px", fontSize: "15px", fontWeight: 600, color: "rgba(150, 150 , 150, 0.540)"}}>Reports</p></div>
                </div>
            </div>
            <div className='Reports-card'>
                <div className="body-content">
                    <div className="JournalEntries-card">
                        <div className="header">
                            <p style={{marginLeft: "15px", fontSize: "15px", fontWeight: 600, color: "rgba(150, 150 , 150, 0.540)"}}>Financial statements</p>
                        </div>
                        <div className="body" style={{height: "auto"}}>
                            <a href="/reports/show/ProfitAndLossStatement?name=Profit and Loss Statement">Profit and Loss Statement</a>
                            <a href="/reports/show/ProfitAndLossStatementActualVsBudget?name=Profit and Loss Statement (Actual vs Budget)">Profit and Loss Statement (Actual vs Budget)</a>
                            <a href="/reports/show/BalanceSheet?name=Balance Sheet">Balance Sheet</a>
                            <a href="/reports/show/StatementOfChangesInEquity?name=Statement of Changes in Equity">Statement of Changes in Equity</a>
                        </div>
                    </div>
                   
                </div>
                <div id="div-container">
                    <div className="body-content">
                        <div className="JournalEntries-card">
                            <div className="header">
                                <p style={{marginLeft: "15px", fontSize: "15px", fontWeight: 600, color: "rgba(150, 150 , 150, 0.540)"}}>General Ledger</p>
                            </div>
                                <div className="body" style={{height: "auto"}}>
                                    <a href="/reports/show/TrialBalance?name=Trial Balance">Trial Balance</a>
                                    <a href="/reports/show/GeneralLedgerSummary?name=General Ledger Summary">General Ledger Summary</a>
                                    <a href="/reports/show/GeneralLedgerTransactions?name=General Ledger Transactions">General Ledger Transactions</a>
                                </div>
                        </div>
                    </div>
                    <div className="body-content">
                        <div className="JournalEntries-card">
                            <div className="header">
                                <p style={{marginLeft: "15px", fontSize: "15px", fontWeight: 600, color: "rgba(150, 150 , 150, 0.540)"}}>General Ledger</p>
                            </div>
                                <div className="body" style={{height: "auto"}}>
                                    <a href="/reports/show/CustomReports?name=Custom Reports">Custom Reports</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </PageWrapper>
    )
  }
}
