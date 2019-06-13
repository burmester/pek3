import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Context from '../context/defaultContext';

import Code from './webb/activate/Code';
import Qr from './webb/activate/Qr';
import Start from './phone/Start';



export default class extends React.Component {
  static contextType = Context;
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/webb" component={Start} />
          <Route path="/webb/activate/code" component={Code} />
          <Route path="/webb/activate/qr" component={Qr} />
        </Switch>
      </Fragment>)
  }
}
