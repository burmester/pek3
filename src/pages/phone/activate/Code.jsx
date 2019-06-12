import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

import Context from '../../../context/defaultContext';
import history from '../../../utils/history';

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    const token = this.context.data.token;

    return (
      <Fragment>
        <div className="hero d-flex align-items-center justify-content-center">
          <i className="material-icons"
            style={{
              fontSize: "50px",
              color: "#005fa5"
            }}
          >lock_outline</i>
        </div>
        <div className="container">
          <div className="centerdComponent text-center">
            <h2>Activation code</h2>
            <p>
              Enter this activation code in the internet service to start the activation.
            </p>
          </div>
          <div className="centerdComponent text-center">
            <div style={{
              fontSize: "40px",
              fontWeight:"700"
            }}>
              {token.substring(0, 3)} {token.substring(3, 7)}
            </div>
          </div>
          <div className="centerdComponent text-center">
            <p>
              Then wait until the internet serice ask you to open the QR scanner.
            </p>
          </div>
          <Button color="primary" block onClick={e => history.push('/phone/qr')}>Open QR scannner</Button>
        </div>
      </Fragment>)
  }
}
