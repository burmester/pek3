import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

import Context from '../../../context/defaultContext';
import history from '../../../utils/history';

export default class Receipt extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <div className="container espresso">
          <h1>
            Activate Digital Id
          </h1>
          <hr />
          <h3>Activation complete</h3>
          <p>The Digital Id app has been activated. You can now use it to:</p>
          <ul>
            <li>
              Login to Individual Online Banking
            </li>
            <li>
              Auhorise payments and transfers
            </li>
            <li>
              Setting up of new beneficiares
            </li>
            <li>
              Creating standing orders
            </li>
            <li>
              Updating setting and contact information
            </li>
          </ul>
          <Button onClick={e => history.push("/webb/activate")} color="link">
            Go to home page
            </Button>
          <div style={{ marginTop: "20px" }} className="footer">
          </div>
        </div>
      </Fragment >)
  }
}
