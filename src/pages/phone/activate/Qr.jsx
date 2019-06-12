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
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data) {
    this.setState({
      result: data,
    })
    console.log(data)
  }
  handleError(err) {
    console.error(err)
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}
