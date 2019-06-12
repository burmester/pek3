import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

import Context from '../../../context/defaultContext';
import history from '../../../utils/history';

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <div className="hero grad d-flex align-items-center justify-content-center">
          <i className="material-icons">lock_outline</i>
        </div>
        <div className="container">
          <div className="centerdComponent text-center">
            <h2>Get started now</h2>
            <p>You need to login to the internet service with your card reader with cable.</p>
          </div>
          <Button color="primary" block onClick={e => history.push('/phone/code')}>Get started</Button>
        </div>
      </Fragment>)
  }
}
