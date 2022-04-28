import React from "react";
import { Button, Modal } from "react-bootstrap";

// components
import JournalEntrie from "../Components/JournalEntrie";

// styles
import "./../style/custom.css";

class JournalEntries extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    this.modal = this.modal.bind(this);
  }

  modal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="body-content">
        <div className="container-r">
          <div className="header" style={{ display: "flex" }}>
            <p style={{ fontSize: "20px" }}>Journal Entries</p>
            <Button variant="success" onClick={this.modal}>
              New Journal Entries
            </Button>
            <input className="form-control search-box" />
            <Button variant="primary">Search</Button>
          </div>

          <hr />

          <JournalEntrie />
          <JournalEntrie />
          <JournalEntrie />
          <p>number of journal 3</p>
        </div>

        <Modal show={this.state.show} onHide={this.modal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="date" class="form-control" />
            <input type="text" class="form-control" />
            <input id="dd" type="number" class="form-control" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.modal}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default JournalEntries;
