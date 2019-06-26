import React, { Fragment } from "react";
import Context from "../../../context/defaultContext";
import history from "../../../utils/history";
import { Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Spinner from "../../../components/Spinner";

export default class Start extends React.Component {
  static contextType = Context;
  intervalID = 0;

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.context.getStatus((body) => {
        if (body.status === "SIGNED") {
          history.push("/webb/sign/receipt")
        }
      })
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <Fragment>
        <div className="container espresso">
          <h1>
            Sign
          </h1>
          <hr />
          <p>Before you make this payment please check the below details carefully.</p>
          <Row>
            <Col xs={3}>From Account</Col>
            <Col xs={9}>{this.context.transferData.fromAccount}</Col>
          </Row>
          <Row>
            <Col xs={3}>Beneficiary</Col>
            <Col xs={9}>{this.context.transferData.beneficiary}</Col>
          </Row>
          <Row>
            <Col xs={3}>Amountt</Col>
            <Col xs={9}>{this.context.transferData.amount}</Col>
          </Row>
          <Row>
            <Col xs={3}>Refrence</Col>
            <Col xs={9}>{this.context.transferData.refrence}</Col>
          </Row>
          <div className="footer" style={{ marginTop: "20px" }}>
            <Button color="secondary">
              Sign
              </Button>
            <Button color="secondary" >
              Back
              </Button>
          </div>
          <Modal isOpen={true}>
            <ModalHeader>Digital ID</ModalHeader>
            <ModalBody>
              <div style={{ textAlign: "center", padding: "30px 30px 20px" }}>
                <Spinner width="50px" image={"/spinner.png"} />
                <p style={{ paddingTop: "30px" }}>
                  Open your Digital ID on your mobile or tablet.
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={e => this.context.setStatus("OK", () => history.goBack())}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </Fragment>
    );
  }
}
