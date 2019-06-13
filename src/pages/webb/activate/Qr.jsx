import React from "react";
import QRCode from "qrcode.react";
import { Button } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    if (this.context.data && this.context.data.enterToken) {
      return (
        <div className="centerdComponent text-center">
          <h2>Use your phone to scan this QR-code</h2>
          <QRCode value={this.context.data.enterToken} level="H" />
        </div>
      );
    }
    return <Button onClick={e => history.push("/webb")}>Back</Button>;
  }
}
