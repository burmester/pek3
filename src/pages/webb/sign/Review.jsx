import React, { Fragment } from "react";
import { Col, Row, Button } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Code extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <div className="container espresso">
          <h1>
            Approve
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
            <Col xs={3}>Amount</Col>
            <Col xs={9}>{this.context.transferData.amount}</Col>
          </Row>
          <Row>
            <Col xs={3}>Refrence</Col>
            <Col xs={9}>{this.context.transferData.refrence}</Col>
          </Row>
            <div className="footer" style={{marginTop:"20px"}}>
              <Button color="secondary" onClick={e => this.context.setStatus("SIGN", () => history.push("/webb/sign"))}>
                Approve
              </Button>
              <Button color="secondary" onClick={e => history.goBack()}>
                Back
              </Button>
            </div>
        </div>
      </Fragment>
    );
  }
}
