import React, { Fragment } from "react";
import { Col, Row, Button } from "reactstrap";

import history from "../utils/history";

import Context from "../context/defaultContext";

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <Row>
          <Col>
            <Button
              onClick={e => {
                if (
                  this.context.data &&
                  this.context.data.token &&
                  this.context.data.passcode
                ) {
                  history.push("/phone");
                } else {
                  history.push("/phone/activate");
                }
              }}
            >
              Phone
            </Button>
            <Button onClick={e => history.push("/webb/activate")}>Webb</Button>

            <br />
            <Button onClick={async (e) => {
              const status = this.context.getStatus();
              console.log(status);
            }}>getStatus</Button>
            <Button onClick={e => this.context.setStatus("Test", () => { console.log(this.context.data) })}>setStatus</Button>
            <Button onClick={e => this.context.deleteToken(() => { console.log('delete') })}>deleteToken</Button>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
