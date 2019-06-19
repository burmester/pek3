import React from "react";
import QrReader from "react-qr-scanner";
import { Button, ButtonGroup } from "reactstrap";

import Context from "../../../context/defaultContext";
import history from "../../../utils/history";

export default class Start extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "Scan the QR-code",
      token: undefined,
      facingMode: "rear",
      error: false
    };
    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
  }
  handleScan(data) {
    const token = this.context.data.token;
    if (data === token) {
      this.context.scanOk(() => history.push("/phone/wait"));
    } else {
      this.setState({ result: "Not correct QR, try agian! ", token: data });
    }
  }
  handleError(err) {
    this.setState({ error: err.message });
  }
  render() {
    if (this.state.error) {
      return (
        <div className="centerdComponent text-center">
          <h2>{this.state.error}</h2>
          <p>You need to allow the camera</p>
          <Button
            onClick={e =>
              this.context.scanOk(() => history.push("/phone/wait"))
            }
          >
            Fake it
          </Button>
        </div>
      );
    }

    const previewStyle = {
      height: "400px",
      width: "375px",
      posistion: "relative",
      objectFit: "cover",
      marginBottom: "20px"
    };

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          facingMode={this.state.facingMode}
        />
        <div
          style={{
            height: "200px",
            width: "200px",
            border: "2px solid #FFF",
            position: "absolute",
            left: "calc(50% - 100px)",
            top: "150px",
            borderRadius: "10px"
          }}
        />
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            top: "370px",
            width: "200px",
            left: "calc(50% - 100px)",
            padding: "5px",
            background: "rgba(255,255,255,0.7)",
            borderRadius: "5px",
            color: "#005fa5",
            fontWeight: "600"
          }}
        >
          {this.state.result}
          <br />
          {this.state.token}
        </div>
        <div className="container text-center">
          <ButtonGroup>
            <Button
              color={this.state.facingMode === "rear" ? "primary" : "secondary"}
              onClick={e => this.setState({ facingMode: "rear" })}
            >
              Rear
            </Button>
            <Button
              color={
                this.state.facingMode === "front" ? "primary" : "secondary"
              }
              onClick={e => this.setState({ facingMode: "front" })}
            >
              Front
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
