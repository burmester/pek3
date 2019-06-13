import React from 'react';
import QrReader from 'react-qr-scanner'


import Context from '../../../context/defaultContext';
import history from '../../../utils/history';

export default class Start extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props)
    this.state = {
      delay: 100,
      result: false,
      facingMode: 'rear',
      error: false
    }
    this.handleScan = this.handleScan.bind(this)
    this.handleError = this.handleError.bind(this)
  }
  handleScan(data) {
    const token = this.context.data.token;
    if (data === token) {
      this.context.setDeviceId(data, () => history.push('/phone/passcode'))
    } else {
      this.setState({ result: "Not correct QR" })
    }

  }
  handleError(err) {
    this.setState({ error: err.message })
  }
  render() {
    if (this.state.error) {
      return (
        <div className="centerdComponent text-center">
          <h2>{this.state.error}</h2>
          <p>You need to allow the camera</p>
        </div>
      )
    }

    const previewStyle = {
      height: "400px",
      width: "100%",
      posistion: "relative",
    }


    return (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          facingMode={this.facingMode}
        />
        <div style={{
          height: "200px",
          width: "200px",
          border: "2px solid #FFF",
          position: "absolute",
          left: "calc(50% - 100px)",
          top: "calc(150px)",
          borderRadius: "10px"
        }}></div>
      </div>
    )
  }
}
