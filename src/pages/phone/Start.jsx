import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

import Context from '../../context/defaultContext';
import history from '../../utils/history';

import Header from "../../components/phone/Header";

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    return (
      <Fragment>
        <Header showMenu={true} />
        <div className="hero d-flex align-items-center justify-content-center">
          <i className="material-icons"
            style={{
              fontSize: "50px",
              color: "#005fa5",
            }}
          >lock_outline</i>
        </div>
        <div className="container">
          <div className="centerdComponent text-center">
            <h2>Ready to use</h2>
            <p>
              Start a login or a signature on a Webpage or in a another app.
            </p>
          </div>
          <Button color="secondary" block onClick={() => history.push('/phone/login')} >Scan QR</Button>
          <Button color="secondary" block >Check for signature</Button>
        </div>
      </Fragment>)
  }
}
