import React from 'react';
import QRCode from 'qrcode.react'
import { Form, FormGroup, Input, Button } from 'reactstrap';

import Context from '../../../context/defaultContext';
import history from '../../../utils/history';

export default class Start extends React.Component {
  static contextType = Context;

  render() {
    if (this.context.data && this.context.data.enterToken) {
      return (
        <div>
          <QRCode value={this.context.data.enterToken} level="H" />
        </div>
      )
    }
    return (
      <Button onClick={e => history.push('/webb')}>Back</Button>
    )
  }
}
