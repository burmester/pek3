import React, { Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  getDate = () => {
    const current_datetime = new Date()
    const spec_date = current_datetime.getDate() + "-" + current_datetime.getMonth() + 1 + "-" + current_datetime.getFullYear()
    return spec_date
  }

  render() {
    return (
      <Fragment>
        <div className="container espresso">
          <h1>
            Activate Digital Id
      </h1>
          <hr />
          <h3>Sign</h3>
          <p>
            Mats Matsson would like to activate my Handelsbanken Digital Id app.
          </p>
          <p>
            Personal ID: 720302
          </p>
          <p>
            Date: {this.getDate()}
          </p>
          <div className="footer" style={{ marginTop: "40px" }}>
            <Button onClick={e => history.goBack()} color="secondary">
              Back
          </Button>
            <Button onClick={e => this.setState({ showModal: true })}
              color="secondary">
              Sign
          </Button>
          </div>
        </div>
        <Modal isOpen={this.state.showModal}>
          <ModalHeader>Digital Id</ModalHeader>
          <ModalBody>
            <div style={{ textAlign: "center", padding: "30px 30px 20px" }}>
              <p style={{ paddingTop: "30px" }}>Sign using your card reader with cable.</p>
              <Button onClick={e => {
                this.context.signOK(() => history.push("/webb/activate/qr"))
              }}
                style={{ marginTop: "20px" }}
                color="primary">
                Sign
          </Button>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={e => this.setState({ showModal: false })}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Fragment >
    );
  }
}
