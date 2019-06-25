import React, { Fragment } from "react";
import QRCode from "qrcode.react";
import { Button } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;
  intervalID = 0;

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.context.getStatus((body) => {
        if (body.status === "SCANED") {
          history.push("/webb/activate/wait")
        }
      })
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    if (this.context.data && this.context.data.token) {
      return (
        <Fragment>
          <div className="container espresso">
            <h1>
              Activate Digital ID
            </h1>
            <hr />
            <h3>Scan QR code</h3>
            <ul>
              <li>
                Open QR scanner in the security app.
              </li>
              <li>
                Point the camera at the QR code shown on the screen.
              </li>
            </ul>
            <div className="qrCode">
              <QRCode value={this.context.data.token} level="H" />
            </div>
            <div className="footer">
              <Button onClick={e => history.goBack()} color="secondary">
                Cancel
              </Button>
            </div>
          </div>
        </Fragment >
      );
    }
    return ("ERROR")
  }
}
