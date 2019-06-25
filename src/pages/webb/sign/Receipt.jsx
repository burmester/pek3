import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

import Context from '../../../context/defaultContext';
import history from '../../../utils/history';

export default class Start extends React.Component {
  static contextType = Context;

  componentDidMount() {
    this.context.setStatus("OK")
  }

  render() {
    return (
      <Fragment>
        <div className="container espresso">
          <h1>
            Confirmation
      </h1>
          <hr />
          <p>Your transfer has been orderd.</p>
          <Button onClick={e => history.push("/webb/transfer")} color="link">
            Make another transfer
        </Button>
          <div style={{ marginTop: "20px" }} className="footer">
          </div>
        </div>
      </Fragment >)
  }
}
