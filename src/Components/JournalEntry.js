import React from "react";
import { Button } from "react-bootstrap";

class JournalEntries extends React.Component {
  render() {
    return (
      <>
        <div className="JournalEntrie">
          <Button id="id" variant="secondary">
            Edit
          </Button>
          <Button id="view" variant="secondary">
            View
          </Button>
          <p id="Date">10/10/2020</p>
          <p id="Narration">sales</p>
          <p id="Debit">1000</p>
          <p id="Credit">1000</p>
          <p id="Status">Balanced</p>
        </div>
      </>
    );
  }
}

export default JournalEntries;
