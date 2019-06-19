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
          <Col >
            <Button onClick={e => { history.push("/phone");}}>Phone</Button>
            <Button onClick={e => history.push("/webb/activate")}>Webb</Button>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
