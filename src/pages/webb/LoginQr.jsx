import React, { Fragment } from "react";
import QRCode from "qrcode.react";
import { Button } from "reactstrap";


import Context from "../../context/defaultContext";
import history from "../../utils/history";

export default class LoginQr extends React.Component {
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
      <Fragment>
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
          <div className="centerdComponent text-center"
            style={{ marginTop: "0", marginBottom: "20px" }}>
            <h2>Digital ID</h2>
            <p><b>Open the Digital ID app.</b>Choose <i>log in</i> and scan the QR code on the screen.</p>
            <QRCode value="login" />
          </div>
          <Button color="primary" block onClick={e => history.goBack()}>
            Cancel
          </Button>
        </div>
      </Fragment>
    )
  }
}
