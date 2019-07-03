import React, { Fragment } from "react";
import { Col, Form, FormGroup, Input, Label, Button } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Code extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      fromAccount: undefined,
      beneficiary: undefined,
      amount: undefined,
      refrence: undefined,
    };
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.context.setTransferData(this.state, () =>
      history.push("/webb/review")
    )
  }

  render() {
    return (
      <Fragment>
        <div className="container espresso">
          <h1>
            Make a payment
          </h1>
          <hr />
          <Form onSubmit={this.onSubmit}>
            <FormGroup row>
              <Label for="fromAccount" xs={4}>From account:</Label>
              <Col xs={8}>
                <Input type="select" name="select" id="fromAccount"
                  onChange={e => this.setState({ fromAccount: e.target.value })}
                >
                  <option>Select a account</option>
                  <option>1111111 * Current Account * GBP 5,323.83 </option>
                  <option>2222222 * Current Account * GBP 10,000.00 </option>
                  <option>3333333 * Current Account * GBP 1,000.00 </option>
                </Input>
              </Col>
            </FormGroup>
            <div className="grey">
              Choose a beneficary from the list. Pleace check the beneficiary details carfully. If incorrect details are entered it may not be possible to recover the funds.
            </div>
            <FormGroup row>
              <Label for="beneficiary" xs={4}>Beneficiary:</Label>
              <Col xs={8}>
                <Input type="select" name="select" id="beneficiary"
                  onChange={e => this.setState({ beneficiary: e.target.value })}
                >
                  <option>Select a beneficary</option>
                  <option>Brian * 20-00-00 * 12345678 * bd </option>
                  <option>Alex * 21-00-00 * 87654321 * bd </option>
                </Input>
              </Col>
            </FormGroup>
            <hr />
            <FormGroup row>
              <Label for="amount" xs={4}>Amount:</Label>
              <Col xs={8}>
                <Input
                  autoComplete="false"
                  id="amount"
                  type="number"
                  onChange={e => this.setState({ amount: e.target.value })}
                  pattern="[0-9]*"
                  inputMode="numeric"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="refrence" xs={4}>Refrence:</Label>
              <Col xs={8}>
                <Input
                  autoComplete="false"
                  id="refrence"
                  type="text"
                  onChange={e => this.setState({ refrence: e.target.value })}
                />
              </Col>
            </FormGroup>
            <div className="footer">
              <Button type="submit" color="secondary">
                OK
              </Button>
            </div>

          </Form>
        </div>
      </Fragment>
    );
  }
}
