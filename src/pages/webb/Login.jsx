import React from "react";
import QRCode from "qrcode.react";

import Context from "../../context/defaultContext";
import history from "../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;
  intervalID = 0;

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.context.getStatus((body) => {
        if (body.status === "SIGNED") {
          this.context.logIn(() => history.push("/webb"))
        }
      })
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div className="centerdComponent text-center">
        <h2>Use your phone to scan this QR-code</h2>
        <QRCode value="login" level="H" />
      </div>
    );
  }
}
