import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

import Context from '../../../context/defaultContext';
import history from '../../../utils/history';

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="centerdComponent text-center">
            <h2>Confirmation</h2>
            <p>
              You have now sign:
            </p>
          </div>
          <Button color="primary" block onClick={e => history.push('/webb/start')}>OK</Button>
        </div>
      </Fragment>)
  }
}
