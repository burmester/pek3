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
            Activate Digital ID
          </h1>
          <hr />
          <h3>Activation complete</h3>
          <p>The Digital ID app has been activated.</p>
          <Button onClick={e => history.push("/webb")} color="link">
            Go to home page
            </Button>
          <div style={{ marginTop: "20px" }} className="footer">
          </div>
        </div>
      </Fragment >)
  }
}
