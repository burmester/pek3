import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';

import Context from '../context/defaultContext';

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <Row>
          <Col>
            <h2>Webb</h2>
          </Col>
        </Row>
      </Fragment>)
  }
}
