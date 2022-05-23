import React, { useState, useEffect } from 'react'
import PageWrapper from '../Components/PageWrapper'
import { useParams, useLocation } from "react-router-dom";

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function ShowReports() {
    const [NameQuery, setNameQuery] = useState()
    const { id } = useParams()
    let query = useQuery();
    useEffect(() => {
        setNameQuery(query.get("name"))
    })
     return (
      <PageWrapper>
        <div className="body-content">
            <div className="CreateNewJournalEntry-card" style={{marginBottom: 0}}>
                <div className="header-2"><a href="/reports">Reports</a> <i class="fa-solid fa-caret-right"></i> 
                <p>{NameQuery}</p></div>
            </div>
            <div className='body-content'>
            <div className="JournalEntries-card" style={{width: "900px", marginBottom: "100px"}}>
            <div className="header">
                <p>{NameQuery}</p>
                <a href="/reports/">
                <button className="button">New Report</button>
                </a> 
            </div>
            <div className="body">
                <a href={
                    id === "ProfitAndLossStatement" 
                    ?
                    "/reports/create/ProfitAndLossStatement?name=Profit and Loss Statement"  
                    : id === "ProfitAndLossStatementActualVsBudget" 
                    ?
                    "/reports/create/ProfitAndLossStatementActualVsBudget?name=Profit and Loss Statement (Actual vs Budget)"  
                    : id === "BalanceSheet" 
                    ?
                    "/reports/create/BalanceSheet?name=Balance Sheet"
                    : id === "StatementOfChangesInEquity" 
                    ?
                    "/reports/create/StatementOfChangesInEquity?name=Statement of Changes in Equity"
                    : id === "TrialBalance"
                    ?
                    "/reports/create/TrialBalance?name=Trial Balance"
                    : id === "GeneralLedgerSummary"
                    ?
                    "/reports/create/GeneralLedgerSummary?name=General Ledger Summary"
                    : id === "GeneralLedgerTransactions" 
                    ?
                    "/reports/create/GeneralLedgerTransactions?name=General Ledger Transactions"
                    : id === "CustomReports"
                    &&
                    "/reports/create/CustomReports?name=Custom Reports"
                }>
                <button className="button">New Report</button>
                </a>
            </div>
            <div className="footer" style={{height: "15px"}}>
            </div>
            </div>
            </div>
        </div>
      </PageWrapper>
    )
}
