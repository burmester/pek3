import React, { Fragment } from "react";
import { Container, Col, Row, Button } from "reactstrap";

import history from "../utils/history";

import Context from "../context/defaultContext";

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Container style={{paddingTop: "30px"}}>
        <Row>
          <Col >
            <Button block onClick={e => { history.push("/phone"); }}>Phone</Button>
            <Button block onClick={e => history.push("/webb")}>Webb</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
