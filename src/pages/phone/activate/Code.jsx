import React, { Fragment } from "react";
import { Button } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

import Header from "../../../components/phone/Header";

export default class Code extends React.Component {
  static contextType = Context;

  render() {
    const token = this.context.data.token;

    return (
      <Fragment>
        <Header showMenu={false} onCancel={() => history.push("/phone")}/>
        <div className="hero d-flex align-items-center justify-content-center">
          <i
            className="material-icons"
            style={{
              fontSize: "50px",
              color: "#005fa5"
            }}
          >
            lock_outline
          </i>
        </div>
        <div className="container">
          <div className="centerdComponent text-center">
            <h2>Activation code</h2>
            <p>
              Enter this activation code in Online Banking to start the
              activation.
            </p>
          </div>
          <div className="centerdComponent text-center">
            <div
              style={{
                fontSize: "40px",
                fontWeight: "700"
              }}
            >
              {token.substring(0, 4)} {token.substring(4, 8)}
            </div>
          </div>
          <div className="centerdComponent text-center d-none">
            <p>
              Then wait until the internet serice ask you to open the QR
              scanner.
            </p>
          </div>
          <Button
            color="primary"
            block
            onClick={e => history.push("/phone/qr")}
          >
            QR scannner
          </Button>
        </div>
      </Fragment>
    );
  }
}
