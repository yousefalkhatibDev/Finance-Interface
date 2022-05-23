import React, { useState, useEffect } from 'react'
import PageWrapper from '../Components/PageWrapper'
import { useParams, useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function CreateReport() {
  const [NameQuery, setNameQuery] = useState()
    const { id } = useParams()
    let query = useQuery();
    useEffect(() => {
        setNameQuery(query.get("name"))
    })
  return (
    <PageWrapper>
      <div className='CreateNewJournalEntry-container'>
      <div className="body-content">
          <div className="CreateNewJournalEntry-card" style={{marginBottom: "-35px"}}>
              <div className="header-2">
                <a href="/reports" >Reports</a>
                <i class="fa-solid fa-caret-right" style={{marginRight: "0px"}}></i> 
                <a href={`/reports/show/${id}?name=${NameQuery}`}>{NameQuery}</a>
                <i class="fa-solid fa-caret-right"></i> 
                <p>{NameQuery} - Create</p></div>
          </div>
      </div>
      <div className="body-content">
                <div className="CreateNewJournalEntry-card">
                    <div className="header"><p>{NameQuery}</p></div>
                    <div className="body">
                      { 
                      id === "ProfitAndLossStatement"
                      ?
                      <>
                        <div className="input-group-row">
                            <div className="input-container">
                                <label for="title-input">Title</label>
                                <input type="text" id="title-input" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "300px"}}/>
                            </div>
                        </div>
                        <div className="input-group-column">
                            <label forHtml="text-input-1">Description</label>
                            <input type="text" id="text-input-1" name="text-input-1" placeholder='Optional' style={{fontSize: "13px", padding: " 7px", width: "600px"}}/>
                        </div>
                        <div className="input-group-row">
                            <div className="input-container">
                                <label>From</label>
                                <input type="date" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "150px", marginRight: "-5px"}}/>
                            </div>
                            <div className="input-container">
                                <label>To</label>
                                <input type="date" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "150px", marginRight: "5px"}}/>
                            </div>
                            <div className="input-container">
                                <label>Column name</label>
                                <input type="text" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "200px"}}/>
                            </div>
                        </div>
                        <div className="input-group-row" style={{marginTop: "-10px"}}>
                            <div className="input-container">
                                <select>
                                  <option disabled selected>Add comparative column</option>
                                  <option>Add comparative column (5×)</option>
                                  <option>Add comparative column (10×)</option>
                                  <option>Add comparative column (20×)</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-group-column">
                            <div className="input-container">
                                <label>Accounting method</label>
                                <select style={{fontSize: "12px", padding: "6px 10px", width: "150px"}}>
                                  <option selected>Add comparative column</option>
                                  <option>Add comparative column (5×)</option>
                                  <option>Add comparative column (10×)</option>
                                  <option>Add comparative column (20×)</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-group-row" >
                            <div className="input-container">
                                <label>Rounding</label>
                                <select style={{fontSize: "12px", padding: "6px 10px", width: "auto"}}>
                                  <option selected>Off</option>
                                  <option>On</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-group-column">
                            <label>Groups to collapse</label>
                            <input type="text" name="text-input-1" style={{fontSize: "13px", padding: " 7px", width: "300px"}}/>
                        </div>
                        <div className="input-group-column">
                            <label>Footer</label>
                            <textarea type="text-area" name="text-input-1" style={{fontSize: "13px", padding: " 7px", width: "600px", height: "200px"}}/>
                        </div>
                        <div className="input-group-row" >
                            <input type="checkbox" className='checkbox'/>
                            <label className="checkbox-label">Show account codes</label>
                        </div>
                        <div className="input-group-row">
                            <input type="checkbox" className='checkbox'/>
                            <label className="checkbox-label">Exclude zero balances</label>
                        </div>
                        <div className="footer" style={{width: "100%"}}>
                            <button className="button" style={{marginBottom: "0px"}}>Create</button>
                        </div>
                    </>
                    : id === "ProfitAndLossStatementActualVsBudget" 
                    ?
                    <>
                      <div className="input-group-row">
                          <div className="input-container">
                              <label for="title-input">Title</label>
                              <input type="text" id="title-input" name="title-input" placeholder='Profit and Loss Statement (Actual vs Budget)' style={{fontSize: "13px", padding: " 7px", width: "300px"}}/>
                          </div>
                      </div>
                      <div className="input-group-row">
                            <div className="input-container">
                                <label>From</label>
                                <input type="date" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "150px", marginRight: "-5px"}}/>
                            </div>
                            <div className="input-container">
                                <label>To</label>
                                <input type="date" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "150px", marginRight: "5px"}}/>
                            </div>
                        </div>
                      <div className="input-group-row" >
                          <div className="input-container">
                              <label>Accounting method</label>
                              <select style={{fontSize: "12px", padding: "6px 10px", width: "auto"}}>
                                <option selected>Accrual basis</option>
                                <option>Cash basis</option>
                              </select>
                          </div>
                      </div>
                      <div className="input-group-row">
                        <div className="input-container">
                            <label>Account</label>
                            <select name="Suspense" className="select" >
                                <option value="" disabled selected>Suspense</option>
                                <option value="Accounting fees">Accounting fees</option>
                                <option value="Advertising and promotion">Advertising and promotion</option>
                                <option value="Bank charges">Bank charges</option>
                                <option value="Capital gains on investments">Capital gains on investments</option>
                                <option value="Computer equipment">Computer equipment</option>
                                <option value="Donations">Donations</option>
                                <option value="Electricity">Electricity</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Interest recived">Interest recived</option>
                                <option value="Interest recived">Foreign exchange gains (losses)</option>
                                <option value="Legal fees">Legal fees</option>
                                <option value="Motor vehicle expenses">Motor vehicle expenses</option>
                                <option value="Printing and stationary">Printing and stationary</option>
                                <option value="Repairs and maintenance">Repairs and maintenance</option>
                                <option value="Retained earnings">Rounding expense</option>
                                <option value="Sales">Sales</option>
                                <option value="Telephone">Telephone</option>
                            </select>
                        </div>
                        <div className="input-group-column">
                            <label style={{textAlign: "center"}}>Amount</label>
                            <input type="text" name="text-input-1"  placeholder="0" style={{fontSize: "13px", padding: " 2.5px", width: "180px", textAlign: "end"}}/>
                        </div>
                      </div>
                      <div className="input-group-column" style={{marginTop: "-30px"}}>
                          <div className="input-container">
                              <select style={{fontSize: "12px", padding: "6px 10px", width: "90px"}}>
                                <option selected>Add line</option>
                                <option>Add line (5×)</option>
                                <option>Add line (10×)</option>
                                <option>Add line (20×)</option>
                              </select>
                          </div>
                      </div>
                      <div className="input-group-column">
                          <label>Footer</label>
                          <textarea type="text-area" name="text-input-1" style={{fontSize: "13px", padding: " 7px", width: "600px", height: "200px"}}/>
                      </div>
                      <div className="input-group-row" >
                          <input type="checkbox" className='checkbox'/>
                          <label className="checkbox-label">Exclude zero balances</label>
                      </div>
                      <div className="input-group-row">
                          <input type="checkbox" className='checkbox'/>
                          <label className="checkbox-label">Round decimals</label>
                      </div>
                      <div className="footer" style={{width: "100%"}}>
                          <button className="button" style={{marginBottom: "0px"}}>Create</button>
                      </div>
                    </>
                    : id === "BalanceSheet"
                    ?
                    <>
                      <div className="input-group-row">
                          <div className="input-container">
                              <label for="title-input">Title</label>
                              <input type="text" id="title-input" name="title-input" placeholder='Balance Sheet' style={{fontSize: "13px", padding: " 7px", width: "300px"}}/>
                          </div>
                      </div>
                      <div className="input-group-column">
                          <label forHtml="text-input-1">Description</label>
                          <input type="text" id="text-input-1" name="text-input-1" placeholder='Optional' style={{fontSize: "13px", padding: " 7px", width: "600px"}}/>
                      </div>
                      <div className="input-group-row">
                        <div className="input-container">
                            <label>Date</label>
                            <input type="date" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "150px", marginRight: "-5px"}}/>
                        </div>
                        <div className="input-container">
                            <label>Column name</label>
                            <input type="text" name="title-input" placeholder='Optional' style={{fontSize: "13px", padding: " 7px", width: "200px"}}/>
                        </div>
                    </div>
                    <div className="input-group-row" style={{marginTop: "-10px"}}>
                        <div className="input-container">
                            <select>
                              <option disabled selected>Add comparative column</option>
                              <option>Add comparative column (5×)</option>
                              <option>Add comparative column (10×)</option>
                              <option>Add comparative column (20×)</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group-row" >
                        <div className="input-container">
                            <label>Accounting method</label>
                            <select style={{fontSize: "12px", padding: "6px 10px", width: "auto"}}>
                              <option selected>Accrual basis</option>
                              <option>Cash basis</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group-row" >
                        <div className="input-container">
                            <label>Rounding</label>
                            <select style={{fontSize: "12px", padding: "6px 10px", width: "auto"}}>
                              <option selected>Off</option>
                              <option>On</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group-row" >
                        <div className="input-container">
                            <label>Layout</label>
                            <select style={{fontSize: "12px", padding: "6px 10px", width: "200px"}}>
                              <option selected>Assets - Liabilities = Equity</option>
                              <option>Assets = Liabilities + Equity</option>
                              <option>Assets = Equity + Liabilities</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group-column">
                        <label>Groups to collapse</label>
                        <input type="text" name="text-input-1" style={{fontSize: "13px", padding: " 7px", width: "300px"}}/>
                    </div>
                    <div className="input-group-column">
                        <label>Footer</label>
                        <textarea type="text-area" name="text-input-1" style={{fontSize: "13px", padding: " 7px", width: "600px", height: "200px"}}/>
                    </div>
                    <div className="input-group-row" >
                        <input type="checkbox" className='checkbox'/>
                        <label className="checkbox-label">Show account codes</label>
                    </div>
                    <div className="input-group-row">
                        <input type="checkbox" className='checkbox'/>
                        <label className="checkbox-label">Exclude zero balances</label>
                    </div>
                    <div className="footer" style={{width: "100%"}}>
                        <button className="button" style={{marginBottom: "0px"}}>Create</button>
                    </div>
                    </>
                    : id === "StatementOfChangesInEquity"
                    ?
                    <>
                      <div className="input-group-row">
                          <div className="input-container">
                              <label for="title-input">Title</label>
                              <input type="text" id="title-input" name="title-input" placeholder='Statement of Changes in Equity' style={{fontSize: "13px", padding: " 7px", width: "300px"}}/>
                          </div>
                      </div>
                      <div className="input-group-column">
                          <label forHtml="text-input-1">Description</label>
                          <input type="text" id="text-input-1" name="text-input-1" placeholder='Optional' style={{fontSize: "13px", padding: " 7px", width: "600px"}}/>
                      </div>
                      <div className="input-group-row" >
                          <div className="input-container">
                              <label>Accounting method</label>
                              <select style={{fontSize: "12px", padding: "6px 10px", width: "auto"}}>
                                <option selected>Accrual basis</option>
                                <option>Cash basis</option>
                              </select>
                          </div>
                      </div>
                      <div className="input-group-row" >
                        <div className="input-container">
                            <label>Rounding</label>
                            <select style={{fontSize: "12px", padding: "6px 10px", width: "auto"}}>
                              <option selected>Off</option>
                              <option>On</option>
                            </select>
                        </div>
                      </div>
                      <div className="input-group-row">
                          <div className="input-container">
                              <label>From</label>
                              <input type="date" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "150px", marginRight: "-5px"}}/>
                          </div>
                          <div className="input-container">
                              <label>To</label>
                              <input type="date" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "150px", marginRight: "5px"}}/>
                          </div>
                          <div className="input-container">
                              <label>Column name</label>
                              <input type="text" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "200px"}}/>
                          </div>
                      </div>
                      <div className="input-group-row" style={{marginTop: "-10px"}}>
                          <div className="input-container">
                              <select>
                                <option disabled selected>Add comparative column</option>
                                <option>Add comparative column (5×)</option>
                                <option>Add comparative column (10×)</option>
                                <option>Add comparative column (20×)</option>
                              </select>
                          </div>
                      </div>
                      <div className="input-group-row" >
                        <input type="checkbox" className='checkbox'/>
                        <label className="checkbox-label">Exclude zero balances</label>
                      </div>
                      <div className="input-group-column">
                        <label>Footer</label>
                        <textarea type="text-area" name="text-input-1" style={{fontSize: "13px", padding: " 7px", width: "300px", height: "100px"}}/>
                      </div>
                      <div className="footer" style={{width: "100%"}}>
                        <button className="button" style={{marginBottom: "0px"}}>Create</button>
                      </div>
                    </>
                    : id === "TrialBalance"
                    ?
                    <>
                    <div className="input-group-row">
                        <div className="input-container">
                            <label for="title-input">Title</label>
                            <input type="text" id="title-input" name="title-input" placeholder='Trial Balance' style={{fontSize: "13px", padding: " 7px", width: "300px"}}/>
                        </div>
                    </div>
                    <div className="input-group-column">
                        <label forHtml="text-input-1">Description</label>
                        <input type="text" id="text-input-1" name="text-input-1" placeholder='Optional' style={{fontSize: "13px", padding: " 7px", width: "300px"}}/>
                    </div>
                    <div className="input-group-row" >
                        <div className="input-container">
                            <label>Accounting method</label>
                            <select style={{fontSize: "12px", padding: "6px 10px", width: "auto"}}>
                              <option selected>Accrual basis</option>
                              <option>Cash basis</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group-row">
                          <div className="input-container">
                              <label>From</label>
                              <input type="date" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "150px", marginRight: "-5px"}}/>
                          </div>
                          <div className="input-container">
                              <label>To</label>
                              <input type="date" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "150px", marginRight: "5px"}}/>
                          </div>
                          <div className="input-container">
                              <label>Column name</label>
                              <input type="text" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "200px"}}/>
                          </div>
                      </div>
                      <div className="input-group-row" style={{marginTop: "-10px"}}>
                          <div className="input-container">
                              <select>
                                <option disabled selected>Add comparative column</option>
                                <option>Add comparative column (5×)</option>
                                <option>Add comparative column (10×)</option>
                                <option>Add comparative column (20×)</option>
                              </select>
                          </div>
                      </div>
                      <div className="input-group-row" >
                        <input type="checkbox" className='checkbox'/>
                        <label className="checkbox-label">Show Account Codes</label>
                      </div>
                      <div className="input-group-row">
                        <input type="checkbox" className='checkbox'/>
                        <label className="checkbox-label">Exclude zero balances</label>
                      </div>
                      <div className="footer" style={{width: "100%"}}>
                          <button className="button" style={{marginBottom: "0px"}}>Create</button>
                      </div>
                    </>
                    : id === "GeneralLedgerSummary"
                    ?
                    <>
                      <div className="input-group-column">
                          <label forHtml="text-input-1">Description</label>
                          <input type="text" id="text-input-1" name="text-input-1" placeholder='Optional' style={{fontSize: "13px", padding: " 7px", width: "300px"}}/>
                      </div>
                      <div className="input-group-row">
                      <div className="input-container">
                          <label>From</label>
                          <input type="date" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "150px", marginRight: "-5px"}}/>
                      </div>
                      </div>
                      <div className="input-group-row">
                      <div className="input-container">
                          <label>To</label>
                          <input type="date" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "150px", marginRight: "5px"}}/>
                      </div>
                      </div>
                      <div className="input-group-row" >
                        <input type="checkbox" className='checkbox'/>
                        <label className="checkbox-label">Show Account Codes</label>
                      </div>
                      <div className="input-group-row">
                        <input type="checkbox" className='checkbox'/>
                        <label className="checkbox-label">Exclude zero balances</label>
                      </div>
                      <div className="footer" style={{width: "100%"}}>
                          <button className="button" style={{marginBottom: "0px"}}>Create</button>
                      </div>
                    </>
                    : id === "GeneralLedgerTransactions"
                    ?
                    <>
                    <div className="input-group-column">
                      <label forHtml="text-input-1">Description</label>
                      <input type="text" id="text-input-1" name="text-input-1" placeholder='' style={{fontSize: "13px", padding: " 7px", width: "600px"}}/>
                    </div>
                    <div className="input-group-row">
                    <div className="input-container">
                        <label>From</label>
                        <input type="date" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "150px", marginRight: "-5px"}}/>
                    </div>
                    <div className="input-container">
                        <label>To</label>
                        <input type="date" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "150px", marginRight: "5px"}}/>
                    </div>
                    </div>
                    <div className="input-group-row">
                      <div className="input-container">
                          <label>Account</label>
                          <select name="Suspense" className="select" >
                              <option value="" disabled selected>Suspense</option>
                              <option value="Accounting fees">Accounting fees</option>
                              <option value="Advertising and promotion">Advertising and promotion</option>
                              <option value="Bank charges">Bank charges</option>
                              <option value="Capital gains on investments">Capital gains on investments</option>
                              <option value="Computer equipment">Computer equipment</option>
                              <option value="Donations">Donations</option>
                              <option value="Electricity">Electricity</option>
                              <option value="Entertainment">Entertainment</option>
                              <option value="Interest recived">Interest recived</option>
                              <option value="Legal fees">Legal fees</option>
                              <option value="Motor vehicle expenses">Motor vehicle expenses</option>
                              <option value="Printing and stationary">Printing and stationary</option>
                              <option value="Repairs and maintenance">Repairs and maintenance</option>
                              <option value="Retained earnings">Retained earnings</option>
                              <option value="Sales">Sales</option>
                              <option value="Telephone">Telephone</option>
                          </select>
                      </div>
                    </div>
                    <div className="footer" style={{width: "100%"}}>
                        <button className="button" style={{marginBottom: "0px"}}>Create</button>
                    </div>
                    </>
                    : id === "CustomReports"
                    &&
                    <>
                      <div className="input-group-row">
                          <div className="input-container">
                              <label for="title-input">Name</label>
                              <input type="text" id="title-input" name="title-input" placeholder='Custom Reports' style={{fontSize: "13px", padding: " 7px", width: "300px"}}/>
                          </div>
                      </div>
                      <div className="input-group-column">
                          <label forHtml="text-input-1">Description</label>
                          <input type="text" id="text-input-1" name="text-input-1" placeholder='Optional' style={{fontSize: "13px", padding: " 7px", width: "600px"}}/>
                      </div>
                      <div className="input-group-row">
                            <div className="input-container">
                                <label>From</label>
                                <input type="date" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "150px", marginRight: "-5px"}}/>
                            </div>
                            <div className="input-container">
                                <label>To</label>
                                <input type="date" name="title-input" placeholder='Profit and Loss Statement' style={{fontSize: "13px", padding: " 7px", width: "150px", marginRight: "5px"}}/>
                            </div>
                            <div className="input-container">
                                <label>Accounting method</label>
                                <select style={{padding: "6.6px 0px", width: "auto", height: "auto"}}>
                                  <option selected>Accrual basis</option>
                                  <option>Cash basis</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-group-column" style={{marginTop: "-10px"}}>
                          <div className="input-container">
                              <select style={{fontSize: "12px", padding: "6px 10px", width: "90px"}}>
                                <option selected>Add line</option>
                                <option>Add line (5×)</option>
                                <option>Add line (10×)</option>
                                <option>Add line (20×)</option>
                              </select>
                          </div>
                        </div>
                        <div className="input-group-row" >
                          <input type="checkbox" className='checkbox'/>
                          <label className="checkbox-label">Where...</label>
                        </div>
                        <div className="input-group-row" >
                          <input type="checkbox" className='checkbox'/>
                          <label className="checkbox-label">Order by...</label>
                        </div>
                        <div className="input-group-row" >
                          <input type="checkbox" className='checkbox'/>
                          <label className="checkbox-label">Group by...</label>
                        </div>
                        <div className="footer" style={{width: "100%"}}>
                          <button className="button" style={{marginBottom: "0px"}}>Create</button>
                        </div>
                    </>
                    }
                </div>
            </div>
            </div>
      </div>
    </PageWrapper>
  )
}
