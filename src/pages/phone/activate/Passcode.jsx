import React, { Fragment } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

import Context from '../../../context/defaultContext';
import history from '../../../utils/history';

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <div className="hero d-flex align-items-center justify-content-center">
          <i className="material-icons">lock_outline</i>
        </div>
        <div className="container">
          <div className="centerdComponent text-center">
            <h2>Schoose your passcode</h2>
            <p>
              Choose your personal passcode (6 digits)
            </p>
          </div>
          <Form>
            <FormGroup>
              <Input type="password" placeholder="Passcode" />
            </FormGroup>
            <FormGroup>
              <Input type="password" placeholder="Repeat passcode" />
            </FormGroup>
          </Form>
          <Button color="primary" block onClick={e => history.push('/phone/receipt')}>Continue</Button>
        </div>
      </Fragment>)
  }
}
