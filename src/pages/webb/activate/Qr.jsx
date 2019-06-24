import React from "react";
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
          history.push("/webb/activate/userId")
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
        <div className="centerdComponent text-center">
          <h2>Use your phone to scan this QR-code</h2>
          <QRCode value={this.context.data.token} level="H" />
        </div>
      );
    }
    return <Button onClick={e => history.push("/webb")}>Back</Button>;
  }
}
