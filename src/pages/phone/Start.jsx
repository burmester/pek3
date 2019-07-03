import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

import Context from '../../context/defaultContext';
import history from '../../utils/history';

import Header from "../../components/phone/Header";

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    if (this.context.data && this.context.data.status === "OK") {
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
                Start a login or a signature on Online Banking or in a another app.
              </p>
            </div>
            <Button color="secondary" block onClick={() => history.push('/phone/login')} >Log in</Button>
            <Button color="secondary" block onClick={() => history.push('/phone/checkSign')}>Sign</Button>
          </div>
        </Fragment>)
    }
    return (
      <Fragment>
        <Header showMenu={true} />
        <div className="hero grad d-flex align-items-center justify-content-center">
          <i className="material-icons">lock_outline</i>
        </div>
        <div className="container">
          <div className="centerdComponent text-center">
            <h2>Get started now</h2>
            <p>You need to login to the Individual Online Banking with your card reader with cable.</p>
          </div>
          <Button color="primary" block onClick={e => history.push('/phone/code')}>Start activation</Button>
        </div>
      </Fragment>)
  }
}
