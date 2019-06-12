import React, { Component, Fragment } from 'react';
import { Button, Col, Row } from 'reactstrap';

import history from '../utils/history';

import Context from '../context/defaultContext';

class Header extends Component {
  static contextType = Context;

  render() {
    const data = this.context.data;
    return (
      <Fragment>
        <Row>
          <Col>
          <Button onClick={e => history.push('/')}>Handelsbanken</Button>
          </Col>
        </Row>
      </Fragment>
    )
  }
}


export default Header;